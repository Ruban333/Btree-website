export type CourseCat = "dev" | "cloud" | "data" | "test" | "design" | "marketing";

export type Course = {
  slug: string;
  cat: CourseCat;
  code: string;
  name: string;
  out: string;
  dur: string;
  mode: string;
  level: "Beginner" | "Intermediate";
  /** Highlight badge ("Most popular", "New batch"). Falls back to level. */
  badge?: string;
};

export const CATEGORIES: { id: "all" | CourseCat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "dev", label: "Development" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "data", label: "Data & AI" },
  { id: "test", label: "Testing" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
];

/**
 * Slugs: aws-training-chennai and aws-devops-course-chennai are the URLs set in the
 * design specs (keep from WordPress); the rest are new and should be checked against
 * the URL audit before launch.
 */
export const ALL_COURSES: Course[] = [
  { slug: "python-full-stack", cat: "dev", code: "Py", name: "Python Full Stack", out: "Django, React and SQL with 6 live projects.", dur: "4 months", mode: "Online · Classroom", level: "Beginner", badge: "Most popular" },
  { slug: "java-full-stack", cat: "dev", code: "JV", name: "Java Full Stack", out: "Core Java, Spring Boot, React and MySQL.", dur: "4 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "mern-stack", cat: "dev", code: "MN", name: "MERN Stack", out: "MongoDB, Express, React and Node with 5 projects.", dur: "3.5 months", mode: "Online", level: "Intermediate" },
  { slug: "aws-training-chennai", cat: "cloud", code: "AWS", name: "AWS Solutions Architect", out: "Hands-on labs and SAA-C03 exam preparation.", dur: "2.5 months", mode: "Online", level: "Intermediate", badge: "New batch" },
  { slug: "microsoft-azure", cat: "cloud", code: "AZ", name: "Microsoft Azure", out: "AZ-104 administration with real deployments.", dur: "2.5 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "aws-devops-course-chennai", cat: "cloud", code: "DO", name: "AWS DevOps", out: "Linux, Git, Docker, Kubernetes, Jenkins, Terraform.", dur: "4 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "data-analytics", cat: "data", code: "DA", name: "Data Analytics", out: "Excel, SQL, Power BI and Python for analysis.", dur: "3 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "data-science-machine-learning", cat: "data", code: "DS", name: "Data Science & ML", out: "Python, statistics, machine learning and deployment.", dur: "5 months", mode: "Online", level: "Intermediate" },
  { slug: "generative-ai", cat: "data", code: "AI", name: "Generative AI", out: "LLMs, prompt engineering, RAG and AI apps.", dur: "2 months", mode: "Online", level: "Intermediate", badge: "New" },
  { slug: "software-testing", cat: "test", code: "ST", name: "Software Testing", out: "Manual testing, Selenium with Java and API testing.", dur: "3 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "playwright-automation", cat: "test", code: "PW", name: "Playwright Automation", out: "Modern test automation with TypeScript.", dur: "2 months", mode: "Online", level: "Intermediate" },
  { slug: "ui-ux-design", cat: "design", code: "UX", name: "UI/UX Design", out: "Research, Figma and a case-study portfolio.", dur: "3 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "ccna-ccnp", cat: "cloud", code: "NW", name: "CCNA & CCNP", out: "Cisco routing, switching, security and automation labs.", dur: "4 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "cyber-security", cat: "cloud", code: "CS", name: "Cyber Security", out: "Ethical hacking, SOC and SIEM, web app and cloud security.", dur: "5 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "azure-devops", cat: "cloud", code: "AD", name: "Azure DevOps", out: "Azure Pipelines, Repos, Docker, AKS, Terraform and Bicep.", dur: "3 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "aws-data-engineering", cat: "data", code: "ADE", name: "AWS Data Engineering", out: "SQL, PySpark, S3, Glue, Redshift, Athena and Kinesis.", dur: "4 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "azure-data-engineering", cat: "data", code: "AZE", name: "Azure Data Engineering", out: "Data Factory, Databricks, PySpark and Microsoft Fabric.", dur: "4 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "gcp-data-engineering", cat: "data", code: "GDE", name: "GCP Data Engineering", out: "BigQuery, Dataflow, Pub/Sub, Dataproc and Composer.", dur: "4 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "power-automate", cat: "test", code: "PA", name: "Microsoft Power Automate", out: "Cloud flows, desktop RPA, AI Builder and Copilot.", dur: "2 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "power-bi", cat: "data", code: "PBI", name: "Power BI", out: "Power Query, DAX, dashboards and PL-300 prep.", dur: "80+ hours", mode: "Online · Classroom", level: "Beginner" },
  { slug: "salesforce", cat: "cloud", code: "SF", name: "Salesforce", out: "Admin and developer tracks with certification prep.", dur: "80+ hours", mode: "Online · Classroom", level: "Beginner" },
  { slug: "gcp", cat: "cloud", code: "GCP", name: "Google Cloud (GCP)", out: "Compute Engine, GKE, networking and Associate Cloud Engineer prep.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "devops", cat: "cloud", code: "DO", name: "DevOps", out: "CI/CD, Docker, Kubernetes, Terraform, Ansible and monitoring.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "kubernetes", cat: "cloud", code: "K8", name: "Kubernetes", out: "Pods, services, Helm, scaling and CKA prep.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "terraform", cat: "cloud", code: "TF", name: "Terraform", out: "Infrastructure as code on AWS, Azure and GCP.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "linux", cat: "cloud", code: "LX", name: "Linux", out: "Command line, administration, shell scripting and RHCSA path.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "databricks", cat: "data", code: "DBX", name: "Databricks", out: "Spark, Delta Lake and lakehouse pipelines.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "pyspark", cat: "data", code: "PS", name: "PySpark", out: "Spark DataFrames, SQL and streaming with Python.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "snowflake", cat: "data", code: "SF", name: "Snowflake", out: "Architecture, SQL, loading, performance and SnowPro prep.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "teradata", cat: "data", code: "TD", name: "Teradata", out: "Architecture, SQL, load utilities and tuning.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "informatica", cat: "data", code: "IN", name: "Informatica", out: "PowerCenter ETL, workflows, SCD and cloud integration.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "ab-initio", cat: "data", code: "AB", name: "Ab Initio", out: "GDE, Co>Operating System and parallel graphs.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "google-bigquery", cat: "data", code: "BQ", name: "Google BigQuery", out: "Serverless SQL, optimisation and BigQuery ML.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "amazon-redshift", cat: "data", code: "RS", name: "Amazon Redshift", out: "Table design, loading, tuning and Spectrum.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "azure-synapse", cat: "data", code: "SY", name: "Azure Synapse", out: "SQL pools, Spark pools, pipelines and Power BI.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "ibm-db2", cat: "data", code: "DB2", name: "IBM DB2", out: "SQL, administration, stored procedures and tuning.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "oracle", cat: "data", code: "OR", name: "Oracle", out: "SQL, PL/SQL and database design.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "advanced-sql", cat: "data", code: "SQL", name: "Advanced SQL", out: "Window functions, CTEs, joins and query optimisation.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "tableau", cat: "data", code: "TB", name: "Tableau", out: "Dashboards, calculations, maps and data storytelling.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "r-programming", cat: "data", code: "R", name: "R Programming", out: "Data wrangling, ggplot2, statistics and modelling.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "uipath", cat: "test", code: "UP", name: "UiPath", out: "Studio, selectors, REFramework and Orchestrator.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "blue-prism", cat: "test", code: "BP", name: "Blue Prism", out: "Process and Object Studio, work queues and AD01 prep.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "automation-anywhere", cat: "test", code: "AA", name: "Automation Anywhere", out: "Automation 360, task bots and IQ Bot.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "mean-stack", cat: "dev", code: "ME", name: "MEAN Stack", out: "MongoDB, Express, Angular and Node.js with a portfolio app.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "dot-net", cat: "dev", code: "NET", name: ".NET", out: "C#, ASP.NET Core, Web APIs and Entity Framework.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "node-js", cat: "dev", code: "NJ", name: "Node.js", out: "Express, REST APIs, databases and authentication.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "react-js", cat: "dev", code: "RJ", name: "React JS", out: "Components, hooks, routing and API integration.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "angular", cat: "dev", code: "NG", name: "Angular", out: "TypeScript, components, services, routing and forms.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "advanced-java", cat: "dev", code: "AJ", name: "Advanced Java", out: "JDBC, Servlets, JSP and Spring Boot.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "flutter", cat: "dev", code: "FL", name: "Flutter", out: "Dart, widgets, state management, APIs and Firebase.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "android", cat: "dev", code: "AN", name: "Android", out: "Kotlin, Jetpack and Play Store publishing.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "mobile-appium", cat: "test", code: "AP", name: "Appium", out: "Mobile test automation for Android and iOS.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "selenium", cat: "test", code: "SE", name: "Selenium", out: "WebDriver, TestNG, Page Object Model and CI.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "uft", cat: "test", code: "UFT", name: "UFT (QTP)", out: "VBScript, object repository, data-driven testing and frameworks.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "digital-marketing", cat: "marketing", code: "DM", name: "Digital Marketing", out: "SEO, Google Ads, social media and analytics with live projects.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "forward-deployed-engineer", cat: "dev", code: "FDE", name: "Forward Deployed Engineer", out: "Build, integrate and deploy software and AI solutions with customers.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate", badge: "New" },
];

export const courseBySlug = (slug: string) => ALL_COURSES.find((c) => c.slug === slug);
