---
title: "DHCP and DNS — how devices get online and find each other"
summary: "What DHCP and DNS actually do, where they live in my home lab, and why no company network can run without them."
date: 2026-11-27
topic: Networking
tags: ["Networking", "DHCP", "DNS", "Home lab"]
icon: network
color: teal
---

Two invisible services make every network usable. My home lab runs both:
DHCP on the router (`R1-LAB`, `10.10.10.1`) and DNS on the server
(`DC01`, `10.10.10.10`).

## DHCP — the automatic address handout

**DHCP (Dynamic Host Configuration Protocol)** is the receptionist that hands
each device a "badge" when it joins the network. When Zarif's laptop booted, it
received four things automatically:

| Setting | Value | Purpose |
| --- | --- | --- |
| IP address | `10.10.10.21` | The device's identity |
| Subnet mask | `255.255.255.0` | How big the network is |
| Default gateway | `10.10.10.1` | The exit door to other networks |
| DNS server | `10.10.10.10` | Who to ask for name lookups |

The handshake is four steps — **DORA**:

1. **Discover** — the laptop broadcasts: "any DHCP server out there?"
2. **Offer** — the router replies: "take `10.10.10.21`."
3. **Request** — the laptop: "I'll take it."
4. **Acknowledge** — the router: "confirmed, it's yours (leased)."

The address is a **lease** — borrowed for a set time, then returned to the pool.

On the router, the pool is just:

```
ip dhcp excluded-address 10.10.10.1 10.10.10.20
ip dhcp pool LAB-POOL
 network 10.10.10.0 255.255.255.0
 default-router 10.10.10.1
 dns-server 10.10.10.10
```

The excluded range protects the gateway and the server zone, so clients only get
`.21` and up.

## DNS — the network's phone book

**DNS (Domain Name System)** translates names humans remember (`google.com`,
`dc01`) into the numbers computers use. In my lab, `DC01` runs DNS and handles
two kinds of lookup:

- **Internal names** — it knows these itself (`dc01.lab.zadotec.com`).
- **External names** — it doesn't know `google.com`, so it **forwards** the
  question to `8.8.8.8` and relays the answer back.

```
Add-DnsServerForwarder -IPAddress 8.8.8.8
```

So when a laptop opens `google.com`: it asks `DC01` → `DC01` forwards to `8.8.8.8`
→ the answer returns → the laptop connects. DNS finds the address; NAT carries the
traffic there.

## Why a company can't run without them

- **Without DHCP**, IT would hand-type an IP into every laptop, printer and phone
  — and one duplicate address breaks both devices. DHCP makes a new hire online in
  seconds, automatically.
- **Without DNS**, staff would memorise IP addresses for every server and site.
  With DNS they type a name, and moving a server means editing **one record**
  instead of telling everyone a new number.

Together they are why a network scales from 5 devices to 5,000 — the same
machinery running inside every real company.
