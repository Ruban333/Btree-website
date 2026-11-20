import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "gcp-data-engineering",
  name: "GCP Data Engineering",
  track: "Data Engineering",
  seo: {
    title: "GCP Data Engineering Course in Chennai | BTree",
    description:
      "GCP data engineering course in Chennai: BigQuery, Dataflow, Pub/Sub, Dataproc and Composer in 4 months of live labs. Prep for Professional Data Engineer.",
  },
  hero: {
    h1: "GCP data engineering course in Chennai",
    lead: "The BTree GCP data engineering course in Chennai teaches you to build data pipelines on Google Cloud with SQL, Python, BigQuery, Dataflow (Apache Beam), Pub/Sub, Dataproc and Cloud Composer. In 4 months of live, hands-on classes you build 3 end-to-end projects, prepare for the Google Cloud Professional Data Engineer exam and get placement support.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] GCP data engineering learners placed in 2026",
    },
    syllabusButton: "Download GCP data engineering syllabus (PDF)",
    formTitle: "Talk to a data engineering advisor",
  },
  glance: {
    title: "How long is the GCP data engineering course?",
    lead: "The GCP data engineering course takes **4 months, about 160 hours** of live classes and labs.",
    batches: [
      { name: "Duration", duration: "4 months" },
      { name: "Hours of learning", duration: "160 hours" },
    ],
  },
  whatis: {
    title: "What is GCP data engineering?",
    definition:
      "**GCP data engineering** is designing and running data systems on Google Cloud Platform: ingesting data with Pub/Sub, processing it with Dataflow or Dataproc, storing and analysing it in BigQuery and Cloud Storage, and orchestrating it all with Cloud Composer.",
    why: "BigQuery is one of the most widely used cloud data warehouses, and Google Cloud is popular with retail, media and analytics-heavy companies, so GCP data engineers are in steady demand.",
    pipeline: {
      label: "A data pipeline on Google Cloud",
      caption: "The pipeline you build and run during the course.",
      steps: [
        {
          label: "Ingest",
          tools: "Pub/Sub, Datastream",
        },
        {
          label: "Store",
          tools: "Cloud Storage",
        },
        {
          label: "Process",
          tools: "Dataflow, Dataproc (Spark)",
        },
        {
          label: "Analyse",
          tools: "BigQuery, BigQuery ML",
        },
        {
          label: "Orchestrate",
          tools: "Cloud Composer (Airflow)",
        },
        {
          label: "Govern",
          tools: "Dataplex, IAM",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the GCP data engineering course",
    lead: "By the end you can design, build and run a production-style data platform on Google Cloud on your own.",
    items: [
      {
        title: "Write production SQL in BigQuery",
        text: "Partitioning, clustering, nested data and cost control.",
      },
      {
        title: "Program in Python and Apache Beam",
        text: "Pipelines that run the same code for batch and streaming.",
      },
      {
        title: "Process data with Dataflow and Dataproc",
        text: "Managed Beam pipelines and Spark clusters.",
      },
      {
        title: "Stream real-time events",
        text: "Pub/Sub topics, subscriptions and windowing.",
      },
      {
        title: "Build a data lake on Cloud Storage",
        text: "Storage classes, file formats and lifecycle rules.",
      },
      {
        title: "Orchestrate with Cloud Composer",
        text: "Airflow DAGs, scheduling and retries.",
      },
      {
        title: "Govern and secure data",
        text: "IAM, Dataplex, Sensitive Data Protection and monitoring.",
      },
      {
        title: "Pass data engineering interviews",
        text: "SQL tests, scenario questions and a reviewed resume.",
      },
    ],
  },
  who: {
    title: "Who should join this GCP data engineering course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "CS, IT and maths graduates; SQL and Python are taught from the basics.",
      },
      {
        title: "Data and BI analysts",
        text: "Move from reporting to building pipelines in BigQuery.",
      },
      {
        title: "ETL developers",
        text: "Take on-premise ETL skills to Google Cloud.",
      },
      {
        title: "Cloud and software engineers",
        text: "Specialise in data on GCP.",
      },
    ],
  },
  curriculum: {
    title: "GCP data engineering syllabus",
    lead: "9 modules and a capstone, about 160 hours of live classes and labs.",
    modules: [
      {
        title: "SQL and data modelling",
        sessions: "8 sessions",
        bullets: ["Joins, CTEs and window functions", "Star schemas and denormalised models for BigQuery"],
      },
      {
        title: "Python for data engineering",
        sessions: "7 sessions",
        bullets: ["Python, pandas and APIs", "Writing testable pipeline code"],
      },
      {
        title: "Google Cloud fundamentals",
        sessions: "5 sessions",
        bullets: ["Projects, IAM and billing", "Cloud Storage, Compute Engine and networking basics"],
      },
      {
        title: "BigQuery",
        sessions: "10 sessions",
        bullets: [
          "Storage, partitioning and clustering",
          "Loading, streaming and federated queries",
          "BigQuery ML and cost control",
        ],
      },
      {
        title: "Dataflow and Apache Beam",
        sessions: "9 sessions",
        bullets: ["Beam programming model", "Batch and streaming pipelines, windowing"],
      },
      {
        title: "Pub/Sub and real-time pipelines",
        sessions: "5 sessions",
        bullets: ["Topics, subscriptions and ordering", "Streaming into BigQuery"],
      },
      {
        title: "Dataproc and Apache Spark",
        sessions: "5 sessions",
        bullets: ["PySpark on Dataproc", "Serverless Spark"],
      },
      {
        title: "Composer, governance and monitoring",
        sessions: "6 sessions",
        bullets: ["Cloud Composer (Airflow) DAGs", "Dataplex, Sensitive Data Protection, Cloud Monitoring"],
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "6 sessions",
        bullets: ["End-to-end capstone pipeline", "Professional Data Engineer practice tests, mock interviews"],
      },
    ],
  },
  tools: {
    title: "Data tools you'll use",
    items: [
      "SQL",
      "Python",
      "BigQuery",
      "Cloud Storage",
      "Dataflow",
      "Apache Beam",
      "Pub/Sub",
      "Dataproc",
      "Apache Spark",
      "Cloud Composer",
      "Apache Airflow",
      "Dataplex",
      "Looker Studio",
      "Cloud Run functions",
    ],
  },
  projects: {
    title: "GCP data engineering projects you'll build",
    lead: "Each project runs on your own Google Cloud project and goes on your GitHub with an architecture diagram.",
    items: [
      {
        title: "Real-time ride events pipeline",
        text: "Ride events streamed through Pub/Sub and Dataflow into BigQuery, with a live Looker Studio dashboard.",
        stack: "Pub/Sub · Dataflow · BigQuery",
        imageAlt: "Streaming pipeline code for Pub/Sub and Dataflow",
      },
      {
        title: "E-commerce batch pipeline",
        text: "Daily order files processed with Spark on Dataproc into a BigQuery star schema, scheduled with Composer.",
        stack: "Cloud Storage · Dataproc · Composer",
        imageAlt: "E-commerce batch pipeline running on Dataproc",
      },
      {
        title: "Customer churn model in BigQuery ML",
        text: "Train and evaluate a churn model with SQL, then publish predictions to a dashboard.",
        stack: "BigQuery ML · Looker Studio",
        imageAlt: "Churn prediction dashboard built with BigQuery ML",
      },
    ],
  },
  cert: {
    title: "Google Cloud data engineer certification",
    text: "You earn a BTree GCP data engineering course certificate and prepare for the Google Cloud Professional Data Engineer exam: 2 hours, 40–50 multiple-choice and multiple-select questions. Freshers can start with the Google Cloud Associate Data Practitioner certification.",
    imageAlt: "BTree GCP data engineering course completion certificate",
    caption: "Sample BTree GCP data engineering course completion certificate.",
  },
  jobs: {
    title: "Jobs and salary after the GCP data engineering course",
    lead: "GCP data engineering learners usually start as data engineers or BigQuery developers. Typical Chennai salaries are below.",
    roles: [
      {
        role: "GCP data engineer",
        salary: "₹[X–Y] LPA",
        employers: "IT services, Google Cloud partners",
      },
      {
        role: "BigQuery developer",
        salary: "₹[X–Y] LPA",
        employers: "Retail, media, analytics firms",
      },
      {
        role: "Big data engineer",
        salary: "₹[X–Y] LPA",
        employers: "GCCs, banks",
      },
      {
        role: "Analytics engineer",
        salary: "₹[X–Y] LPA",
        employers: "Product companies, startups",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn GCP data engineering at BTree",
    items: [
      {
        title: "Your own Google Cloud labs",
        text: "Every topic is practised in a real Google Cloud project, using free trial credits where possible.",
      },
      {
        title: "Trainers who build on GCP",
        text: "Taught by working data engineers with [N]+ years of experience.",
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
    lead: "Video stories and reviews from learners of the [Batch month] GCP Data Engineering batch.",
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
    title: "GCP data engineering course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the GCP data engineering course fee in Chennai?",
        a: "The BTree GCP data engineering course fee is ₹[FEE] for the full 4-month programme, with no-cost EMI from ₹[EMI] a month. The fee covers live classes, Google Cloud labs, 3 projects, the course certificate, practice tests and placement support.",
      },
      {
        q: "What is the Google Cloud Professional Data Engineer exam?",
        a: "It is Google Cloud's professional-level data engineering certification. The exam lasts 2 hours, has 40–50 multiple-choice and multiple-select questions and costs $200. Google recommends 3+ years of industry experience, including at least 1 year on Google Cloud.",
      },
      {
        q: "Can a fresher take the Professional Data Engineer exam?",
        a: "There is no formal prerequisite, but the exam assumes real experience. Freshers usually start with the Google Cloud Associate Data Practitioner certification and take Professional Data Engineer after a year of work.",
      },
      {
        q: "GCP or AWS: which is better for data engineering?",
        a: "Both are in demand; AWS has more job openings overall, while GCP is strong for BigQuery-centred analytics. The core skills, SQL, Python, Spark and pipeline design, transfer between clouds, so start with the cloud your target employers use.",
      },
      {
        q: "Do I need coding for GCP data engineering?",
        a: "Yes, SQL and Python are essential. The course teaches both from the basics, then Apache Beam and PySpark for large pipelines.",
      },
      {
        q: "How long does it take to learn GCP data engineering?",
        a: "The BTree course takes 4 months, about 160 hours of live classes and labs.",
      },
      {
        q: "What is the salary of a GCP data engineer in Chennai?",
        a: "Entry-level GCP data engineers in Chennai typically earn ₹[X–Y] LPA, rising to ₹[X–Y] LPA with 3–5 years of experience ([source, year]).",
      },
      {
        q: "Is the GCP data engineering course available online?",
        a: "Yes. The course runs as live online batches and as classroom batches at the BTree centre in Perungudi, Chennai, with the same trainers, labs, recordings and placement support.",
      },
    ],
  },
  cta: {
    title: "Try a free GCP data engineering demo class",
    lead: "Stream live events into BigQuery and query them in seconds.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "AWS data engineering course in Chennai",
      href: "/courses/aws-data-engineering",
    },
    {
      label: "Azure data engineering course in Chennai",
      href: "/courses/azure-data-engineering",
    },
    {
      label: "Data analytics course in Chennai",
      href: "#",
    },
    {
      label: "BigQuery tutorial for beginners",
      href: "#",
    },
    {
      label: "AWS vs Azure vs GCP for data engineering",
      href: "#",
    },
    {
      label: "Data engineer salary in Chennai",
      href: "#",
    },
    {
      label: "Data engineer interview questions",
      href: "#",
    },
  ],
};

export default course;
