---
title: "Azure lab: virtual network, VPN, VM and backup"
summary: "Building a small company network in Azure from scratch while studying for AZ-104 — then documenting it with a diagram."
date: 2026-11-24
status: Planned
tags: ["Azure", "AZ-104", "Networking"]
icon: cloud
color: blue
---

## Goal

Practice everything AZ-104 covers by building one small, realistic environment — and keep it cheap by deleting resources after each session.

## Plan

- [ ] Entra ID: users, groups, roles, self-service password reset
- [ ] Virtual network with two subnets + network security groups
- [ ] Windows Server VM, connected through Azure Bastion
- [ ] Storage account with a file share
- [ ] Azure Backup for the VM, then a test restore
- [ ] Monitoring alerts in Azure Monitor
- [ ] Rebuild the whole lab with one Bicep file

## What I'll publish

A network diagram, the Bicep file, and what went wrong along the way.
