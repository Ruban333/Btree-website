import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "aws-data-engineering",
  name: "AWS Data Engineering",
  track: "Data Engineering",
  seo: {
    title: "AWS Data Engineering Course in Chennai | BTree",
    description:
      "AWS data engineering course in Chennai: SQL, PySpark, S3, Glue, Redshift, Athena and Kinesis. 4 months of live labs, DEA-C01 prep and placement support.",
  },
  hero: {
    h1: "AWS data engineering course in Chennai",
    lead: "The BTree AWS data engineering course in Chennai teaches you to build batch and streaming data pipelines on AWS with SQL, Python, PySpark, Amazon S3, AWS Glue, Amazon Redshift, Athena and Kinesis. In 4 months of live, hands-on classes you build 3 end-to-end projects, prepare for the AWS Certified Data Engineer – Associate exam and get placement support.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] AWS data engineering learners placed in 2026",
    },
    syllabusButton: "Download AWS data engineering syllabus (PDF)",
    formTitle: "Talk to a data engineering advisor",
  },
  glance: {
    title: "How long is the AWS data engineering course?",
    lead: "The AWS data engineering course takes **4 months, about 160 hours** of live classes and labs.",
    batches: [
      { name: "Duration", duration: "4 months" },
      { name: "Hours of learning", duration: "160 hours" },
    ],
  },
  whatis: {
    title: "What is AWS data engineering?",
    definition:
      "**AWS data engineering** is the work of collecting, storing, transforming and serving data on Amazon Web Services so that analysts, dashboards and machine learning models can use it. Data engineers build these pipelines with services such as Amazon S3, AWS Glue, Amazon Redshift, Amazon Athena and Amazon Kinesis.",
    why: "Every analytics and AI project depends on clean, reliable data, so companies hire data engineers before they hire more analysts, and AWS is the cloud most of them use.",
    pipeline: {
      label: "A data pipeline on AWS",
      caption: "The pipeline you build and run during the course.",
      steps: [
        {
          label: "Ingest",
          tools: "Kinesis, DMS, Lambda",
        },
        {
          label: "Store",
          tools: "S3 data lake, Lake Formation",
        },
        {
          label: "Transform",
          tools: "AWS Glue, PySpark, EMR",
        },
        {
          label: "Warehouse",
          tools: "Amazon Redshift",
        },
        {
          label: "Query",
          tools: "Amazon Athena, QuickSight",
        },
        {
          label: "Orchestrate",
          tools: "Step Functions, MWAA, CloudWatch",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the AWS data engineering course",
    lead: "By the end you can design, build and run a production-style data platform on AWS on your own.",
    items: [
      {
        title: "Write production SQL",
        text: "Joins, window functions, CTEs and query tuning.",
      },
      {
        title: "Program in Python and PySpark",
        text: "DataFrames, transformations and Spark performance basics.",
      },
      {
        title: "Build an S3 data lake",
        text: "Partitioning, Parquet, Glue Data Catalog and Lake Formation.",
      },
      {
        title: "Transform data with Glue and EMR",
        text: "Glue ETL jobs, crawlers and Spark on EMR.",
      },
      {
        title: "Model a Redshift warehouse",
        text: "Star schemas, distribution and sort keys, Spectrum.",
      },
      {
        title: "Stream real-time data",
        text: "Kinesis Data Streams, Data Firehose and Amazon MSK.",
      },
      {
        title: "Orchestrate and secure pipelines",
        text: "Step Functions, Airflow on MWAA, IAM, KMS and CloudWatch.",
      },
      {
        title: "Pass data engineering interviews",
        text: "SQL tests, scenario questions and a reviewed resume.",
      },
    ],
  },
  who: {
    title: "Who should join this AWS data engineering course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "CS, IT and maths graduates; SQL and Python are taught from the basics.",
      },
      {
        title: "Data and BI analysts",
        text: "Move from reporting to building the pipelines behind it.",
      },
      {
        title: "ETL developers",
        text: "Take Informatica, SSIS or DataStage skills to the cloud.",
      },
      {
        title: "Developers and testers",
        text: "Switch to one of the fastest-growing data roles.",
      },
    ],
  },
  curriculum: {
    title: "AWS data engineering syllabus",
    lead: "9 modules and a capstone, about 160 hours of live classes and labs.",
    modules: [
      {
        title: "SQL for data engineering",
        sessions: "8 sessions",
        bullets: [
          "Joins, aggregations, CTEs and window functions",
          "Data modelling: normalisation, star and snowflake schemas",
        ],
      },
      {
        title: "Python and PySpark",
        sessions: "10 sessions",
        bullets: [
          "Python for data: files, APIs, pandas",
          "Spark architecture and PySpark DataFrames",
          "Spark SQL and performance tuning basics",
        ],
      },
      {
        title: "AWS fundamentals",
        sessions: "5 sessions",
        bullets: ["IAM, S3, EC2 and VPC", "Cost control and the free tier"],
      },
      {
        title: "Data lake on Amazon S3",
        sessions: "6 sessions",
        bullets: ["Partitioning and file formats: Parquet, Iceberg", "AWS Glue Data Catalog and Lake Formation"],
      },
      {
        title: "ETL with AWS Glue and Amazon EMR",
        sessions: "9 sessions",
        bullets: [
          "Glue ETL jobs, crawlers and job bookmarks",
          "Spark on Amazon EMR",
          "AWS Lambda for light transformations",
        ],
      },
      {
        title: "Data warehousing with Redshift and Athena",
        sessions: "8 sessions",
        bullets: ["Redshift design, loading and Spectrum", "Querying the lake with Athena", "Dashboards in QuickSight"],
      },
      {
        title: "Streaming with Kinesis and Amazon MSK",
        sessions: "6 sessions",
        bullets: ["Kinesis Data Streams and Data Firehose", "Amazon MSK (Apache Kafka) basics"],
      },
      {
        title: "Orchestration, monitoring and security",
        sessions: "5 sessions",
        bullets: ["Step Functions and Airflow on Amazon MWAA", "CloudWatch, IAM policies and KMS encryption"],
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "6 sessions",
        bullets: ["End-to-end capstone pipeline", "DEA-C01 practice tests, mock interviews, resume review"],
      },
    ],
  },
  tools: {
    title: "Data tools you'll use",
    items: [
      "SQL",
      "Python",
      "PySpark",
      "Amazon S3",
      "AWS Glue",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EMR",
      "Amazon Kinesis",
      "Amazon MSK",
      "AWS Lambda",
      "Lake Formation",
      "Step Functions",
      "Apache Airflow",
      "QuickSight",
    ],
  },
  projects: {
    title: "AWS data engineering projects you'll build",
    lead: "Each project runs on your own AWS account and goes on your GitHub with an architecture diagram.",
    items: [
      {
        title: "Retail sales data lake",
        text: "Raw CSV files cleaned with Glue and PySpark, stored as Parquet and queried with Athena.",
        stack: "S3 · Glue · PySpark · Athena",
        imageAlt: "Retail sales data lake built on Amazon S3 and AWS Glue",
      },
      {
        title: "Real-time clickstream pipeline",
        text: "Website events streamed through Kinesis and Lambda into S3 and Redshift.",
        stack: "Kinesis · Lambda · S3 · Redshift",
        imageAlt: "Real-time clickstream pipeline code using Amazon Kinesis",
      },
      {
        title: "Warehouse migration to Redshift",
        text: "A MySQL database moved to Redshift with DMS, scheduled with Airflow on MWAA.",
        stack: "DMS · Redshift · MWAA · CloudWatch",
        imageAlt: "Database migration to Amazon Redshift orchestrated with Airflow",
      },
    ],
  },
  cert: {
    title: "AWS data engineer certification",
    text: "You earn a BTree AWS data engineering course certificate and prepare for the AWS Certified Data Engineer – Associate (DEA-C01) exam: 65 questions in 130 minutes across four domains: data ingestion and transformation (34%), data store management (26%), data operations and support (22%) and data security and governance (18%).",
    imageAlt: "BTree AWS data engineering course completion certificate",
    caption: "Sample BTree AWS data engineering course completion certificate.",
  },
  jobs: {
    title: "Jobs and salary after the AWS data engineering course",
    lead: "AWS data engineering learners usually start as data engineers or ETL developers. Typical Chennai salaries are below.",
    roles: [
      {
        role: "AWS data engineer",
        salary: "₹[X–Y] LPA",
        employers: "IT services, GCCs",
      },
      {
        role: "ETL / big data developer",
        salary: "₹[X–Y] LPA",
        employers: "Banks, insurance, retail",
      },
      {
        role: "Data pipeline engineer",
        salary: "₹[X–Y] LPA",
        employers: "Product companies, startups",
      },
      {
        role: "Analytics engineer",
        salary: "₹[X–Y] LPA",
        employers: "SaaS, consulting",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn AWS data engineering at BTree",
    items: [
      {
        title: "Your own AWS labs",
        text: "Every topic is practised on a real AWS account, with guidance on staying inside the free tier.",
      },
      {
        title: "Trainers who build pipelines",
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
    lead: "Video stories and reviews from learners of the [Batch month] AWS Data Engineering batch.",
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
    title: "AWS data engineering course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the AWS data engineering course fee in Chennai?",
        a: "The BTree AWS data engineering course fee is ₹[FEE] for the full 4-month programme, with no-cost EMI from ₹[EMI] a month. The fee covers live classes, AWS labs, 3 projects, the course certificate, DEA-C01 practice tests and placement support.",
      },
      {
        q: "What is the AWS Certified Data Engineer – Associate exam?",
        a: "DEA-C01 is AWS's associate-level data engineering certification. It has 65 questions in 130 minutes and tests data ingestion and transformation, data store management, data operations and support, and data security and governance.",
      },
      {
        q: "Do I need coding for AWS data engineering?",
        a: "Yes, SQL and Python are essential, and PySpark is used for large datasets. The course teaches all three from the basics, so you do not need programming experience to join.",
      },
      {
        q: "What is the difference between a data engineer and a data analyst?",
        a: "A data engineer builds and runs the pipelines that collect and clean data; a data analyst uses that data to answer business questions with SQL, Excel and dashboards. Data engineering is more technical and usually pays more.",
      },
      {
        q: "Can a fresher become an AWS data engineer?",
        a: "Yes. Many companies hire freshers as junior data engineers if they have strong SQL, Python and two or three cloud projects. The course gives you all three; plan for 8–10 hours a week of practice.",
      },
      {
        q: "How long does it take to learn AWS data engineering?",
        a: "The BTree course takes 4 months, about 160 hours of live classes and labs.",
      },
      {
        q: "What is the salary of an AWS data engineer in Chennai?",
        a: "Entry-level AWS data engineers in Chennai typically earn ₹[X–Y] LPA, rising to ₹[X–Y] LPA with 3–5 years of experience ([source, year]).",
      },
      {
        q: "Is the AWS data engineering course available online?",
        a: "Yes. The course runs as live online batches and as classroom batches at the BTree centre in Perungudi, Chennai, with the same trainers, labs, recordings and placement support.",
      },
    ],
  },
  cta: {
    title: "Try a free AWS data engineering demo class",
    lead: "Watch raw data become a queryable lake on S3 in one session.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "GCP data engineering course in Chennai",
      href: "/courses/gcp-data-engineering",
    },
    {
      label: "Azure data engineering course in Chennai",
      href: "/courses/azure-data-engineering",
    },
    {
      label: "AWS DevOps course in Chennai",
      href: "/courses/aws-devops-course-chennai",
    },
    {
      label: "Data analytics course in Chennai",
      href: "#",
    },
    {
      label: "Data engineer roadmap for freshers",
      href: "#",
    },
    {
      label: "AWS vs Azure vs GCP for data engineering",
      href: "#",
    },
    {
      label: "Data engineer interview questions",
      href: "#",
    },
  ],
};

export default course;
