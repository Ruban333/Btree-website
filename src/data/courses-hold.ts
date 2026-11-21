import type { Course } from "./courses";

/**
 * Courses on hold: not routed, not in the course list or sitemap.
 * Bring one back with `npm run course:release -- <slug>`.
 */
export const HOLD_COURSES: Course[] = [
  { slug: "mern-stack", cat: "dev", code: "MN", name: "MERN Stack", out: "MongoDB, Express, React and Node with 5 projects.", dur: "3.5 months", mode: "Online", level: "Intermediate" },
  { slug: "microsoft-azure", cat: "cloud", code: "AZ", name: "Microsoft Azure", out: "AZ-104 administration with real deployments.", dur: "2.5 months", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "software-testing", cat: "test", code: "ST", name: "Software Testing", out: "Manual testing, Selenium with Java and API testing.", dur: "3 months", mode: "Online · Classroom", level: "Beginner" },
  { slug: "power-bi", cat: "data", code: "PBI", name: "Power BI", out: "Power Query, DAX, dashboards and PL-300 prep.", dur: "80+ hours", mode: "Online · Classroom", level: "Beginner" },
  { slug: "gcp", cat: "cloud", code: "GCP", name: "Google Cloud (GCP)", out: "Compute Engine, GKE, networking and Associate Cloud Engineer prep.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "devops", cat: "cloud", code: "DO", name: "DevOps", out: "CI/CD, Docker, Kubernetes, Terraform, Ansible and monitoring.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "kubernetes", cat: "cloud", code: "K8", name: "Kubernetes", out: "Pods, services, Helm, scaling and CKA prep.", dur: "30 hours", mode: "Online", level: "Intermediate" },
  { slug: "terraform", cat: "cloud", code: "TF", name: "Terraform", out: "Infrastructure as code on AWS, Azure and GCP.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "teradata", cat: "data", code: "TD", name: "Teradata", out: "Architecture, SQL, load utilities and tuning.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "informatica", cat: "data", code: "IN", name: "Informatica", out: "PowerCenter ETL, workflows, SCD and cloud integration.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "ab-initio", cat: "data", code: "AB", name: "Ab Initio", out: "GDE, Co>Operating System and parallel graphs.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "amazon-redshift", cat: "data", code: "RS", name: "Amazon Redshift", out: "Table design, loading, tuning and Spectrum.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "ibm-db2", cat: "data", code: "DB2", name: "IBM DB2", out: "SQL, administration, stored procedures and tuning.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "oracle", cat: "data", code: "OR", name: "Oracle", out: "SQL, PL/SQL and database design.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "advanced-sql", cat: "data", code: "SQL", name: "Advanced SQL", out: "Window functions, CTEs, joins and query optimisation.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "tableau", cat: "data", code: "TB", name: "Tableau", out: "Dashboards, calculations, maps and data storytelling.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "r-programming", cat: "data", code: "R", name: "R Programming", out: "Data wrangling, ggplot2, statistics and modelling.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "uipath", cat: "test", code: "UP", name: "UiPath", out: "Studio, selectors, REFramework and Orchestrator.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "blue-prism", cat: "test", code: "BP", name: "Blue Prism", out: "Process and Object Studio, work queues and AD01 prep.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "automation-anywhere", cat: "test", code: "AA", name: "Automation Anywhere", out: "Automation 360, task bots and IQ Bot.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "mean-stack", cat: "dev", code: "ME", name: "MEAN Stack", out: "MongoDB, Express, Angular and Node.js with a portfolio app.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "node-js", cat: "dev", code: "NJ", name: "Node.js", out: "Express, REST APIs, databases and authentication.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "react-js", cat: "dev", code: "RJ", name: "React JS", out: "Components, hooks, routing and API integration.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "angular", cat: "dev", code: "NG", name: "Angular", out: "TypeScript, components, services, routing and forms.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "advanced-java", cat: "dev", code: "AJ", name: "Advanced Java", out: "JDBC, Servlets, JSP and Spring Boot.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate" },
  { slug: "flutter", cat: "dev", code: "FL", name: "Flutter", out: "Dart, widgets, state management, APIs and Firebase.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "android", cat: "dev", code: "AN", name: "Android", out: "Kotlin, Jetpack and Play Store publishing.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "mobile-appium", cat: "test", code: "AP", name: "Appium", out: "Mobile test automation for Android and iOS.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "uft", cat: "test", code: "UFT", name: "UFT (QTP)", out: "VBScript, object repository, data-driven testing and frameworks.", dur: "[X months]", mode: "Online · Classroom", level: "Beginner" },
  { slug: "forward-deployed-engineer", cat: "dev", code: "FDE", name: "Forward Deployed Engineer", out: "Build, integrate and deploy software and AI solutions with customers.", dur: "[X months]", mode: "Online · Classroom", level: "Intermediate", badge: "New" },
  { slug: "azure-administrator-devops", cat: "cloud", code: "AD", name: "Azure Administrator (AZ-104) + Azure DevOps", out: "AZ-104 administration plus Azure DevOps pipelines, AKS and Terraform.", dur: "2–3 months", mode: "Online · Classroom", level: "Intermediate", badge: "New" },
  { slug: "linux-docker-kubernetes-rke2", cat: "cloud", code: "RK", name: "Linux, Docker & Kubernetes (RKE2)", out: "Linux, Docker, Kubernetes and a self-managed RKE2 cluster project.", dur: "50 hours", mode: "Online · Classroom", level: "Intermediate", badge: "New" },
  { slug: "ai-full-stack-react-node", cat: "dev", code: "FS", name: "AI-Powered Full Stack (React.js + Node.js)", out: "React, Node.js, Express and AI integration with 5+ real-time projects.", dur: "3 months", mode: "Online", level: "Beginner", badge: "New" },
  { slug: "playwright-typescript-ai", cat: "test", code: "PT", name: "AI Integrated Playwright with TypeScript", out: "Playwright with TypeScript, AI agents, CI/CD and 2 capstone projects.", dur: "2.5–3 months", mode: "Online · Classroom", level: "Intermediate", badge: "New" },
  { slug: "ui-ux-product-design", cat: "design", code: "PD", name: "AI Integrated UI/UX & Product Design", out: "UI/UX, design systems and AI-powered research with 2 real-time app projects.", dur: "80+ hours", mode: "Online · Classroom", level: "Beginner", badge: "New" },
  { slug: "graphic-designing", cat: "design", code: "GR", name: "AI Integrated Graphic Designing", out: "Illustrator, Photoshop, Canva, CorelDRAW and InDesign with AI design tools.", dur: "80+ hours", mode: "Online", level: "Beginner", badge: "New" },
];
