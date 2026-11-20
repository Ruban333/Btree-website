import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "power-automate",
  name: "Microsoft Power Automate",
  track: "Automation & RPA",
  seo: {
    title: "Microsoft Power Automate Course in Chennai | BTree",
    description:
      "Microsoft Power Automate course in Chennai: cloud flows, desktop RPA, AI Builder and Copilot. 2 months of live classes, 3 projects and placement support.",
  },
  hero: {
    h1: "Microsoft Power Automate course in Chennai",
    lead: "The BTree Microsoft Power Automate course in Chennai teaches you to automate business processes with cloud flows, desktop flows (RPA), AI Builder and Copilot. In 2 months of live, hands-on classes you automate real work across Outlook, SharePoint, Excel, Teams and Dataverse, build 3 projects and get placement support for automation roles.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] Power Automate learners placed in 2026",
    },
    syllabusButton: "Download Power Automate syllabus (PDF)",
    formTitle: "Talk to a Power Automate advisor",
  },
  glance: {
    title: "How long is the Power Automate course?",
    lead: "The Power Automate course takes **2 months, about 70 hours** of live classes and hands-on labs.",
    batches: [
      { name: "Duration", duration: "2 months" },
      { name: "Hours of learning", duration: "70 hours" },
    ],
  },
  whatis: {
    title: "What is Microsoft Power Automate?",
    definition:
      "**Microsoft Power Automate** is Microsoft's low-code automation service, part of Microsoft Power Platform. It runs **cloud flows** that connect apps such as Outlook, SharePoint, Teams and Excel, and **desktop flows** that automate desktop and web applications through robotic process automation (RPA).",
    why: "Because most companies already use Microsoft 365, Power Automate is often the quickest way for them to automate approvals, reports and data entry, which keeps Power Platform and RPA developers in demand.",
    pipeline: {
      label: "A typical Power Automate flow",
      caption: "The kind of end-to-end flow you build in class.",
      steps: [
        {
          label: "Trigger",
          tools: "Email, form, file, schedule",
        },
        {
          label: "Process",
          tools: "Conditions, loops, expressions",
        },
        {
          label: "Read",
          tools: "AI Builder document processing",
        },
        {
          label: "Act on desktop",
          tools: "Desktop flows (RPA)",
        },
        {
          label: "Approve",
          tools: "Teams and Outlook approvals",
        },
        {
          label: "Monitor",
          tools: "Run history, analytics, process mining",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the Power Automate course",
    lead: "By the end you can automate a real business process from trigger to approval, and deploy it safely.",
    items: [
      {
        title: "Build cloud flows",
        text: "Automated, instant and scheduled flows with standard and premium connectors.",
      },
      {
        title: "Automate Microsoft 365",
        text: "SharePoint lists, Excel tables, Outlook, Teams and Forms.",
      },
      {
        title: "Automate desktop apps (RPA)",
        text: "Power Automate for desktop: UI, web and Excel automation, attended and unattended.",
      },
      {
        title: "Read documents with AI",
        text: "AI Builder for invoices and receipts, prompts and Copilot.",
      },
      {
        title: "Work with data and expressions",
        text: "Variables, arrays, JSON, HTTP actions and expressions.",
      },
      {
        title: "Design reliable flows",
        text: "Approvals, error handling with scopes, retries and notifications.",
      },
      {
        title: "Govern and deploy",
        text: "Environments, solutions, DLP policies and ALM.",
      },
      {
        title: "Pass automation interviews",
        text: "Scenario questions, a portfolio and a reviewed resume.",
      },
    ],
  },
  who: {
    title: "Who should join this Power Automate course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "Any degree; no coding is needed to start building flows.",
      },
      {
        title: "Excel, MIS and operations staff",
        text: "Turn repetitive reports and data entry into automations.",
      },
      {
        title: "SharePoint and Microsoft 365 admins",
        text: "Add workflow automation to your Microsoft 365 skills.",
      },
      {
        title: "UiPath and RPA developers",
        text: "Add Microsoft's RPA tool to your skill set.",
      },
    ],
  },
  curriculum: {
    title: "Power Automate course syllabus",
    lead: "9 modules and a capstone, about 70 hours of live classes and labs.",
    modules: [
      {
        title: "Power Platform and Power Automate basics",
        sessions: "4 sessions",
        bullets: [
          "Power Platform overview, licensing and environments",
          "Types of flows: cloud, desktop, business process",
        ],
      },
      {
        title: "Cloud flows",
        sessions: "8 sessions",
        bullets: [
          "Automated, instant and scheduled triggers",
          "Conditions, switch, loops and parallel branches",
          "Standard and premium connectors",
        ],
      },
      {
        title: "Microsoft 365 integration",
        sessions: "7 sessions",
        bullets: [
          "SharePoint lists and libraries",
          "Excel Online tables, Outlook and Forms",
          "Approvals in Teams and Outlook",
        ],
      },
      {
        title: "Expressions, variables and APIs",
        sessions: "5 sessions",
        bullets: ["Expressions, arrays and JSON", "HTTP actions and custom connectors"],
      },
      {
        title: "Power Automate for desktop (RPA)",
        sessions: "10 sessions",
        bullets: [
          "UI and web automation",
          "Excel, files and legacy app automation",
          "Attended and unattended runs, machine setup",
        ],
      },
      {
        title: "AI Builder and Copilot",
        sessions: "4 sessions",
        bullets: ["Invoice and receipt processing", "Prompts and building flows with Copilot"],
      },
      {
        title: "Dataverse, Power Apps and process mining",
        sessions: "4 sessions",
        bullets: ["Dataverse tables and triggers", "Calling flows from Power Apps", "Process and task mining basics"],
      },
      {
        title: "Governance, ALM and error handling",
        sessions: "4 sessions",
        bullets: ["Solutions and environment strategy", "DLP policies, monitoring and error handling"],
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "4 sessions",
        bullets: ["End-to-end capstone automation", "PL-900 practice tests, mock interviews, resume review"],
      },
    ],
  },
  tools: {
    title: "Tools you'll use",
    items: [
      "Power Automate",
      "Power Automate for desktop",
      "AI Builder",
      "Copilot",
      "SharePoint",
      "Excel Online",
      "Outlook",
      "Microsoft Teams",
      "Microsoft Forms",
      "Dataverse",
      "Power Apps",
      "Process mining",
    ],
  },
  projects: {
    title: "Power Automate projects you'll build",
    lead: "Each project runs in your own Microsoft 365 developer tenant and goes into your portfolio with a demo video.",
    items: [
      {
        title: "Invoice processing bot",
        text: "Reads invoices from Outlook with AI Builder, logs them in SharePoint and sends approvals to Teams.",
        stack: "Cloud flows · AI Builder · SharePoint · Teams",
        imageAlt: "Invoice data extracted by AI Builder into a SharePoint list",
      },
      {
        title: "Employee onboarding workflow",
        text: "A form starts approvals, creates records and sends welcome emails and Teams messages.",
        stack: "Forms · Approvals · SharePoint · Outlook",
        imageAlt: "Employee onboarding approval workflow in Microsoft Teams",
      },
      {
        title: "Desktop RPA for a legacy app",
        text: "An unattended desktop flow copies daily data from a legacy app and website into Excel.",
        stack: "Power Automate for desktop · Excel",
        imageAlt: "Desktop flow copying data from a legacy application into Excel",
      },
    ],
  },
  cert: {
    title: "Power Automate certification",
    text: "You earn a BTree Power Automate course certificate and prepare for Microsoft PL-900 (Power Platform Fundamentals). Microsoft retired the PL-500 Power Automate RPA Developer exam on 30 June 2026; learners with a coding background can continue to PL-400 (Power Platform Developer).",
    imageAlt: "BTree Microsoft Power Automate course completion certificate",
    caption: "Sample BTree Microsoft Power Automate course completion certificate.",
  },
  jobs: {
    title: "Jobs and salary after the Power Automate course",
    lead: "Power Automate learners usually start as Power Automate, RPA or Power Platform developers. Typical Chennai salaries are below.",
    roles: [
      {
        role: "Power Automate developer",
        salary: "₹[X–Y] LPA",
        employers: "Microsoft partners, IT services",
      },
      {
        role: "RPA developer",
        salary: "₹[X–Y] LPA",
        employers: "Banks, insurance, shared services",
      },
      {
        role: "Power Platform developer",
        salary: "₹[X–Y] LPA",
        employers: "GCCs, product companies",
      },
      {
        role: "Automation analyst",
        salary: "₹[X–Y] LPA",
        employers: "Operations and finance teams",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn Power Automate at BTree",
    items: [
      {
        title: "Your own Microsoft tenant",
        text: "Every lab runs in a Microsoft 365 developer environment, not a shared demo.",
      },
      {
        title: "Trainers who automate at work",
        text: "Taught by working Power Platform developers with [N]+ years of experience.",
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
    lead: "Video stories and reviews from learners of the [Batch month] Microsoft Power Automate batch.",
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
    title: "Power Automate course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the Power Automate course fee in Chennai?",
        a: "The BTree Power Automate course fee is ₹[FEE] for the full 2-month programme, with no-cost EMI from ₹[EMI] a month. The fee covers live classes, labs, 3 projects, the course certificate, PL-900 practice tests and placement support, online or in the Chennai classroom.",
      },
      {
        q: "Is coding required to learn Power Automate?",
        a: "No. Power Automate is low-code: you build flows by choosing triggers and actions. You do learn expressions and basic JSON for advanced flows, and the course teaches both from scratch.",
      },
      {
        q: "Is Power Automate free?",
        a: "Some Power Automate features come with many Microsoft 365 licences, and Power Automate for desktop is free on Windows for attended automation. Premium connectors, unattended RPA and AI Builder need paid licences. In the course you use a developer environment.",
      },
      {
        q: "Power Automate or UiPath: which should I learn?",
        a: "Learn Power Automate if you want to work in companies that run on Microsoft 365; learn UiPath for companies with large dedicated RPA teams. The RPA concepts are the same, so many developers learn both; this course covers Power Automate in depth.",
      },
      {
        q: "Which certification should I take for Power Automate?",
        a: "Start with PL-900 (Power Platform Fundamentals). Microsoft retired the PL-500 Power Automate RPA Developer exam on 30 June 2026, so developers usually continue to PL-400 (Power Platform Developer).",
      },
      {
        q: "How long does it take to learn Power Automate?",
        a: "The BTree course takes 2 months, about 70 hours of live classes and labs. Most learners can build production-ready flows by week 5.",
      },
      {
        q: "What is the salary of a Power Automate developer in Chennai?",
        a: "Entry-level Power Automate and RPA developers in Chennai typically earn ₹[X–Y] LPA, rising to ₹[X–Y] LPA with 3 years of experience ([source, year]).",
      },
      {
        q: "Is the Power Automate course available online?",
        a: "Yes. The course runs as live online batches and as classroom batches at the BTree centre in Perungudi, Chennai, with the same trainers, labs, recordings and placement support.",
      },
    ],
  },
  cta: {
    title: "Try a free Power Automate demo class",
    lead: "Watch an email turn into an approved SharePoint record in minutes.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "Azure DevOps course in Chennai",
      href: "/courses/azure-devops",
    },
    {
      label: "Azure data engineering course in Chennai",
      href: "/courses/azure-data-engineering",
    },
    {
      label: "UiPath RPA course in Chennai",
      href: "#",
    },
    {
      label: "Power BI course in Chennai",
      href: "#",
    },
    {
      label: "How to become an RPA developer",
      href: "#",
    },
    {
      label: "Power Automate vs UiPath",
      href: "#",
    },
    {
      label: "Power Automate interview questions",
      href: "#",
    },
  ],
};

export default course;
