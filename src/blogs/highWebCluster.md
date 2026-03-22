
## Project Overview

This project demonstrates a production-grade **High-Availability (HA) Web Cluster** built entirely on open-source Linux infrastructure. The architecture ensures **zero-downtime web service delivery** by combining reverse proxy load balancing, automatic failover via VRRP, and centralized database connectivity -- all without relying on cloud-managed services.
The system is designed so that if any component on the primary server fails, traffic is seamlessly rerouted to the backup server with **no manual intervention and no client-side configuration changes**.

---

## Architecture at a Glance
```
                    Client Request
                         |
                    [ Virtual IP ]  <-- Floating IP managed by Keepalived (VRRP)
                         |
              +----------+----------+
              |                     |
           [ VM1 ]              [ VM2 ]
         (MASTER)              (BACKUP)
              |                     |
     +--------+--------+  +--------+--------+
     |  Squid (Rev.    |  |  Squid (Rev.    |
     |  Proxy + LB)    |  |  Proxy + LB)    |
     +--------+--------+  +--------+--------+
              |  \          /  |
              |   \        /   |       <-- Cross-wired: each Squid
              |    \      /    |           can reach BOTH Tomcats
              |     \    /     |
     +--------+---+  \/  +----+-------+
     |  Tomcat    | /  \ |  Tomcat    |
     |  (App Srv) |/    \|  (App Srv) |
     +--------+---+      +----+-------+
              |                |
              +-------+-------+
                      |
                 [ MySQL DB ]
                (Centralized)
```
---
## Technology Stack
| Layer | Technology | Role |
|---|---|---|
| **Failover / HA** | Keepalived (VRRP) | Manages a floating Virtual IP; automatic master/backup election |
| **Reverse Proxy & Load Balancer** | Squid Proxy | Distributes HTTP/HTTPS traffic across Tomcat backends using round-robin |
| **Application Server** | Apache Tomcat | Serves Java web application (JSP) on port 8080 |
| **Database** | MySQL 8.0 | Centralized relational database accessed via JDBC connection pooling |
| **SSL/TLS** | OpenSSL (self-signed CA) | SSL termination at the Squid layer for HTTPS support |
| **OS / Platform** | Ubuntu Linux VMs | All components run on standard Ubuntu virtual machines |
---
## How It Works -- Component Deep Dive
### 1. Keepalived -- The Heartbeat of High Availability
Keepalived implements the **VRRP (Virtual Router Redundancy Protocol)** to provide automatic failover between two nodes:
- **Virtual IP (VIP):** A floating IP address (e.g., `192.168.1.40/24`) is shared between VM1 (Master, priority 100) and VM2 (Backup, priority 90). Clients always connect to this single VIP -- they never need to know which physical server is active.
- **Health Monitoring:** Keepalived runs a health-check script (`systemctl is-active squid`) every 5 seconds. If Squid fails 4 consecutive checks, the node's priority drops and the backup takes over the VIP automatically.
- **Instant Recovery:** Once the failed service recovers (1 successful check), the node can reclaim its role.
- **VRRP Advertisements:** Nodes exchange heartbeat messages every 1 second to detect failures rapidly.
**Failover scenario:** If Squid crashes on VM1, Keepalived detects the failure within ~20 seconds (4 checks x 5s interval), lowers VM1's effective priority, and VM2 seamlessly takes ownership of the VIP. Clients experience near-zero downtime.
### 2. Squid -- Reverse Proxy & Load Balancer
Squid operates in **accelerator (reverse proxy) mode**, sitting between clients and backend Tomcat servers:
- **Dual-Port Listening:** Accepts HTTP on port 80 and HTTPS on port 443 with SSL termination (`tls-cert` pointing to a self-signed certificate).
- **Round-Robin Load Balancing:** Distributes requests evenly across multiple Tomcat backend servers defined as `cache_peer` entries.
- **Cross-Wired Backends:** Each Squid instance on VM1 and VM2 is configured to route traffic to **both** Tomcat servers (on both VMs). This means even if one Tomcat instance goes down, the Squid proxy can still serve requests from the remaining backend.
- **No Caching for Dynamic Content:** Caching is explicitly disabled (`cache deny all`) since the web app serves dynamic JSP content.
- **Forced Backend Routing:** The `never_direct allow all` directive ensures all requests are always forwarded to backend Tomcat servers -- Squid never tries to fetch content directly from the internet.
### 3. Apache Tomcat -- Application Server
Tomcat serves a Java web application that:
- **Connects to MySQL via JNDI/JDBC:** Uses a `DataSource` configured in Tomcat's `context.xml` with connection pooling (`maxTotal=20`, `maxIdle=10`).
- **MySQL Connector/J:** The project includes the MySQL JDBC driver (`mysql-connector-j 9.3.0`) for database connectivity.
- **Server Identification:** The JSP page (`DB-conn.jsp`) outputs which server handled the request (e.g., "Connected to database! from server A"), making it easy to verify load balancing is working.
### 4. MySQL -- Centralized Database
A single MySQL 8.0 server acts as the shared data store:
- **Remote Access:** Configured to accept connections from the Tomcat application servers over the network (`192.168.1.34:3306`).
- **Dedicated User:** A `tomcat` database user is created with privileges scoped to the application database (`webdb`), following the principle of least privilege.
- **JDBC URL:** `jdbc:mysql://192.168.1.34:3306/tomcat?useSSL=false`
### 5. SSL/TLS -- Secure Communication
The project implements a **self-signed Certificate Authority (CA)** for HTTPS:
- A custom CA (`myCA.crt` / `myCA.key`) is created to sign the Squid server certificate.
- Squid terminates SSL at the proxy layer, forwarding plain HTTP to backend Tomcat servers -- this offloads encryption overhead from the application servers.
- Clients connecting via HTTPS (e.g., `https://192.168.1.100/myapp/`) see the self-signed certificate.
---
## Network Topology & IP Addressing
| Component | IP Address | Port |
|---|---|---|
| Virtual IP (VIP) | `192.168.1.40` | -- |
| VM1 - Squid/Tomcat/Keepalived (Master) | `192.168.1.29` | 80, 443, 8080 |
| VM2 - Squid/Tomcat/Keepalived (Backup) | `192.168.1.32` | 80, 443, 8080 |
| MySQL Database Server | `192.168.1.34` | 3306 |
---
## Failover Scenarios Handled
| Scenario | What Happens |
|---|---|
| **Squid crashes on Master** | Keepalived detects failure via health script, lowers priority, Backup takes VIP |
| **Entire Master VM goes down** | VRRP heartbeat times out, Backup assumes VIP ownership |
| **One Tomcat backend fails** | Squid's round-robin skips the dead backend, routes to the surviving Tomcat |
| **Master recovers** | Keepalived re-evaluates priorities; Master reclaims VIP (preemption) |
---
## Key Design Decisions
1. **Cross-Wired Architecture:** Each Squid proxy can reach both Tomcat instances, not just the local one. This provides an additional layer of redundancy beyond the VRRP failover.
2. **Health-Aware Failover:** Rather than simple heartbeat-based failover, Keepalived actively monitors the Squid service. This catches application-level failures, not just network/VM failures.
3. **SSL Termination at Proxy:** Offloading SSL to Squid simplifies Tomcat configuration and improves backend performance.
4. **No Caching for Dynamic Apps:** Deliberately disabling Squid's caching prevents stale data issues with dynamic JSP content.
5. **Connection Pooling:** JNDI DataSource configuration in Tomcat efficiently manages database connections with configurable pool sizes.
6. **All Open-Source Stack:** The entire infrastructure uses freely available, battle-tested open-source software -- no vendor lock-in.
---
## Skills & Technologies Demonstrated
- **Linux Systems Administration** -- Configuring services, networking, and systemd on Ubuntu
- **High Availability & Failover** -- VRRP protocol, Keepalived configuration, health scripting
- **Reverse Proxy & Load Balancing** -- Squid in accelerator mode, round-robin distribution
- **SSL/TLS & PKI** -- Self-signed CA creation, certificate management, SSL termination
- **Java Web Applications** -- Apache Tomcat, JSP, JNDI DataSource, JDBC connectivity
- **Database Administration** -- MySQL user management, remote access configuration, privilege grants
- **Network Engineering** -- Virtual IPs, subnetting, multi-VM topologies, cross-wired service routing
- **Infrastructure as Code** -- All configurations are version-controlled and reproducible
---
## Project Repository
GitHub: [NadunMN/High-Availability-Web-Cluster](https://github.com/NadunMN/High-Availability-Web-Cluster)
---
*This project showcases hands-on infrastructure engineering skills by building a resilient, load-balanced web cluster from the ground up using industry-standard open-source tools -- the same building blocks used in enterprise production environments worldwide.*
