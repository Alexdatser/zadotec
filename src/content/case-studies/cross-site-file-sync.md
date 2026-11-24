---
title: "Syncing a shared folder across 3 countries when DFS-R wasn't possible"
summary: "The plan was DFS Replication between three countries. It turned out to be impossible across AD forests — so we switched to scheduled Robocopy and fixed an 'Access is denied' along the way."
date: 2026-09-23
tags: ["Windows Server", "Active Directory", "Automation"]
icon: server
color: violet
---

## The goal

Engineering teams in **three countries** needed the same shared folder kept in sync between their local file servers.

## Plan A: DFS Replication — and why it failed

DFS-R was the natural choice. After working through permissions with the central infrastructure team, we confirmed with Microsoft that **a DFS-R replication group cannot span multiple Active Directory forests**. One of the three sites runs in a separate forest. Storage Replica was also ruled out for the same reason.

## Plan B: scheduled Robocopy

We switched to a **Robocopy-based sync** running as a scheduled task on each server.

- Site A → Site B: worked.
- Site A → Korea: failed with **"Access is denied"**.

## Finding the cause

The NTFS permissions on the Korean folder already gave Full Control to the other servers' **computer accounts**. But the **share-level (SMB) permissions** only allowed one admin group. Windows uses the *more restrictive* of share and NTFS permissions, so remote access was blocked.

**Fix:** grant the two remote server computer accounts Full access on the share as well. The sync then ran successfully.

## Lessons learned

- Check vendor limits (like cross-forest support) **before** spending days on permissions.
- "Access is denied" over the network = check **share permissions and NTFS permissions** — both must allow it.
- When a cross-site job runs as a scheduled task, it usually runs as the **computer account** (`SERVER$`), not as you.
