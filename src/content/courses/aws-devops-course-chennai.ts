import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "aws-devops-course-chennai",
  name: "AWS DevOps",
  track: "Cloud & DevOps",
  seo: {
    title: "AWS DevOps Course in Chennai with Placement | BTree",
    description:
      "4-month AWS DevOps course in Chennai: Linux, Jenkins, Docker, Kubernetes, Terraform, 3 projects, SAA-C03 + CKA prep and placement support.",
  },
  hero: {
    h1: "AWS DevOps course in Chennai",
    lead: "The BTree AWS DevOps course in Chennai teaches you to build, deploy and run applications on AWS with Linux, Git, Jenkins, Docker, Kubernetes and Terraform. In 4 months of live, hands-on classes you build 3 real CI/CD projects and get placement support for DevOps and cloud engineer roles.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] DevOps learners placed in 2026",
    },
    syllabusButton: "Download AWS DevOps syllabus (PDF)",
    formTitle: "Talk to an AWS DevOps advisor",
  },
  glance: {
    title: "How long is the AWS DevOps course?",
    lead: "The AWS DevOps course takes **4 months, about 160 hours** of live classes and hands-on labs.",
    batches: [
      { name: "Duration", duration: "4 months" },
      { name: "Hours of learning", duration: "160 hours" },
    ],
  },
  whatis: {
    title: "What is AWS DevOps?",
    definition:
      "**AWS DevOps** is the practice of automating how software is built, tested, deployed and monitored on Amazon Web Services. DevOps engineers use tools such as Git, Jenkins, Docker, Kubernetes and Terraform to ship code to AWS quickly and reliably, without manual steps.",
    why: "Because almost every company on AWS needs this automation, DevOps and cloud engineer roles are among the most in-demand IT jobs in Chennai.",
    pipeline: {
      label: "A CI/CD pipeline on AWS",
      caption: "The CI/CD pipeline you build and run during the course.",
      steps: [
        {
          label: "Code",
          tools: "Git, GitHub",
        },
        {
          label: "Build",
          tools: "Jenkins, GitHub Actions",
        },
        {
          label: "Package",
          tools: "Docker, Amazon ECR",
        },
        {
          label: "Deploy",
          tools: "Kubernetes, Amazon EKS",
        },
        {
          label: "Provision",
          tools: "Terraform, Ansible",
        },
        {
          label: "Monitor",
          tools: "CloudWatch, Prometheus, Grafana",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the AWS DevOps course",
    lead: "By the end you can design, automate and run a production-style application on AWS on your own.",
    items: [
      {
        title: "Work confidently in Linux",
        text: "Shell commands, permissions, networking and Bash scripts.",
      },
      {
        title: "Build on core AWS services",
        text: "IAM, EC2, VPC, S3, RDS, load balancers and Auto Scaling.",
      },
      {
        title: "Automate CI/CD pipelines",
        text: "Jenkins and GitHub Actions pipelines that test and deploy on every commit.",
      },
      {
        title: "Containerise with Docker",
        text: "Images, Compose, registries and Amazon ECR.",
      },
      {
        title: "Orchestrate with Kubernetes",
        text: "Deployments, services, Helm and Amazon EKS clusters.",
      },
      {
        title: "Write infrastructure as code",
        text: "Terraform modules and Ansible playbooks for repeatable environments.",
      },
      {
        title: "Monitor and troubleshoot",
        text: "CloudWatch, Prometheus, Grafana and alerting.",
      },
      {
        title: "Pass DevOps interviews",
        text: "Scenario questions, mock interviews and a reviewed resume.",
      },
    ],
  },
  who: {
    title: "Who should join this AWS DevOps course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "Engineering and science graduates who want a cloud career; Linux basics are taught from scratch.",
      },
      {
        title: "System and network admins",
        text: "Move from manual operations to automation and cloud engineering.",
      },
      {
        title: "Developers and testers",
        text: "Learn to ship and run the code you write, and move into DevOps or SRE roles.",
      },
      {
        title: "Support engineers",
        text: "Turn production support experience into a higher-paying DevOps role, with weekend batches.",
      },
    ],
  },
  curriculum: {
    title: "AWS DevOps course syllabus",
    lead: "8 modules and a capstone, about 160 hours of live classes and labs.",
    modules: [
      {
        title: "Linux, networking and Bash scripting",
        sessions: "10 sessions",
        bullets: [
          "Linux file system, users and permissions",
          "Processes, services and package managers",
          "Networking: DNS, TCP/IP, SSH",
          "Bash scripting for automation",
        ],
      },
      {
        title: "AWS core services",
        sessions: "14 sessions",
        summary: "IAM, EC2, VPC, S3, RDS, Route 53, Elastic Load Balancing, Auto Scaling, cost controls.",
      },
      {
        title: "Git and GitHub",
        sessions: "5 sessions",
        summary: "Branching strategies, pull requests, code reviews, GitHub workflows.",
      },
      {
        title: "CI/CD with Jenkins and GitHub Actions",
        sessions: "8 sessions",
        summary: "Pipelines as code, build agents, automated testing, AWS CodePipeline overview.",
      },
      {
        title: "Docker and containers",
        sessions: "7 sessions",
        summary: "Dockerfiles, images, volumes, networks, Docker Compose, Amazon ECR.",
      },
      {
        title: "Kubernetes and Amazon EKS",
        sessions: "10 sessions",
        summary: "Pods, deployments, services, ingress, Helm charts, scaling, EKS clusters.",
      },
      {
        title: "Terraform and Ansible",
        sessions: "8 sessions",
        summary: "Infrastructure as code, modules, remote state, configuration management.",
      },
      {
        title: "Monitoring and logging",
        sessions: "5 sessions",
        summary: "Amazon CloudWatch, Prometheus, Grafana, alerting and incident basics.",
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "8 sessions",
        summary: "End-to-end capstone, SAA-C03 and CKA practice tests, mock interviews, resume review.",
      },
    ],
  },
  tools: {
    title: "DevOps tools you'll use",
    items: [
      "AWS",
      "Linux",
      "Bash",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Helm",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "CloudWatch",
    ],
  },
  projects: {
    title: "AWS DevOps projects you'll build",
    lead: "Each project runs on your own AWS account and goes on your GitHub with a write-up.",
    items: [
      {
        title: "CI/CD pipeline to Amazon EKS",
        text: "Every commit is built, tested, packaged in Docker and rolled out to Kubernetes automatically.",
        stack: "Jenkins · Docker · ECR · EKS · Helm",
        imageAlt: "Jenkins pipeline deploying a microservices app to Amazon EKS",
      },
      {
        title: "Three-tier app with Terraform",
        text: "VPC, load balancer, Auto Scaling web tier and RDS database, all written as code.",
        stack: "Terraform · VPC · EC2 · RDS · ALB",
        imageAlt: "Three-tier AWS architecture provisioned with Terraform",
      },
      {
        title: "Monitoring and alerting stack",
        text: "Metrics, logs and alerts for a live cluster, with a runbook for common incidents.",
        stack: "Prometheus · Grafana · CloudWatch",
        imageAlt: "Grafana dashboard monitoring a Kubernetes cluster on AWS",
      },
    ],
  },
  cert: {
    title: "AWS DevOps certification",
    text: "You earn a BTree AWS DevOps course certificate and prepare for two industry exams: AWS Certified Solutions Architect – Associate (SAA-C03) and the Certified Kubernetes Administrator (CKA). Practice tests and a revision week are included.",
    imageAlt: "BTree AWS DevOps course completion certificate",
    caption: "Sample BTree AWS DevOps course certificate.",
  },
  jobs: {
    title: "Jobs and salary after the AWS DevOps course",
    lead: "AWS DevOps learners usually start as DevOps, cloud or build and release engineers. Typical Chennai starting salaries are below and rise quickly with 2–3 years of experience.",
    roles: [
      {
        role: "DevOps engineer",
        salary: "₹[X–Y] LPA",
        employers: "IT services, product companies",
      },
      {
        role: "AWS cloud engineer",
        salary: "₹[X–Y] LPA",
        employers: "Cloud consultancies, GCCs",
      },
      {
        role: "Build and release engineer",
        salary: "₹[X–Y] LPA",
        employers: "Software product teams",
      },
      {
        role: "Site reliability engineer (junior)",
        salary: "₹[X–Y] LPA",
        employers: "SaaS, fintech",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn AWS DevOps at BTree",
    items: [
      {
        title: "Your own AWS labs",
        text: "Every topic is practised on a real AWS account, with guidance on keeping labs inside the free tier.",
      },
      {
        title: "Trainers who run DevOps at work",
        text: "Classes are taught by working DevOps and cloud engineers with [N]+ years of experience.",
      },
      {
        title: "Small live batches",
        text: "Up to [N] learners per batch, recorded sessions and doubt-clearing every week.",
      },
      {
        title: "Placement until hired",
        text: "Resume review, mock interviews and referrals to hiring partners, with no end date.",
      },
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] AWS DevOps batch.",
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
    title: "AWS DevOps course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the AWS DevOps course fee in Chennai?",
        a: "The BTree AWS DevOps course fee is ₹[FEE] for the full 4-month programme, with no-cost EMI from ₹[EMI] a month. The fee covers live classes, AWS labs, 3 projects, the course certificate, certification practice tests and placement support, online or in the Chennai classroom.",
      },
      {
        q: "How long does it take to learn AWS DevOps?",
        a: "The BTree AWS DevOps course takes 4 months, about 160 hours of live classes and labs. Most learners are ready for junior DevOps or cloud engineer interviews by the end, having built 3 end-to-end projects and practised scenario questions in mock interviews.",
      },
      {
        q: "Can a fresher or non-IT graduate learn AWS DevOps?",
        a: "Yes. The course starts with Linux, networking and scripting from scratch, so no prior DevOps or cloud experience is needed. Freshers should expect to practise 8–10 hours a week outside class; a mentor tracks progress and suggests extra labs where needed.",
      },
      {
        q: "Is coding required for DevOps?",
        a: "Some scripting is required, but not full software development. You learn Bash and basic Python for automation, plus YAML and Terraform configuration. The course teaches all of these from the basics, so you do not need to know a programming language before joining.",
      },
      {
        q: "What is the salary of an AWS DevOps engineer in Chennai?",
        a: "Entry-level AWS DevOps engineers in Chennai typically earn ₹[X–Y] LPA, rising to ₹[X–Y] LPA with 3–5 years of experience ([source, year]). Kubernetes, Terraform and an AWS certification usually lead to higher offers. The jobs table above lists typical roles and ranges.",
      },
      {
        q: "Does the course prepare me for AWS certification?",
        a: "Yes. The course covers the AWS Certified Solutions Architect – Associate (SAA-C03) syllabus and the Certified Kubernetes Administrator (CKA) exam topics, with practice tests and a revision week. Exam fees are [included / paid separately], and advisors help you book the exam.",
      },
      {
        q: "Will I get placement support after the course?",
        a: "Yes. Placement support includes resume and LinkedIn reviews, mock DevOps interviews with feedback, and referrals to BTree hiring partners. It continues after the course ends, until you are placed in a DevOps or cloud role.",
      },
      {
        q: "Is the course available online?",
        a: "Yes. The AWS DevOps course runs as live online batches and as classroom batches at the BTree centre in Chennai. Both get the same trainers, labs, recordings and placement support, and you can switch between modes if your schedule changes.",
      },
    ],
  },
  cta: {
    title: "Try a free AWS DevOps demo class",
    lead: "Watch a live pipeline go from commit to Kubernetes before you join.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "AWS Solutions Architect training in Chennai",
      href: "/courses/aws-devops-course-chennai",
    },
    {
      label: "Microsoft Azure training in Chennai",
      href: "#",
    },
    {
      label: "Kubernetes course in Chennai",
      href: "#",
    },
    {
      label: "Python full stack course in Chennai",
      href: "#",
    },
    {
      label: "AWS vs Azure: which certification first?",
      href: "/blog",
    },
    {
      label: "DevOps engineer salary in Chennai",
      href: "#",
    },
    {
      label: "DevOps interview questions with answers",
      href: "#",
    },
    {
      label: "DevOps roadmap for beginners",
      href: "#",
    },
  ],
};

export default course;
