import { FaAws, FaDocker, FaLinux, FaShieldAlt } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins, SiPrometheus } from "react-icons/si";

export const projects = [
    {
        title: "AWS Infrastructure",
        category: "Cloud",
        description: "Designed and implemented scalable and secure AWS cloud infrastructure using Infrastructure as Code (Terraform, CloudFormation). Created robust architecture with VPCs, subnets, security groups, and IAM policies following AWS Well-Architected Framework principles.",
        details: [
            "Architected multi-region AWS environments using Terraform.",
            "Implemented strict IAM policies and security groups.",
            "Optimized cost by 30% using Spot Instances and Auto Scaling."
        ],
        tech: ["AWS", "Terraform", "CloudFormation"],
        icon: FaAws,
        color: "text-orange-500"
    },
    {
        title: "CI/CD Pipelines",
        category: "DevOps",
        description: "Built comprehensive CI/CD pipelines using Jenkins, GitLab CI, and AWS CodePipeline. Implemented automated build, test, and deployment workflows with security scanning and code quality checks.",
        details: [
            "Reduced deployment time by 70% via parallelized builds.",
            "Integrated SonarQube and OWASP ZAP for continuous security scanning.",
            "Automated release versioning and changelog generation."
        ],
        tech: ["Jenkins", "GitLab CI", "AWS CodePipeline"],
        icon: SiJenkins,
        color: "text-red-500"
    },
    {
        title: "Kubernetes Clusters",
        category: "Containerization",
        description: "Deployed and managed highly available Kubernetes clusters on AWS EKS, GCP GKE, and on-premise environments. Implemented GitOps practices with ArgoCD for automated deployments and Helm charts.",
        details: [
            "Managed EKS clusters handling 10k+ concurrent requests.",
            "Implemented GitOps flows using ArgoCD for zero-downtime deployments.",
            "Custom Helm charts for microservices orchestration."
        ],
        tech: ["Kubernetes", "EKS", "ArgoCD", "Helm"],
        icon: SiKubernetes,
        color: "text-blue-500"
    },
    {
        title: "Monitoring Solutions",
        category: "Observability",
        description: "Implemented comprehensive monitoring and observability solutions using Prometheus, Grafana, ELK stack, and AWS CloudWatch. Created custom dashboards and automated alerting with PagerDuty.",
        details: [
            "Created unified Grafana dashboards for system and business metrics.",
            "Set up intelligent alerting rules to reduce alert fatigue.",
            "Implemented distributed tracing for microservices debugging."
        ],
        tech: ["Prometheus", "Grafana", "ELK", "CloudWatch"],
        icon: SiPrometheus,
        color: "text-orange-600"
    },
    {
        title: "Security Implementation",
        category: "Security",
        description: "Designed and implemented comprehensive security measures following DevSecOps principles. Integrated security scanning into CI/CD pipelines (SonarQube, OWASP ZAP) and implemented IAM best practices.",
        details: [
            "Automated compliance checks for CIS benchmarks.",
            "Implemented least-privilege access control across all environments.",
            "Conducted regular vulnerability assessments and patch management."
        ],
        tech: ["DevSecOps", "SonarQube", "IAM"],
        icon: FaShieldAlt,
        color: "text-green-500"
    },
    {
        title: "Automation Projects",
        category: "Automation",
        description: "Developed automation solutions using Python, Bash, and PowerShell to streamline infrastructure management. Created self-service tools for developers and infrastructure validation frameworks.",
        details: [
            "Automated server provisioning and configuration management.",
            "Built self-service portals for developer environment spin-up.",
            "Reduced operational toil by 60% through scripting."
        ],
        tech: ["Python", "Bash", "PowerShell"],
        icon: FaLinux,
        color: "text-yellow-400"
    }
];
