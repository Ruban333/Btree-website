import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "azure-devops",
  name: "Azure DevOps",
  track: "Cloud & DevOps",
  seo: {
    title: "Azure DevOps Course in Chennai with Placement | BTree",
    description:
      "Azure DevOps course in Chennai: Azure Pipelines, Repos, Docker, AKS, Terraform and Bicep in 3 months of live labs. AZ-400 prep and placement support.",
  },
  hero: {
    h1: "Azure DevOps course in Chennai",
    lead: "The BTree Azure DevOps course in Chennai teaches you to build, test and release software on Microsoft Azure with Azure Boards, Repos and Pipelines, GitHub Actions, Docker, Kubernetes (AKS), Terraform and Bicep. In 3 months of live, hands-on classes you build 3 CI/CD projects, prepare for the AZ-400 exam and get placement support for DevOps roles.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] Azure DevOps learners placed in 2026",
    },
    syllabusButton: "Download Azure DevOps syllabus (PDF)",
    formTitle: "Talk to an Azure DevOps advisor",
  },
  glance: {
    title: "How long is the Azure DevOps course?",
    lead: "The Azure DevOps course takes **3 months, about 120 hours** of live classes and labs.",
    batches: [
      { name: "Duration", duration: "3 months" },
      { name: "Hours of learning", duration: "120 hours" },
    ],
  },
  whatis: {
    title: "What is Azure DevOps?",
    definition:
      "**Azure DevOps** is both Microsoft's DevOps service (Azure Boards, Repos, Pipelines, Test Plans and Artifacts) and the practice of automating how software is built, tested and deployed to Microsoft Azure. Azure DevOps engineers use it with GitHub Actions, Docker, Azure Kubernetes Service and infrastructure as code.",
    why: "Companies that run on Microsoft technologies, including many banks, insurers and global capability centres in Chennai, standardise on Azure, so Azure DevOps engineers are hired steadily.",
    pipeline: {
      label: "A CI/CD pipeline on Azure",
      caption: "The CI/CD pipeline you build and run during the course.",
      steps: [
        {
          label: "Plan",
          tools: "Azure Boards",
        },
        {
          label: "Code",
          tools: "Azure Repos, GitHub",
        },
        {
          label: "Build",
          tools: "Azure Pipelines (YAML)",
        },
        {
          label: "Package",
          tools: "Docker, ACR, Azure Artifacts",
        },
        {
          label: "Deploy",
          tools: "AKS, App Service, Terraform, Bicep",
        },
        {
          label: "Monitor",
          tools: "Azure Monitor, Application Insights",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the Azure DevOps course",
    lead: "By the end you can automate the full path from a work item to a monitored release on Azure on your own.",
    items: [
      {
        title: "Work with Azure and Linux",
        text: "Subscriptions, Entra ID, RBAC, VNets, VMs and Bash.",
      },
      {
        title: "Plan work in Azure Boards",
        text: "Agile, Scrum and Kanban with work items and sprints.",
      },
      {
        title: "Manage code in Git",
        text: "Branch policies, pull requests and Azure Repos.",
      },
      {
        title: "Build YAML pipelines",
        text: "Multi-stage CI/CD, agents, templates and approvals.",
      },
      {
        title: "Run containers on AKS",
        text: "Docker, Azure Container Registry and Helm.",
      },
      {
        title: "Write infrastructure as code",
        text: "Terraform, Bicep and ARM templates.",
      },
      {
        title: "Secure the pipeline",
        text: "Key Vault, service connections, SonarQube and dependency scanning.",
      },
      {
        title: "Monitor releases",
        text: "Azure Monitor, Application Insights and Log Analytics.",
      },
    ],
  },
  who: {
    title: "Who should join this Azure DevOps course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "Engineering and science graduates; Linux and Azure basics are taught from scratch.",
      },
      {
        title: ".NET and Java developers",
        text: "Learn to ship and run the code you write on Azure.",
      },
      {
        title: "System and Azure admins",
        text: "Move from manual operations to automation.",
      },
      {
        title: "Testers and support engineers",
        text: "Move into DevOps with weekend batches.",
      },
    ],
  },
  curriculum: {
    title: "Azure DevOps course syllabus",
    lead: "9 modules and a capstone, about 120 hours of live classes and labs.",
    modules: [
      {
        title: "Linux, networking and scripting",
        sessions: "6 sessions",
        bullets: ["Linux commands, permissions and services", "Bash and PowerShell scripting"],
      },
      {
        title: "Azure fundamentals",
        sessions: "8 sessions",
        bullets: ["Subscriptions, Entra ID and RBAC", "VNets, VMs, storage and App Service"],
      },
      {
        title: "Azure Boards and Agile",
        sessions: "3 sessions",
        bullets: ["Work items, sprints and Kanban boards"],
      },
      {
        title: "Git, Azure Repos and GitHub",
        sessions: "4 sessions",
        bullets: ["Branching strategies and pull requests", "Branch policies and code reviews"],
      },
      {
        title: "Azure Pipelines",
        sessions: "10 sessions",
        bullets: [
          "YAML multi-stage pipelines",
          "Agents, variable groups and templates",
          "Environments, approvals and release strategies",
          "GitHub Actions for Azure",
        ],
      },
      {
        title: "Docker, ACR and AKS",
        sessions: "9 sessions",
        bullets: ["Dockerfiles and Azure Container Registry", "AKS clusters, deployments and services", "Helm charts"],
      },
      {
        title: "Infrastructure as code",
        sessions: "7 sessions",
        bullets: ["Terraform modules and remote state", "Bicep and ARM templates"],
      },
      {
        title: "DevSecOps and monitoring",
        sessions: "5 sessions",
        bullets: [
          "Key Vault and service connections",
          "SonarQube and dependency scanning",
          "Azure Monitor and Application Insights",
        ],
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "6 sessions",
        bullets: ["End-to-end capstone pipeline", "AZ-400 practice tests, mock interviews, resume review"],
      },
    ],
  },
  tools: {
    title: "DevOps tools you'll use",
    items: [
      "Azure Boards",
      "Azure Repos",
      "Azure Pipelines",
      "Azure Artifacts",
      "GitHub Actions",
      "Docker",
      "Azure Container Registry",
      "AKS",
      "Helm",
      "Terraform",
      "Bicep",
      "Azure Key Vault",
      "SonarQube",
      "Azure Monitor",
      "Application Insights",
    ],
  },
  projects: {
    title: "Azure DevOps projects you'll build",
    lead: "Each project runs on your own Azure subscription and goes on your GitHub with a write-up.",
    items: [
      {
        title: "Multi-stage release pipeline",
        text: "A web app built, tested and released to dev, test and production with approvals.",
        stack: "Azure Pipelines · App Service · YAML",
        imageAlt: "Multi-stage YAML pipeline deploying a web app to Azure App Service",
      },
      {
        title: "Microservices on AKS",
        text: "Container images built into ACR and deployed to an AKS cluster provisioned with Terraform.",
        stack: "Docker · ACR · AKS · Helm · Terraform",
        imageAlt: "Microservices deployed to Azure Kubernetes Service with Helm",
      },
      {
        title: "DevSecOps pipeline",
        text: "Code quality and security scans, secrets from Key Vault and alerts in Azure Monitor.",
        stack: "SonarQube · Key Vault · Azure Monitor",
        imageAlt: "DevSecOps pipeline dashboard with security scan results",
      },
    ],
  },
  cert: {
    title: "Azure DevOps certification",
    text: "You earn a BTree Azure DevOps course certificate and prepare for Microsoft exam AZ-400, Designing and Implementing Microsoft DevOps Solutions. Passing AZ-400 together with an Azure administrator or developer associate certification earns the Microsoft Certified: DevOps Engineer Expert credential.",
    imageAlt: "BTree Azure DevOps course completion certificate",
    caption: "Sample BTree Azure DevOps course completion certificate.",
  },
  jobs: {
    title: "Jobs and salary after the Azure DevOps course",
    lead: "Azure DevOps learners usually start as DevOps, cloud or build and release engineers. Typical Chennai salaries are below.",
    roles: [
      {
        role: "Azure DevOps engineer",
        salary: "₹[X–Y] LPA",
        employers: "IT services, Microsoft partners",
      },
      {
        role: "Azure cloud engineer",
        salary: "₹[X–Y] LPA",
        employers: "GCCs, banks, insurance",
      },
      {
        role: "Build and release engineer",
        salary: "₹[X–Y] LPA",
        employers: "Software product teams",
      },
      {
        role: "Platform engineer (junior)",
        salary: "₹[X–Y] LPA",
        employers: "SaaS, fintech",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn Azure DevOps at BTree",
    items: [
      {
        title: "Your own Azure labs",
        text: "Every topic is practised on a real Azure subscription, with guidance on free credits and cost control.",
      },
      {
        title: "Trainers who run Azure at work",
        text: "Taught by working Azure DevOps engineers with [N]+ years of experience.",
      },
      {
        title: "Small live batches",
        text: "Up to [N] learners per batch, recorded sessions and weekly doubt clearing.",
      },
      {
        title: "Placement until hired",
        text: "Resume review, mock interviews and referrals to hiring partners, with no end date.",
      },
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] Azure DevOps batch.",
    videos: [
      {
        name: "[Learner name]",
        meta: "[Role] at [Company] · [Batch month] batch",
      },
      {
        name: "[Learner name]",
        meta: "[Role] at [Company] · [Batch month] batch",
      },
      {
        name: "[Learner name]",
        meta: "[Role] at [Company] · [Batch month] batch",
      },
    ],
    quotes: [
      {
        text: "[Real review from a previous batch learner — 20 to 30 words.]",
        name: "[Learner name]",
        placed: "Placed at [Company] · [Batch month]",
      },
      {
        text: "[Real review from a previous batch learner — 20 to 30 words.]",
        name: "[Learner name]",
        placed: "Placed at [Company] · [Batch month]",
      },
      {
        text: "[Real review from a previous batch learner — 20 to 30 words.]",
        name: "[Learner name]",
        placed: "Placed at [Company] · [Batch month]",
      },
    ],
    allLink: "Read all [N] Google reviews",
  },
  faq: {
    title: "Azure DevOps course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the Azure DevOps course fee in Chennai?",
        a: "The BTree Azure DevOps course fee is ₹[FEE] for the full 3-month programme, with no-cost EMI from ₹[EMI] a month. The fee covers live classes, Azure labs, 3 projects, the course certificate, AZ-400 practice tests and placement support.",
      },
      {
        q: "Azure DevOps or AWS DevOps: which should I learn?",
        a: "Choose Azure DevOps if your target employers run on Microsoft technologies such as .NET and Microsoft 365; choose AWS DevOps for startups and product companies on AWS. The core skills, Git, CI/CD, Docker, Kubernetes and Terraform, are the same on both.",
      },
      {
        q: "Is Azure DevOps the same as GitHub Actions?",
        a: "No. Both are Microsoft products: Azure Pipelines is part of the Azure DevOps service, and GitHub Actions is GitHub's built-in CI/CD. Many teams use both, so the course teaches Azure Pipelines in depth and GitHub Actions for Azure deployments.",
      },
      {
        q: "What are the prerequisites for the AZ-400 exam?",
        a: "There is no prerequisite to sit AZ-400, but the DevOps Engineer Expert credential also requires an Azure administrator or developer associate certification. Check Microsoft Learn for the current list before you book.",
      },
      {
        q: "Is coding required for Azure DevOps?",
        a: "Some scripting is required, but not full software development. You learn YAML, Bash, PowerShell and Terraform configuration from the basics.",
      },
      {
        q: "How long does it take to learn Azure DevOps?",
        a: "The BTree course takes 3 months, about 120 hours of live classes and labs.",
      },
      {
        q: "What is the salary of an Azure DevOps engineer in Chennai?",
        a: "Entry-level Azure DevOps engineers in Chennai typically earn ₹[X–Y] LPA, rising to ₹[X–Y] LPA with 3–5 years of experience ([source, year]).",
      },
      {
        q: "Is the Azure DevOps course available online?",
        a: "Yes. The course runs as live online batches and as classroom batches at the BTree centre in Perungudi, Chennai, with the same trainers, labs, recordings and placement support.",
      },
    ],
  },
  cta: {
    title: "Try a free Azure DevOps demo class",
    lead: "Watch a commit go through Azure Pipelines to AKS before you join.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "AWS DevOps course in Chennai",
      href: "/courses/aws-devops-course-chennai",
    },
    {
      label: "Azure data engineering course in Chennai",
      href: "/courses/azure-data-engineering",
    },
    {
      label: "Power Automate course in Chennai",
      href: "/courses/power-automate",
    },
    {
      label: "Microsoft Azure training in Chennai",
      href: "#",
    },
    {
      label: "AWS vs Azure: which certification first?",
      href: "#",
    },
    {
      label: "Azure DevOps interview questions",
      href: "#",
    },
    {
      label: "DevOps roadmap for beginners",
      href: "#",
    },
  ],
};

export default course;
