---
title: "AI ticket triage assistant"
summary: "A small tool that reads an IT ticket, suggests a category and priority, and links the matching fix from my own knowledge base."
date: 2026-11-24
status: Planned
tags: ["AI", "Python", "Service desk"]
icon: bot
color: teal
---

## Why

Many tickets repeat: printers, VPN, passwords, meeting-room screens. AI can sort them and suggest a first fix, so engineers spend time on the hard ones.

## Plan

- Write 10–15 short fix guides from my case studies (no company data).
- Build a simple Python app that sends a ticket text to an AI model with those guides.
- Return: category, priority, suggested fix, and the guide it used.
- Test it on **made-up** tickets and record how often it was right.
