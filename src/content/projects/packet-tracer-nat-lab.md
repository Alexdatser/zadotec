---
title: "Packet Tracer: replicating my home lab with NAT"
summary: "Rebuilt my physical Cisco home lab in Packet Tracer — an SK ISP router, a Cisco ISR4331 doing NAT/PAT, an unmanaged switch, a Windows Server and two clients — then verified the private-to-public translation live."
date: 2026-11-26
status: Done
tags: ["Cisco", "Packet Tracer", "NAT", "Networking", "CCNA"]
icon: network
color: teal
---

## Goal

Recreate my real physical home lab inside Cisco Packet Tracer so I can practise
router configuration and networking concepts without touching the hardware, and
confirm that NAT behaves the same way in simulation as it does on my real
ISR4331.

## Topology

```
Internet
   │
[ SK ISP ]            2911 router — simulates my SK Broadband box (DHCP)
   │
[ ISR4331 ]          main router — does NAT/PAT, LAN gateway 10.10.10.1
   │
[ 2960 switch ]      unmanaged switch (stand-in for my SG95D-05)
   │
   ├── Server DC01   10.10.10.10   (domain controller / DNS)
   ├── Laptop Zarif  10.10.10.21
   └── Laptop Nurhon 10.10.10.22
```

## Addressing plan

| Device | Address | Role |
| --- | --- | --- |
| ISR4331 WAN (Gi0/0/0) | DHCP from SK (`192.168.35.x`) | Public side |
| ISR4331 LAN (Gi0/0/1) | `10.10.10.1` | Default gateway |
| Server DC01 | `10.10.10.10` | Server zone — fixed, low |
| Laptops | `10.10.10.21`, `.22` | Client zone |

The network is `10.10.10.0/24` → 254 usable addresses (`.1`–`.254`), since the
network address `.0` and broadcast `.255` are reserved.

## What I configured

- **SK ISP router** — a DHCP pool on `192.168.35.0/24` so the main router pulls a
  dynamic WAN address, exactly like the real SK box.
- **ISR4331** — WAN via DHCP, LAN at `10.10.10.1`, and NAT overload (PAT) so the
  whole `10.10.10.0/24` network shares one public address.

```
interface GigabitEthernet0/0/1
 ip address 10.10.10.1 255.255.255.0
 ip nat inside
ip access-list standard LAB-NAT
 permit 10.10.10.0 0.0.0.255
ip nat inside source list LAB-NAT interface GigabitEthernet0/0/0 overload
```

## Verifying NAT

After pinging across the ISR from both laptops, `show ip nat translations`
showed each private address translated to the single WAN address, separated by
port number — proof that PAT lets many devices share one public IP:

```
icmp 192.168.35.183:1  10.10.10.21:1  ...
icmp 192.168.35.183:2  10.10.10.22:2  ...
```

## What I learned

- The difference between `ip nat inside` and `ip nat outside`, and why NAT needs
  both sides marked.
- How `overload` (PAT) uses port numbers to keep shared traffic apart.
- Why routers boot with interfaces shut down, and the role of `no shutdown`.
- The running-config vs startup-config split, and why `write memory` matters.
- Subnet math for a `/24`: `2^8 − 2 = 254` usable hosts.
- Why servers sit low and static (`.10`) while clients sit higher (`.21+`).
