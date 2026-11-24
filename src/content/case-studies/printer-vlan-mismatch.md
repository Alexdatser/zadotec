---
title: "Printer offline after a 2-meter move: a VLAN mismatch"
summary: "A multifunction printer stopped working after being moved a short distance. The cable was fine — the switch port was on the wrong VLAN."
date: 2026-09-11
tags: ["Networking", "VLAN", "Troubleshooting"]
icon: network
color: blue
---

## The symptom

A multifunction printer was moved about two meters to a new spot in the office. After the move it stopped printing, and the print management server showed it as **offline**. Nothing else had changed on the printer.

## How I found the cause

1. **Checked the basics first** — power, cable, link light on the printer and the wall port. All fine.
2. **Plugged my laptop into the same cable.** My laptop received an IP address from the **workstation network**, not the printer network. That was the key clue: the cable worked, but it was landing in the wrong VLAN.
3. **Worked with the remote network team** to look up the printer's MAC address on the switch. The port it was connected to was configured for the workstation VLAN, while printers live on their own VLAN.

## The fix

We moved the cable to a switch port that is configured for the **printer VLAN**. The printer picked up its normal address and gateway straight away.

**Verification:** a ping test from the network showed 0% packet loss with 2–4 ms response time, and the print server showed the device online again.

## Lessons learned

- "It only moved two meters" often means **it moved to a different switch port** — and ports are not all the same.
- A laptop on the same cable is the fastest VLAN test you can do on site.
- Label printer ports at the wall and on the patch panel so the next move doesn't break anything.

> Details such as hostnames, IP ranges and switch names are left out on purpose.
