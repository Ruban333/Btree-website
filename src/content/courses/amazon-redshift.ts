import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "amazon-redshift",
  name: "Amazon Redshift",
  track: "Data Engineering",
  seo: {
    title: "Amazon Redshift Training in Chennai — Basics to Advanced | BTree",
    description:
      "Hands-on Amazon Redshift training in Chennai — architecture, data loading, tuning, and Spectrum. Classroom & online. Book a free demo.",
  },
  hero: {
    h1: "Amazon Redshift Training in Chennai",
    lead: "Master AWS's data warehouse. This Amazon Redshift course in Chennai takes you from the basics to advanced data loading, modelling, and performance tuning, so you can build and run analytics at scale on AWS. Classroom and live online.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] learners placed in 2026",
    },
    syllabusButton: "Download Amazon Redshift syllabus (PDF)",
    formTitle: "Talk to a Redshift advisor",
    formNote: "Call [phone] or request a callback. Free counselling and a demo class.",
    formButton: "Request a callback",
  },
  glance: {
    title: "How long is the Amazon Redshift course in Chennai?",
    lead: "The Amazon Redshift course runs about **[X hours] over [X months]**, with hands-on SQL and loading labs.",
    batches: [
      { name: "Duration", duration: "[X months]" },
      { name: "Hours of learning", duration: "[X hours]" },
    ],
  },
  whatis: {
    title: "What is Amazon Redshift?",
    definition:
      "Amazon Redshift is AWS's fully managed, petabyte-scale data warehouse. It uses columnar storage and massively parallel processing to run fast analytical queries over very large datasets, and it integrates tightly with the rest of the AWS data stack.",
    image: {
      alt: "Amazon Redshift trainer and learners in a hands-on class at BTree Chennai",
    },
  },
  outcomes: {
    title: "What will you learn in the Amazon Redshift course?",
    lead: "You'll design, load, and tune a Redshift warehouse:",
    bullets: [
      "Redshift architecture (nodes, slices, MPP)",
      "Table design: distribution and sort keys",
      "Loading data (COPY from S3)",
      "SQL and analytical queries",
      "Performance tuning and query optimisation",
      "Workload management (WLM)",
      "Redshift Spectrum (querying S3)",
      "Security and access control",
      "Integration with BI and ETL tools",
    ],
  },
  who: {
    title: "Who should join this Amazon Redshift course?",
    items: [
      {
        title: "Data analysts and SQL developers",
      },
      {
        title: "ETL and data-warehouse developers",
      },
      {
        title: "Aspiring and current data engineers",
      },
      {
        title: "BI professionals on AWS",
      },
    ],
  },
  curriculum: {
    title: "What is in the Amazon Redshift syllabus?",
    lead: "[X] modules, about [X hours] hands-on.",
    list: [
      "Redshift architecture and MPP",
      "Clusters and nodes",
      "Table design: distribution and sort keys",
      "Loading data with COPY",
      "SQL and analytics",
      "Performance tuning",
      "Workload management",
      "Redshift Spectrum",
      "Security and integration",
      "Capstone, interview prep",
    ],
  },
  tools: {
    title: "Which tools will you learn?",
    items: ["Amazon Redshift", "query editor", "S3 (for COPY)", "Redshift Spectrum", "BI connectors"],
  },
  projects: {
    title: "What projects will you build?",
    lead: "Every project goes into your portfolio and GitHub, ready to show at interviews.",
    items: [
      {
        title: "Design and load a Redshift warehouse from S3",
        imageAlt: "Design and load a Redshift warehouse from S3: Amazon Redshift course project in Chennai",
      },
      {
        title: "Tune distribution/sort keys for fast queries",
        imageAlt: "Tune distribution/sort keys for fast queries: Amazon Redshift course project in Chennai",
      },
      {
        title: "Query a data lake with Redshift Spectrum",
        imageAlt: "Query a data lake with Redshift Spectrum: Amazon Redshift course project in Chennai",
      },
    ],
  },
  cert: {
    title: "Which certification does the Amazon Redshift course prepare you for?",
    text: "The course supports AWS data certifications (**Data Engineer – Associate**), where Redshift features heavily. You also receive a BTree completion certificate. [Confirm, AWS exam fee paid separately.]",
    imageAlt: "BTree Amazon Redshift course completion certificate",
    caption: "Sample BTree Amazon Redshift course completion certificate.",
  },
  jobs: {
    title: "What jobs and salary can you get after Amazon Redshift training in Chennai?",
    lead: "Amazon Redshift learners usually start as Redshift / Data Warehouse Developer, Data Engineer (AWS) or BI / Analytics Engineer. Typical Chennai starting salaries are below.",
    roles: [
      {
        role: "Redshift / Data Warehouse Developer",
        salary: "[₹X–₹Y LPA]",
        employers: "IT services, product firms",
      },
      {
        role: "Data Engineer (AWS)",
        salary: "[₹X–₹Y LPA]",
        employers: "GCCs, consulting",
      },
      {
        role: "BI / Analytics Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "SaaS, enterprises",
      },
      {
        role: "ETL Developer",
        salary: "[₹X–₹Y LPA]",
        employers: "Enterprises",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why choose BTree for Amazon Redshift training in Chennai?",
    bullets: [
      "Trainers running real Redshift warehouses",
      "Hands-on loading, tuning, and querying",
      "Portfolio warehouse projects",
      "Certification guidance and placement support",
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] Amazon Redshift batch.",
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
    title: "Amazon Redshift course FAQ (Chennai)",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "Do I need SQL first?",
        a: "Basic SQL helps and we strengthen it. The course focuses on Redshift-specific design and tuning.",
      },
      {
        q: "Redshift or Snowflake?",
        a: "Both are strong cloud warehouses. Redshift fits AWS-centric teams; the data-warehousing concepts transfer either way.",
      },
      {
        q: "Which certification should I take after the Amazon Redshift course?",
        a: "AWS Data Engineer – Associate. [Confirm.]",
      },
      {
        q: "Is the Amazon Redshift course classroom or online?",
        a: "Both. Attend at our Perungudi centre in Chennai or join live online, with the same labs.",
      },
      {
        q: "What is the Amazon Redshift course fee in Chennai?",
        a: "The BTree Amazon Redshift course fee is ₹[FEE] for the full [N]-month programme, with no-cost EMI from ₹[EMI] a month.",
      },
      {
        q: "Will I get placement support after the Amazon Redshift course?",
        a: "Yes. Placement support includes resume and LinkedIn reviews, mock interviews with feedback, and referrals to BTree hiring partners. It continues after the course ends, until you are placed.",
      },
    ],
  },
  cta: {
    title: "Try a free Amazon Redshift demo class",
    lead: "Load and query your first Redshift table in a live session.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "Google BigQuery training in Chennai",
      href: "/courses/google-bigquery",
    },
    {
      label: "Azure Synapse training in Chennai",
      href: "/courses/azure-synapse",
    },
    {
      label: "Ab Initio training in Chennai",
      href: "/courses/ab-initio",
    },
    {
      label: "IBM DB2 training in Chennai",
      href: "/courses/ibm-db2",
    },
    {
      label: "All IT courses in Chennai",
      href: "/courses",
    },
  ],
  areas:
    "**Amazon Redshift training across Chennai:** Adyar, Guindy, Nandanam, Poonamallee, T. Nagar, Anna Nagar, K.K. Nagar, OMR, ECR, Mylapore, Nungambakkam, Velachery, Vadapalani, Royapettah, Porur, Triplicane. Classroom batches run at our Perungudi centre; every batch is also live online.",
};

export default course;
