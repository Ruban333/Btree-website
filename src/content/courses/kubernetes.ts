import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "kubernetes",
  name: "Kubernetes",
  track: "Cloud & DevOps",
  seo: {
    title: "Kubernetes Training in Chennai (CKA) with Placement | BTree",
    description:
      "Hands-on Kubernetes training in Chennai — pods, services, Helm, scaling, and CKA prep. Classroom & online batches. Book a free demo.",
  },
  hero: {
    h1: "Kubernetes Training in Chennai",
    lead: "Run containers at scale. This Kubernetes course in Chennai teaches you to deploy, scale, and manage containerised applications, from pods and services to Helm, networking, and production operations. Prepares you for the CKA certification. Classroom and live online.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] learners placed in 2026",
    },
    syllabusButton: "Download Kubernetes syllabus (PDF)",
    formTitle: "Talk to a Kubernetes advisor",
    formNote: "Call [phone] or request a callback. Free counselling and a demo class.",
    formButton: "Request a callback",
  },
  glance: {
    title: "How long is the Kubernetes course in Chennai?",
    lead: "The Kubernetes course runs about **[X hours] over [X months]**, with cluster labs throughout.",
    batches: [
      { name: "Duration", duration: "[X months]" },
      { name: "Hours of learning", duration: "[X hours]" },
    ],
  },
  whatis: {
    title: "What is Kubernetes?",
    definition:
      "Kubernetes is an open-source system for running and managing containers across many machines. It handles deployment, scaling, networking, and self-healing automatically, which is why it's the standard way to run containerised applications in production.",
    image: {
      alt: "Kubernetes trainer and learners in a hands-on class at BTree Chennai",
    },
  },
  outcomes: {
    title: "What will you learn in the Kubernetes course?",
    lead: "You'll deploy and operate a production-style Kubernetes cluster:",
    bullets: [
      "Containers and Docker refresher",
      "Kubernetes architecture and components",
      "Pods, deployments, and services",
      "ConfigMaps, secrets, and storage",
      "Networking and ingress",
      "Scaling, rolling updates, and self-healing",
      "Helm charts",
      "Monitoring, logging, and troubleshooting",
      "Security and RBAC",
    ],
  },
  who: {
    title: "Who should join this Kubernetes course?",
    items: [
      {
        title: "DevOps and cloud engineers",
      },
      {
        title: "Developers deploying containerised apps",
      },
      {
        title: "Sysadmins moving to container platforms",
      },
      {
        title: "Anyone preparing for the CKA exam",
      },
    ],
  },
  curriculum: {
    title: "What is in the Kubernetes syllabus?",
    lead: "[X] modules aligned to the CKA, about [X hours] hands-on.",
    list: [
      "Containers and Docker refresher",
      "Kubernetes architecture",
      "Pods, ReplicaSets, deployments",
      "Services and networking",
      "ConfigMaps, secrets, storage",
      "Ingress and load balancing",
      "Scaling and rolling updates",
      "Helm and packaging",
      "Monitoring, logging, RBAC, security",
      "Cluster operations, CKA prep, interview prep",
    ],
  },
  tools: {
    title: "Which tools will you learn?",
    items: ["Kubernetes", "kubectl", "Docker", "Helm", "EKS, AKS or GKE", "Prometheus", "Grafana"],
  },
  projects: {
    title: "What projects will you build?",
    lead: "Every project goes into your portfolio and GitHub, ready to show at interviews.",
    items: [
      {
        title: "Deploy a multi-service app to a Kubernetes cluster",
        imageAlt: "Deploy a multi-service app to a Kubernetes cluster: Kubernetes course project in Chennai",
      },
      {
        title: "Package and release it with Helm",
        imageAlt: "Package and release it with Helm: Kubernetes course project in Chennai",
      },
      {
        title: "Configure autoscaling, ingress, and monitoring",
        imageAlt: "Configure autoscaling, ingress, and monitoring: Kubernetes course project in Chennai",
      },
    ],
  },
  cert: {
    title: "Which certification does the Kubernetes course prepare you for?",
    text: "**Certified Kubernetes Administrator (CKA)**, with CKAD as an alternative for developers. You also receive a BTree completion certificate. [Confirm, the CNCF exam fee is paid separately.]",
    imageAlt: "BTree Kubernetes course completion certificate",
    caption: "Sample BTree Kubernetes course completion certificate.",
  },
  jobs: {
    title: "What jobs and salary can you get after Kubernetes training in Chennai?",
    lead: "Kubernetes learners usually start as Kubernetes / DevOps Engineer, Platform Engineer or Site Reliability Engineer. Typical Chennai starting salaries are below.",
    roles: [
      {
        role: "Kubernetes / DevOps Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "Product firms, GCCs",
      },
      {
        role: "Platform Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "SaaS, enterprises",
      },
      {
        role: "Site Reliability Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "Platform teams",
      },
      {
        role: "Cloud Infrastructure Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "IT services, consulting",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why choose BTree for Kubernetes training in Chennai?",
    bullets: [
      "Trainers running real clusters in production",
      "Hands-on cluster labs in every session",
      "A production-style deployment project for your portfolio",
      "CKA certification guidance and placement support",
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] Kubernetes batch.",
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
    title: "Kubernetes course FAQ (Chennai)",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "Do I need Docker experience first?",
        a: "A basic understanding of containers helps; we include a Docker refresher so beginners can keep up.",
      },
      {
        q: "Is Kubernetes hard to learn?",
        a: "It has many moving parts, but the course builds them up step by step with hands-on labs, which is the fastest way to learn it.",
      },
      {
        q: "Which certification should I take after the Kubernetes course?",
        a: "CKA for administrators, CKAD for developers. [Confirm.]",
      },
      {
        q: "Is the Kubernetes course classroom or online?",
        a: "Both. Attend at our Perungudi centre in Chennai or join live online, with the same labs.",
      },
      {
        q: "What is the Kubernetes course fee in Chennai?",
        a: "The BTree Kubernetes course fee is ₹[FEE] for the full [N]-month programme, with no-cost EMI from ₹[EMI] a month.",
      },
      {
        q: "Will I get placement support after the Kubernetes course?",
        a: "Yes. Placement support includes resume and LinkedIn reviews, mock interviews with feedback, and referrals to BTree hiring partners. It continues after the course ends, until you are placed.",
      },
    ],
  },
  cta: {
    title: "Try a free Kubernetes demo class",
    lead: "Deploy your first pod in a live cluster before you enrol.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "DevOps training in Chennai",
      href: "/courses/devops",
    },
    {
      label: "Terraform training in Chennai",
      href: "/courses/terraform",
    },
    {
      label: "Azure DevOps training in Chennai",
      href: "/courses/azure-devops",
    },
    {
      label: "Linux training in Chennai",
      href: "/courses/linux",
    },
    {
      label: "All IT courses in Chennai",
      href: "/courses",
    },
  ],
  areas:
    "**Kubernetes training across Chennai:** Adyar, Guindy, Nandanam, Poonamallee, T. Nagar, Anna Nagar, K.K. Nagar, OMR, ECR, Mylapore, Nungambakkam, Velachery, Vadapalani, Royapettah, Porur, Triplicane. Classroom batches run at our Perungudi centre; every batch is also live online.",
};

export default course;
