import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "azure-data-engineering",
  name: "Azure Data Engineering",
  track: "Data Engineering",
  seo: {
    title: "Azure Data Engineering Course in Chennai | BTree",
    description:
      "Azure data engineering course in Chennai: Data Factory, Databricks, PySpark and Microsoft Fabric in 4 months of live labs. DP-700 prep and placement support.",
  },
  hero: {
    h1: "Azure data engineering course in Chennai",
    lead: "The BTree Azure data engineering course in Chennai teaches you to build data pipelines on Microsoft Azure and Microsoft Fabric with SQL, Python, PySpark, Azure Data Factory, Azure Databricks and Azure Data Lake Storage. In 4 months of live, hands-on classes you build 3 lakehouse projects, prepare for the DP-700 exam and get placement support.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] Azure data engineering learners placed in 2026",
    },
    syllabusButton: "Download Azure data engineering syllabus (PDF)",
    formTitle: "Talk to a data engineering advisor",
  },
  glance: {
    title: "How long is the Azure data engineering course?",
    lead: "The Azure data engineering course takes **4 months, about 160 hours** of live classes and labs. Every batch covers the same syllabus and projects.",
    batches: [
      {
        name: "Weekday batch",
        duration: "4 months",
        schedule: ["Monday to Friday", "2 hours a day"],
        note: "For freshers or full-time learners",
      },
      {
        name: "Weekend batch",
        duration: "5 months",
        schedule: ["Saturday and Sunday", "4 hours a day"],
        note: "Fits around a full-time job",
      },
      {
        name: "Fast-track batch",
        duration: "3 months",
        schedule: ["Monday to Friday", "3 hours a day"],
        note: "For SQL, BI or ETL professionals",
      },
    ],
  },
  whatis: {
    title: "What is Azure data engineering?",
    definition:
      "**Azure data engineering** is building and running data pipelines on Microsoft's cloud: ingesting data with Azure Data Factory, storing it in Azure Data Lake Storage Gen2, transforming it with Azure Databricks and Spark, and serving it through Microsoft Fabric and Power BI.",
    why: "Microsoft Fabric now brings these pieces into one platform, and many Chennai companies already use Power BI, so Azure and Fabric data engineers are among the most requested data roles.",
    pipeline: {
      label: "A lakehouse on Azure",
      caption: "The medallion lakehouse you build during the course.",
      steps: [
        {
          label: "Ingest",
          tools: "Data Factory, Fabric pipelines",
        },
        {
          label: "Store",
          tools: "ADLS Gen2, OneLake",
        },
        {
          label: "Transform",
          tools: "Databricks, PySpark, Delta Lake",
        },
        {
          label: "Model",
          tools: "Bronze, silver, gold layers",
        },
        {
          label: "Stream",
          tools: "Event Hubs, Fabric Real-Time Intelligence",
        },
        {
          label: "Serve",
          tools: "Fabric Warehouse, Power BI",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the Azure data engineering course",
    lead: "By the end you can design, build and run a production-style lakehouse on Azure and Microsoft Fabric.",
    items: [
      {
        title: "Write production SQL",
        text: "Joins, window functions, CTEs and T-SQL for warehouses.",
      },
      {
        title: "Program in Python and PySpark",
        text: "DataFrames, Spark SQL and performance basics.",
      },
      {
        title: "Build Data Factory pipelines",
        text: "Copy activities, data flows, parameters and triggers.",
      },
      {
        title: "Engineer with Databricks",
        text: "Notebooks, Delta Lake, jobs and Unity Catalog.",
      },
      {
        title: "Design a medallion lakehouse",
        text: "Bronze, silver and gold layers with incremental loads.",
      },
      {
        title: "Work in Microsoft Fabric",
        text: "OneLake, Lakehouse, Warehouse and Dataflows Gen2.",
      },
      {
        title: "Process real-time data",
        text: "Event Hubs and Fabric eventstreams.",
      },
      {
        title: "Secure and govern data",
        text: "Key Vault, RBAC, Microsoft Purview and monitoring.",
      },
    ],
  },
  who: {
    title: "Who should join this Azure data engineering course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "CS, IT and maths graduates; SQL and Python are taught from the basics.",
      },
      {
        title: "Power BI and SQL developers",
        text: "Build the pipelines behind your reports.",
      },
      {
        title: "ETL developers",
        text: "Move SSIS or Informatica skills to Azure and Fabric.",
      },
      {
        title: "Developers and testers",
        text: "Switch to a fast-growing data role.",
      },
    ],
  },
  curriculum: {
    title: "Azure data engineering syllabus",
    lead: "9 modules and a capstone, about 160 hours of live classes and labs.",
    modules: [
      {
        title: "SQL and data warehousing",
        sessions: "8 sessions",
        bullets: ["T-SQL, joins, CTEs and window functions", "Dimensional modelling and slowly changing dimensions"],
      },
      {
        title: "Python and PySpark",
        sessions: "9 sessions",
        bullets: ["Python for data", "PySpark DataFrames and Spark SQL"],
      },
      {
        title: "Azure fundamentals and storage",
        sessions: "5 sessions",
        bullets: ["Subscriptions, Entra ID and RBAC", "Azure Data Lake Storage Gen2 and Azure SQL Database"],
      },
      {
        title: "Azure Data Factory",
        sessions: "9 sessions",
        bullets: [
          "Pipelines, copy activity and linked services",
          "Mapping data flows, parameters and triggers",
          "Incremental loads and CI/CD for ADF",
        ],
      },
      {
        title: "Azure Databricks",
        sessions: "10 sessions",
        bullets: ["Notebooks, clusters and jobs", "Delta Lake and medallion architecture", "Unity Catalog"],
      },
      {
        title: "Microsoft Fabric",
        sessions: "8 sessions",
        bullets: [
          "OneLake, Lakehouse and Warehouse",
          "Dataflows Gen2 and Fabric pipelines",
          "Semantic models for Power BI",
        ],
      },
      {
        title: "Real-time data",
        sessions: "4 sessions",
        bullets: ["Azure Event Hubs", "Fabric Real-Time Intelligence and eventstreams"],
      },
      {
        title: "Security, governance and monitoring",
        sessions: "4 sessions",
        bullets: ["Key Vault and managed identities", "Microsoft Purview and Azure Monitor"],
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "6 sessions",
        bullets: ["End-to-end lakehouse capstone", "DP-700 practice tests, mock interviews, resume review"],
      },
    ],
  },
  tools: {
    title: "Data tools you'll use",
    items: [
      "SQL",
      "Python",
      "PySpark",
      "Azure Data Factory",
      "ADLS Gen2",
      "Azure Databricks",
      "Delta Lake",
      "Unity Catalog",
      "Microsoft Fabric",
      "OneLake",
      "Azure Synapse Analytics",
      "Azure SQL Database",
      "Event Hubs",
      "Microsoft Purview",
      "Power BI",
    ],
  },
  projects: {
    title: "Azure data engineering projects you'll build",
    lead: "Each project runs on your own Azure subscription or Fabric trial and goes on your GitHub with an architecture diagram.",
    items: [
      {
        title: "Retail medallion lakehouse",
        text: "Sales data ingested with Data Factory and refined in Databricks into bronze, silver and gold Delta tables.",
        stack: "Data Factory · ADLS · Databricks · Delta Lake",
        imageAlt: "Medallion lakehouse notebook in Azure Databricks",
      },
      {
        title: "Incremental load with CI/CD",
        text: "Watermark-based loads from Azure SQL, deployed across environments with Azure DevOps.",
        stack: "Data Factory · Azure SQL · Azure DevOps",
        imageAlt: "Incremental data load from Azure SQL Database with Data Factory",
      },
      {
        title: "Fabric lakehouse to Power BI",
        text: "A Fabric lakehouse and warehouse built with Dataflows Gen2, serving a Power BI report.",
        stack: "Microsoft Fabric · OneLake · Power BI",
        imageAlt: "Power BI report built on a Microsoft Fabric lakehouse",
      },
    ],
  },
  cert: {
    title: "Azure data engineer certification",
    text: "You earn a BTree Azure data engineering course certificate and prepare for Microsoft exam DP-700, which earns the Microsoft Certified: Fabric Data Engineer Associate credential. DP-700 replaced DP-203 (Azure Data Engineer Associate), which Microsoft retired on 31 March 2025.",
    imageAlt: "BTree Azure data engineering course completion certificate",
    caption: "Sample BTree Azure data engineering course completion certificate.",
  },
  jobs: {
    title: "Jobs and salary after the Azure data engineering course",
    lead: "Azure data engineering learners usually start as Azure data engineers or ETL developers. Typical Chennai salaries are below.",
    roles: [
      {
        role: "Azure data engineer",
        salary: "₹[X–Y] LPA",
        employers: "IT services, GCCs",
      },
      {
        role: "Databricks developer",
        salary: "₹[X–Y] LPA",
        employers: "Consulting, banks, insurance",
      },
      {
        role: "Azure Data Factory / ETL developer",
        salary: "₹[X–Y] LPA",
        employers: "Product companies, retail",
      },
      {
        role: "Fabric data engineer",
        salary: "₹[X–Y] LPA",
        employers: "Microsoft partners, analytics firms",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn Azure data engineering at BTree",
    items: [
      {
        title: "Your own Azure labs",
        text: "Every topic is practised on a real Azure subscription and Fabric trial, with cost guidance.",
      },
      {
        title: "Trainers who build lakehouses",
        text: "Taught by working Azure data engineers with [N]+ years of experience.",
      },
      {
        title: "Small live batches",
        text: "Up to [N] learners per batch, recorded sessions and weekly SQL practice.",
      },
      {
        title: "Placement until hired",
        text: "Resume review, mock interviews and referrals to hiring partners, with no end date.",
      },
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] Azure Data Engineering batch.",
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
    title: "Azure data engineering course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the Azure data engineering course fee in Chennai?",
        a: "The BTree Azure data engineering course fee is ₹[FEE] for the full 4-month programme, with no-cost EMI from ₹[EMI] a month. The fee covers live classes, Azure and Fabric labs, 3 projects, the course certificate, DP-700 practice tests and placement support.",
      },
      {
        q: "Which certification should an Azure data engineer take now?",
        a: "Take DP-700, which earns the Microsoft Certified: Fabric Data Engineer Associate credential. The older DP-203 Azure Data Engineer Associate exam was retired on 31 March 2025. Many learners also add the Databricks Certified Data Engineer Associate.",
      },
      {
        q: "What is the difference between Data Factory, Databricks and Fabric?",
        a: "Azure Data Factory moves and orchestrates data, Azure Databricks transforms large data with Spark, and Microsoft Fabric is an all-in-one platform that combines pipelines, Spark, warehousing and Power BI on OneLake. Most job descriptions ask for all three, so the course covers each.",
      },
      {
        q: "Do I need coding for Azure data engineering?",
        a: "Yes, SQL and Python are essential, with PySpark for large datasets. The course teaches all three from the basics.",
      },
      {
        q: "Can a fresher become an Azure data engineer?",
        a: "Yes. Companies hire freshers as junior data engineers if they have strong SQL, PySpark and two or three Azure projects. The course gives you all three; plan for 8–10 hours a week of practice.",
      },
      {
        q: "How long does it take to learn Azure data engineering?",
        a: "The BTree course takes 4 months on weekdays, 5 months on weekends or 3 months on the fast-track batch.",
      },
      {
        q: "What is the salary of an Azure data engineer in Chennai?",
        a: "Entry-level Azure data engineers in Chennai typically earn ₹[X–Y] LPA, rising to ₹[X–Y] LPA with 3–5 years of experience ([source, year]).",
      },
      {
        q: "Is the Azure data engineering course available online?",
        a: "Yes. The course runs as live online batches and as classroom batches at the BTree centre in Perungudi, Chennai, with the same trainers, labs, recordings and placement support.",
      },
    ],
  },
  cta: {
    title: "Try a free Azure data engineering demo class",
    lead: "Build a bronze-to-gold Delta pipeline live in one session.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "AWS data engineering course in Chennai",
      href: "/courses/aws-data-engineering",
    },
    {
      label: "GCP data engineering course in Chennai",
      href: "/courses/gcp-data-engineering",
    },
    {
      label: "Azure DevOps course in Chennai",
      href: "/courses/azure-devops",
    },
    {
      label: "Power BI course in Chennai",
      href: "#",
    },
    {
      label: "DP-700 exam guide",
      href: "#",
    },
    {
      label: "Azure Data Factory interview questions",
      href: "#",
    },
    {
      label: "Data engineer roadmap for freshers",
      href: "#",
    },
  ],
};

export default course;
