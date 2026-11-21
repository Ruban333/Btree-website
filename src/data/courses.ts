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
  { slug: "data-analytics", cat: "data", code: "DA", name: "Data Analytics", out: "Excel, SQL, Power BI and Python for analysis.", dur: "3 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "data-science-machine-learning", cat: "data", code: "DS", name: "AI Integrated Data Science", out: "Python, statistics, machine learning and deployment.", dur: "100+ hours", mode: "Online", level: "Intermediate" },
  { slug: "playwright-automation", cat: "test", code: "PW", name: "Playwright", out: "Modern test automation with TypeScript.", dur: "75+ hours", mode: "Online", level: "Intermediate" },
  { slug: "ui-ux-design", cat: "design", code: "UX", name: "AI Integrated UI/UX Design", out: "Research, Figma and a case-study portfolio.", dur: "80+ hours", mode: "Online · Classroom", level: "Beginner" },
  { slug: "cyber-security", cat: "cloud", code: "CS", name: "Cyber Security", out: "Ethical hacking, SOC and SIEM, web app and cloud security.", dur: "5 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "aws-data-engineering", cat: "data", code: "ADE", name: "AWS Data Engineering", out: "SQL, PySpark, S3, Glue, Redshift, Athena and Kinesis.", dur: "4 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "azure-data-engineering", cat: "data", code: "AZE", name: "Azure Data Engineering", out: "Data Factory, Databricks, PySpark and Microsoft Fabric.", dur: "4 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "gcp-data-engineering", cat: "data", code: "GDE", name: "GCP Data Engineering", out: "BigQuery, Dataflow, Pub/Sub, Dataproc and Composer.", dur: "3 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "power-automate", cat: "test", code: "PA", name: "Microsoft Power Automate", out: "Cloud flows, desktop RPA, AI Builder and Copilot.", dur: "2 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "linux", cat: "cloud", code: "LX", name: "Linux", out: "Command line, administration, shell scripting and RHCSA path.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "databricks", cat: "data", code: "DBX", name: "Databricks", out: "Spark, Delta Lake and lakehouse pipelines.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "pyspark", cat: "data", code: "PS", name: "PySpark", out: "Spark DataFrames, SQL and streaming with Python.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "snowflake", cat: "data", code: "SF", name: "Snowflake", out: "Architecture, SQL, loading, performance and SnowPro prep.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "google-bigquery", cat: "data", code: "BQ", name: "Google BigQuery", out: "Serverless SQL, optimisation and BigQuery ML.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "azure-synapse", cat: "data", code: "SY", name: "Azure Synapse", out: "SQL pools, Spark pools, pipelines and Power BI.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "dot-net", cat: "dev", code: "NET", name: ".NET", out: "C#, ASP.NET Core, Web APIs and Entity Framework.", dur: "100+ hours", mode: "Online", level: "Beginner" },
  { slug: "selenium", cat: "test", code: "SE", name: "Selenium", out: "WebDriver, TestNG, Page Object Model and CI.", dur: "70+ hours", mode: "Online", level: "Beginner" },
  { slug: "digital-marketing", cat: "marketing", code: "DM", name: "AI Integrated Digital Marketing", out: "SEO, Google Ads, social media and analytics with live projects.", dur: "100+ hours", mode: "Online", level: "Beginner" },
  { slug: "gcp-devops", cat: "cloud", code: "GD", name: "AI Integrated GCP DevOps", out: "GKE, Terraform, Cloud Build and Argo CD with 6 real-time projects.", dur: "3–3.5 months", mode: "Online", level: "Intermediate", badge: "New" },
  { slug: "aws-training-chennai", cat: "cloud", code: "AWS", name: "AWS Training", out: "Hands-on labs and SAA-C03 exam preparation.", dur: "2 months", mode: "Online · Classroom", level: "Intermediate", badge: "New batch" },
  { slug: "generative-ai", cat: "data", code: "AI", name: "Generative AI", out: "LLMs, prompt engineering, RAG and AI apps.", dur: "50 hours", mode: "Online · Classroom", level: "Intermediate", badge: "New" },
  { slug: "ccna-ccnp", cat: "cloud", code: "NW", name: "CCNA & CCNP", out: "Cisco routing, switching, security and automation labs.", dur: "4 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "azure-devops", cat: "cloud", code: "AD", name: "Azure DevOps", out: "Azure Pipelines, Repos, Docker, AKS, Terraform and Bicep.", dur: "1.5 months", mode: "Online", level: "Intermediate" },
  { slug: "salesforce", cat: "cloud", code: "SF", name: "Salesforce", out: "Admin and developer tracks with certification prep.", dur: "80+ hours", mode: "Online · Classroom", level: "Beginner" },
  { slug: "aws-devops-course-chennai", cat: "cloud", code: "DO", name: "AI Integrated AWS DevOps", out: "Linux, Git, Docker, Kubernetes, Jenkins, Terraform.", dur: "4 months", mode: "Online · Classroom", level: "Intermediate" },
];

export const courseBySlug = (slug: string) => ALL_COURSES.find((c) => c.slug === slug);
