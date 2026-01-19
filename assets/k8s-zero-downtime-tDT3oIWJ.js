const e=`---
title: "Zero Downtime Deployments with Kubernetes"
date: "2024-01-10"
category: "DevOps"
tags: ["Kubernetes", "CI/CD", "ArgoCD"]

description: "Implementing rolling updates and blue-green deployments using Kubernetes and ArgoCD."
---

# Rolling Updates in K8s

Kubernetes makes zero-downtime deployment easy with \`RollingUpdate\` strategy.

\`\`\`yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
\`\`\`

## The GitOps Approach

Using **ArgoCD**, we can visualize this process. When you push a change to Git, ArgoCD detects the drift and syncs the cluster state.

1.  New ReplicaSet created.
2.  Pods spin up.
3.  Readiness probes pass.
4.   Service traffic switches.
5.  Old pods terminate.

This ensures your end-users never see an error page during updates.
`;export{e as default};
