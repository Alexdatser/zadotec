---
title: "Share permissions vs NTFS permissions — the 'more restrictive wins' rule"
summary: "Why a folder can say Full Control and still return 'Access is denied' over the network."
date: 2026-11-24
topic: Windows Server
tags: ["Windows Server", "Permissions"]
icon: shield
color: violet
---

When someone opens a folder **over the network** (`\\server\share`), Windows checks two sets of permissions:

1. **Share permissions** — set on the share itself (Advanced Sharing).
2. **NTFS permissions** — set on the folder (Security tab).

The user gets the **more restrictive** of the two.

| Share | NTFS | Result over network |
|---|---|---|
| Full Control | Read | Read |
| Read | Full Control | Read |
| Not listed | Full Control | **Access denied** |

Locally on the server, only NTFS applies.

**Common practice:** give *Authenticated Users* (or the right groups) Full Control at the share level, and control access with NTFS.

> I hit this in a real cross-site sync — see the case study *Syncing a shared folder across 3 countries*.
