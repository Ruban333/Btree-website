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
import microsoftAzure from "./microsoft-azure";
import gcp from "./gcp";
import devops from "./devops";
import kubernetes from "./kubernetes";
import terraform from "./terraform";
import linux from "./linux";
import databricks from "./databricks";
import pyspark from "./pyspark";
import snowflake from "./snowflake";
import teradata from "./teradata";
import informatica from "./informatica";
import abInitio from "./ab-initio";
import googleBigquery from "./google-bigquery";
import amazonRedshift from "./amazon-redshift";
import azureSynapse from "./azure-synapse";
import ibmDb2 from "./ibm-db2";
import oracle from "./oracle";
import advancedSql from "./advanced-sql";
import tableau from "./tableau";
import dataScienceMachineLearning from "./data-science-machine-learning";
import rProgramming from "./r-programming";
import uipath from "./uipath";
import bluePrism from "./blue-prism";
import automationAnywhere from "./automation-anywhere";
import mernStack from "./mern-stack";
import meanStack from "./mean-stack";
import pythonFullStack from "./python-full-stack";
import javaFullStack from "./java-full-stack";
import dotNet from "./dot-net";
import nodeJs from "./node-js";
import reactJs from "./react-js";
import angular from "./angular";
import advancedJava from "./advanced-java";
import flutter from "./flutter";
import android from "./android";
import mobileAppium from "./mobile-appium";
import selenium from "./selenium";
import uft from "./uft";
import digitalMarketing from "./digital-marketing";
import forwardDeployedEngineer from "./forward-deployed-engineer";
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
  microsoftAzure,
  gcp,
  devops,
  kubernetes,
  terraform,
  linux,
  databricks,
  pyspark,
  snowflake,
  teradata,
  informatica,
  abInitio,
  googleBigquery,
  amazonRedshift,
  azureSynapse,
  ibmDb2,
  oracle,
  advancedSql,
  tableau,
  dataScienceMachineLearning,
  rProgramming,
  uipath,
  bluePrism,
  automationAnywhere,
  mernStack,
  meanStack,
  pythonFullStack,
  javaFullStack,
  dotNet,
  nodeJs,
  reactJs,
  angular,
  advancedJava,
  flutter,
  android,
  mobileAppium,
  selenium,
  uft,
  digitalMarketing,
  forwardDeployedEngineer,
  // @course-list
];

export const COURSE_PAGES: Record<string, CoursePage> = Object.fromEntries(ALL.map((c) => [c.slug, c]));
