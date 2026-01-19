---
title: "Essential Linux Commands for DevOps"
date: "2023-12-05"
category: "Linux"
tags: ["Bash", "Shell", "Terminal"]

description: "A curated list of Linux commands that every DevOps engineer should know by heart."
---

# Beyond `ls` and `cd`

As a DevOps engineer, the terminal is your home. Here are some power commands:

### 1. `awk` and `sed`
Text processing beasts.

```bash
# Extract the 2nd column of a CSV
awk -F',' '{print $2}' data.csv
```

### 2. `netstat` / `ss`
Checking ports.
```bash
ss -tulpn | grep :80
```

### 3. `systemctl`
Managing services.
*   `systemctl status docker`
*   `systemctl restart nginx`

Mastering these tools will make your debugging sessions significantly shorter.
