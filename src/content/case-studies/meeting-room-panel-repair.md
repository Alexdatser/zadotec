---
title: "Meeting-room display: from 'buy a new one' to a repair"
summary: "A conference display lost wireless screen sharing and later stopped booting. Careful testing and documentation turned a replacement purchase into an on-site repair."
date: 2026-08-19
tags: ["Hardware", "Vendor management", "Troubleshooting"]
icon: monitor
color: orange
---

## The symptom

One of two identical interactive meeting-room displays lost **wireless screen sharing**: no QR code or PIN, the built-in hotspot showed no name, and an internal service crashed on every reboot. The second display, on the same firmware, worked fine.

## What I tested

1. **Re-seated the Wi-Fi module** — it worked for about eight days, then failed again.
2. **Cross-tested parts:** moved the known-good Wi-Fi module from the working display into the faulty one. The error stayed — so the module was not the problem.
3. Shared the results with the manufacturer's global support, who pointed to a **mainboard fault**.
4. Later the display stopped booting completely. I recorded exactly what each port and button did.

## The business side

The local reseller said the model was discontinued and parts were not available, and offered a trade-in on a new unit. Before anyone spent budget, finance asked for the **confirmed root cause**. I coordinated:

- an on-site diagnostic visit from the vendor's engineers,
- approval of the visit cost with the regional IT and vendor management teams,
- and a fallback plan using an existing equipment budget if replacement was needed.

## The result

The vendor engineers **repaired the unit on site** with a replacement part. No new purchase was needed.

## Lessons learned

- Cross-testing parts between identical units gives vendors evidence they can't argue with.
- Write down every test and result — it is what lets managers make a money decision.
- Always ask for an on-site diagnosis before approving a replacement.
