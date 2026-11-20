import type { CoursePage } from "../course-types";
import awsDataEngineering from "./aws-data-engineering";
import awsDevopsCourseChennai from "./aws-devops-course-chennai";
import azureDataEngineering from "./azure-data-engineering";
import azureDevops from "./azure-devops";
import ccnaCcnp from "./ccna-ccnp";
import cyberSecurity from "./cyber-security";
import gcpDataEngineering from "./gcp-data-engineering";
import powerAutomate from "./power-automate";
import awsTrainingChennai from "./aws-training-chennai";
import dataAnalytics from "./data-analytics";
import generativeAi from "./generative-ai";
import playwrightAutomation from "./playwright-automation";
import powerBi from "./power-bi";
import salesforce from "./salesforce";
import uiUxDesign from "./ui-ux-design";
// @course-imports (npm run course:new adds lines here)

/** Every course that has a full page. Add a course with: npm run course:new -- <slug> "<Name>" */
const ALL: CoursePage[] = [
  awsDataEngineering,
  awsDevopsCourseChennai,
  azureDataEngineering,
  azureDevops,
  ccnaCcnp,
  cyberSecurity,
  gcpDataEngineering,
  powerAutomate,
  awsTrainingChennai,
  dataAnalytics,
  generativeAi,
  playwrightAutomation,
  powerBi,
  salesforce,
  uiUxDesign,
  // @course-list
];

export const COURSE_PAGES: Record<string, CoursePage> = Object.fromEntries(ALL.map((c) => [c.slug, c]));
