import type { CoursePage } from "../course-types";
import awsDataEngineering from "./aws-data-engineering";
import azureDataEngineering from "./azure-data-engineering";
import cyberSecurity from "./cyber-security";
import gcpDataEngineering from "./gcp-data-engineering";
import powerAutomate from "./power-automate";
import dataAnalytics from "./data-analytics";
import playwrightAutomation from "./playwright-automation";
import uiUxDesign from "./ui-ux-design";
import linux from "./linux";
import databricks from "./databricks";
import pyspark from "./pyspark";
import snowflake from "./snowflake";
import googleBigquery from "./google-bigquery";
import azureSynapse from "./azure-synapse";
import dataScienceMachineLearning from "./data-science-machine-learning";
import pythonFullStack from "./python-full-stack";
import javaFullStack from "./java-full-stack";
import dotNet from "./dot-net";
import selenium from "./selenium";
import digitalMarketing from "./digital-marketing";
import gcpDevops from "./gcp-devops";
import awsTrainingChennai from "./aws-training-chennai";
import generativeAi from "./generative-ai";
import ccnaCcnp from "./ccna-ccnp";
import azureDevops from "./azure-devops";
import salesforce from "./salesforce";
import awsDevopsCourseChennai from "./aws-devops-course-chennai";
// @course-imports (npm run course:new adds lines here)

/** Every course that has a full page. Add a course with: npm run course:new -- <slug> "<Name>" */
const ALL: CoursePage[] = [
  awsDataEngineering,
  azureDataEngineering,
  cyberSecurity,
  gcpDataEngineering,
  powerAutomate,
  dataAnalytics,
  playwrightAutomation,
  uiUxDesign,
  linux,
  databricks,
  pyspark,
  snowflake,
  googleBigquery,
  azureSynapse,
  dataScienceMachineLearning,
  pythonFullStack,
  javaFullStack,
  dotNet,
  selenium,
  digitalMarketing,
  gcpDevops,
  awsTrainingChennai,
  generativeAi,
  ccnaCcnp,
  azureDevops,
  salesforce,
  awsDevopsCourseChennai,
  // @course-list
];

export const COURSE_PAGES: Record<string, CoursePage> = Object.fromEntries(ALL.map((c) => [c.slug, c]));
