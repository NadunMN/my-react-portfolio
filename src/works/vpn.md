# How to Set Up Your Own VPN Using WireGuard on DigitalOcean (Ubuntu)

**Nadun Madusanka**  
CS Undergraduate @UCSC  

**February 24, 2026**

---

## Introduction

A VPN (Virtual Private Network) is a technology that creates a secure, encrypted connection between your device and the internet. It protects your data, hides your IP address, and improves online privacy.

---

## What is WireGuard?

WireGuard is a modern, fast, and lightweight VPN protocol designed to be:

- Secure (state-of-the-art cryptography)  
- Very fast  
- Simple to configure  
- Easy to maintain  

We will host it on:

- **DigitalOcean** — a cloud platform that lets you create virtual servers (Droplets)

---

## Step 1: Create a DigitalOcean Droplet

### Droplet Configuration

- **OS:** Ubuntu 22.04 LTS  
- **Plan:** Basic ($5/month is enough)  
- **Authentication:** Add your SSH Public Key (recommended)  
- **Datacenter Region:** Choose closest to your location  

---

### Open Required Firewall Ports

#### DigitalOcean Firewall

Allow:

- `22` → SSH (TCP)  
- `51820` → WireGuard (UDP)  

#### Ubuntu (UFW)

```bash
ufw allow 22/tcp
ufw allow 51820/udp
ufw enable
```

---

## Step 2: Connect to Your Server

```bash
ssh root@your_server_ip
```

If using SSH key:

```bash
ssh -i ~/.ssh/id_rsa root@your_server_ip
```

---

## Step 3: Install WireGuard on Server

### Update System

```bash
apt update && apt upgrade -y
```

### Install WireGuard

```bash
apt install wireguard -y
```

---

## Step 4: Use Automated WireGuard Installer (Recommended)

We’ll use this script:

🔗 https://github.com/angristan/wireguard-install.git

```bash
curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh
chmod +x wireguard-install.sh
./wireguard-install.sh
```

### The Script Will:

- Configure the server  
- Generate keys  
- Create client config file  
- Enable IP forwarding  
- Set firewall rules  

Follow the prompts and create your first client.

---

## Step 5: Download Client Configuration File

Example location:

```
/root/client-name.conf
```

Download it:

```bash
scp root@your_server_ip:/root/client-name.conf .
```

---

## Step 6: Setup WireGuard on Ubuntu Client

### Install WireGuard

```bash
sudo apt install wireguard -y
```

### Move Config File

```bash
sudo mv client-name.conf /etc/wireguard/wg0.conf
```

### Set Permissions

```bash
sudo chmod 600 /etc/wireguard/wg0.conf
```

---

## Step 7: Start VPN

### Start

```bash
sudo wg-quick up wg0
```

### Check Your IP

```bash
curl ifconfig.me
```

> If the IP matches your Droplet IP, VPN is working ✅

---

## Stop VPN

```bash
sudo wg-quick down wg0
```

---

## What Happens Behind the Scenes?

WireGuard:

- Creates a virtual network interface (`wg0`)  
- Encrypts your traffic  
- Routes traffic through your VPS  
- Uses UDP on port `51820`  

---

## Optional: Enable Auto Start on Boot

```bash
sudo systemctl enable wg-quick@wg0
```

### Disable

```bash
sudo systemctl disable wg-quick@wg0
```

---

## Testing & Troubleshooting

### Check WireGuard Status

```bash
sudo wg
```

### Check Interface

```bash
ip a
```

### Check Routing

```bash
ip route
```

---

## Security Tips

- Use SSH keys (disable password login)  
- Change SSH port (optional)  
- Keep system updated  
- Restrict firewall to only required ports  
- Do not share private keys  

---

## Final Outcome

- ✅ Secure encrypted VPN connection  
- ✅ Full control over your own VPN server  
- ✅ Improved privacy and IP masking  
- ✅ Lightweight and high-performance setup  