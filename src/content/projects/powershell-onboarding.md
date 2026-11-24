---
title: "PowerShell: new-employee onboarding in one script"
summary: "A script that creates the user, adds groups and sets up the basics — turning a 30-minute checklist into a few seconds."
date: 2026-11-24
status: Planned
tags: ["PowerShell", "Automation", "Active Directory"]
icon: terminal
color: pink
---

## Goal

Automate the repetitive steps of onboarding a new user in a **lab** Active Directory (never on company systems without approval).

## Plan

1. Read new users from a CSV file (name, department, manager).
2. Create the account with a standard naming rule.
3. Add department groups and set the home folder.
4. Write a log file and a short summary report.
5. Use AI (Copilot / ChatGPT) to review the script for errors — and note what it got wrong.

```powershell
# Example of where this starts
Import-Csv .\new-users.csv | ForEach-Object {
    New-ADUser -Name "$($_.First) $($_.Last)" -SamAccountName $_.User -Department $_.Dept -Enabled $true
}
```
