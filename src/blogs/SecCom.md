## Introduction

In modern distributed systems, secure communication between application servers and database servers is a critical requirement. Data exchanged between the middleware layer and the database often contains sensitive information such as credentials, financial records, and personal details. Without encryption, this traffic is vulnerable to eavesdropping and man-in-the-middle attacks.

This document demonstrates the setup of a secure environment where Apache Tomcat communicates with a MySQL database server using TLSv1.2. The objective is to configure both servers in such a way that Tomcat itself, not just applications deployed within it, is able to establish a secure connection with MySQL. The connection is restricted to trusted IP addresses and enforced with selected cipher suites available in TLSv1.2, ensuring both authentication and confidentiality of data transmission.

The configuration is implemented in a Linux environment, where SSL/TLS certificates are generated, MySQL is configured to accept only secure client connections, and Tomcat is configured to use a keystore and truststore for certificate management. This setup guarantees that only the trusted Tomcat server is permitted to access the MySQL database over an encrypted channel, thereby enhancing the overall security posture of the system.

---

## 1. Create a Certificate Authority

```bash
mkdir ~/certs && cd ~/certs

# Generate CA key
openssl genrsa 2048 > ca-key.pem

# Generate self-signed CA cert
openssl req -new -x509 -nodes -days 365 \
    -key ca-key.pem -out ca-cert.pem \
    -subj "/CN=MyCA"
```

### Output Files

- `ca-key.pem` → Private CA key (keep safe)
- `ca-cert.pem` → Public CA certificate (shared with servers)

---

## 2. Create MySQL Server Certificate (on Tomcat Server)

```bash
# Private key + request
openssl req -newkey rsa:2048 -days 365 -nodes \
    -keyout mysql-server-key.pem -out mysql-server-req.pem \
    -subj "/CN=mysql-server"

# Sign with CA
openssl x509 -req -in mysql-server-req.pem -days 365 \
    -CA ca-cert.pem -CAkey ca-key.pem -set_serial 01 \
    -out mysql-server-cert.pem
```

### Copy Certificates to MySQL Server

Files to copy:
- `ca-cert.pem`
- `mysql-server-key.pem`
- `mysql-server-cert.pem`

```bash
scp -r <username>@<host>:~/path/to/certs ~/path/to/copy
```

> `-r` → Copies all files and subfolders recursively

---

## 3. Configure MySQL Server for TLS (Server B)

Edit file:

```bash
/etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
[mysqld]
ssl-ca = /etc/mysql/certs/ca-cert.pem
ssl-cert = /etc/mysql/certs/mysql-server-cert.pem
ssl-key = /etc/mysql/certs/mysql-server-key.pem
require_secure_transport = ON
tls_version = TLSv1.2

# Restrict to specific IP
bind-address = 192.168.1.14
```

### bind-address Explanation

- `127.0.0.1` → Localhost only  
- `192.168.x.x` → Specific IP only  
- `0.0.0.0` → All interfaces  

⚠️ **Security Risk**

Using:
```
bind-address=0.0.0.0 + 'user'@'%'
```
Allows anyone to attempt connection unless:
- Firewall rules are enforced
- TLS and strong passwords are used

---

### Move Certificates

```bash
sudo mkdir /etc/mysql/certs
sudo cp ~/certs/*.pem /etc/mysql/certs/
sudo chmod 600 /etc/mysql/certs/*
```

### Restart MySQL

```bash
sudo systemctl restart mysql
```

---

## 4. Configure MySQL User for SSL + IP Restriction

```sql
CREATE USER 'tomcat'@'%'
IDENTIFIED BY 'securePass'
REQUIRE X509;

GRANT ALL PRIVILEGES ON *.* TO 'tomcat'@'%';
FLUSH PRIVILEGES;
```

> Replace `%` with Tomcat server IP for stricter access control.

### Notes

- MySQL 8.x uses **opportunistic SSL**
- `REQUIRE SSL` → requires encryption only  
- `REQUIRE X509` → requires client certificate  

---

## 5. Create Tomcat Client Certificate (Server A)

```bash
# Generate key + request
openssl req -newkey rsa:2048 -days 365 -nodes \
    -keyout tomcat-client-key.pem -out tomcat-client-req.pem \
    -subj "/CN=tomcat-client"

# Sign with CA
openssl x509 -req -in tomcat-client-req.pem -days 365 \
    -CA ca-cert.pem -CAkey ca-key.pem -set_serial 02 \
    -out tomcat-client-cert.pem
```

### Files Created

- `tomcat-client-cert.pem`
- `tomcat-client-key.pem`
- `ca-cert.pem`

---

## 6. Java Keystore & Truststore

### What is a Keystore?

A **Java Keystore (JKS)** stores:

- 🔑 Private keys (identity)
- 📜 Certificates (trust)
- 🔒 Encrypted with password

### Purpose

- **Truststore** → Who I trust (CA certs)
- **Keystore** → Who I am (client cert + key)

---

### Convert Certificates

```bash
# Create PKCS12 keystore
openssl pkcs12 -export \
    -in tomcat-client-cert.pem \
    -inkey tomcat-client-key.pem \
    -certfile ca-cert.pem \
    -out tomcat-keystore.p12 \
    -name tomcat-client \
    -password pass:changeit
```

```bash
# Create truststore
keytool -import -trustcacerts -alias mysqlCA \
    -file ca-cert.pem \
    -keystore tomcat-truststore.jks \
    -storepass changeit -noprompt
```

### Move to Tomcat

```bash
sudo mv tomcat-keystore.p12 tomcat-truststore.jks /usr/share/tomcat10/lib/
```

---

## 7. Configure Tomcat JDBC (Server A)

```xml
<Context>
  <Resource name="jdbc/mysqlDB"
    auth="Container"
    type="javax.sql.DataSource"
    username="tomcat"
    password="securePass"
    driverClassName="com.mysql.cj.jdbc.Driver"
    url="jdbc:mysql://192.168.1.200:3306/testdb?
         verifyServerCertificate=true&
         useSSL=true&
         requireSSL=true&
         enabledTLSProtocols=TLSv1.2&
         enabledSslCipherSuites=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
    />
</Context>
```

### Replace

- `192.168.1.200` → MySQL Server IP  
- `securePass` → Your password  

---

## 8. Test Secure Connection

### From Tomcat Server

```bash
mysql --host=192.168.1.200 --user=tomcat --password=securePass \
  --ssl-ca=ca-cert.pem \
  --ssl-cert=tomcat-client-cert.pem \
  --ssl-key=tomcat-client-key.pem
```

### Verify TLS on MySQL Server

```sql
SHOW SESSION STATUS LIKE 'Ssl_version';
SHOW SESSION STATUS LIKE 'Ssl_cipher';
```

### Expected Output

```
Ssl_version | TLSv1.2
Ssl_cipher  | TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
```

---

## 9. File Distribution

### Server A (Tomcat)

- `tomcat-client-cert.pem`
- `tomcat-client-key.pem`
- `ca-cert.pem`
- `tomcat-keystore.p12`
- `tomcat-truststore.jks`

### Server B (MySQL)

- `mysql-server-cert.pem`
- `mysql-server-key.pem`
- `ca-cert.pem`

---

## Final Outcome

- ✅ MySQL accepts only secure connections  
- ✅ Communication is encrypted with TLSv1.2  
- ✅ Only trusted Tomcat server can connect  
- ✅ Strong cipher suites enforced  
- ✅ Mutual authentication enabled  

---

## GitHub Repository

👉 https://github.com/NadunMN/tomcat-mysql-tls-setup