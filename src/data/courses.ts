export type CourseCat = "dev" | "cloud" | "data" | "test" | "design";

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
];

export const courseBySlug = (slug: string) => ALL_COURSES.find((c) => c.slug === slug);
