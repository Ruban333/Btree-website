import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "aws-training-chennai",
  name: "AWS Training",
  track: "Cloud & DevOps",
  seo: {
    title: "AWS Training in Chennai with Certification & Placement | BTree",
    description:
      "Hands-on AWS training in Chennai with live console labs and Solutions Architect exam prep. Classroom & online batches. Book a free demo.",
  },
  hero: {
    h1: "AWS training in Chennai",
    lead: "Learn to build and run applications on Amazon Web Services. This AWS course in Chennai covers compute, storage, networking, databases, and security hands-on in a real AWS console, and prepares you for the AWS Certified Solutions Architect – Associate exam. Classroom and live online batches, weekday and weekend.",
    proof: {
      score: "5.0",
      detail: "from [N] Google reviews · [N] learners trained",
    },
    syllabusButton: "Download AWS syllabus (PDF)",
    formTitle: "Talk to an AWS advisor",
    formNote: "Call [phone] or request a callback. Free counselling and a demo class.",
    formButton: "Request a callback",
  },
  glance: {
    title: "How long is the AWS course in Chennai?",
    lead: "The course runs about **55+ hours (classroom) or 45+ hours (online) over [X] months**, with console labs throughout.",
    columns: 3,
    batches: [
      {
        name: "Weekday batch",
        duration: "[X] months",
        schedule: ["[timings]"],
        note: "For freshers or full-time learners",
      },
      {
        name: "Weekend batch",
        duration: "[X] months",
        schedule: ["Saturday and Sunday", "8:00–11:00 PM IST"],
        note: "Fits around a full-time job",
      },
      {
        name: "Fast-track batch",
        duration: "[X] months",
        schedule: ["[timings]"],
        note: "For learners who want to finish sooner",
      },
    ],
  },
  whatis: {
    title: "What is AWS?",
    definition:
      "**AWS (Amazon Web Services)** is the world's largest cloud platform. Instead of buying servers, companies rent computing, storage, databases, and networking from AWS and pay for what they use. This course teaches you to design, deploy, and secure applications on it.",
    image: {
      alt: "Data centre server racks like those that run AWS cloud services",
    },
  },
  outcomes: {
    title: "What will you learn in the AWS course?",
    lead: "You'll be able to architect and run a secure, scalable application on AWS.",
    bullets: [
      "Cloud concepts and the AWS global infrastructure",
      "EC2, Lambda, and compute options",
      "S3, EBS, and storage",
      "VPC and networking",
      "RDS, DynamoDB, and databases",
      "IAM, security, and encryption",
      "Scaling, load balancing, and high availability",
      "Monitoring with CloudWatch",
      "Infrastructure as code and automation basics",
      "Cost management and the Well-Architected Framework",
    ],
  },
  who: {
    title: "Who should join this AWS course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "Targeting cloud and DevOps careers.",
      },
      {
        title: "System and network admins",
        text: "Moving infrastructure to the cloud.",
      },
      {
        title: "Developers",
        text: "Who want to deploy and scale their own apps.",
      },
      {
        title: "Support and IT professionals",
        text: "Upskilling into cloud roles.",
      },
    ],
  },
  curriculum: {
    title: "What is in the AWS syllabus?",
    lead: "10 modules aligned to the Solutions Architect – Associate blueprint, about 55+ hours of hands-on labs.",
    list: [
      "Cloud fundamentals and AWS global infrastructure",
      "IAM and account security",
      "EC2 and compute",
      "Storage: S3, EBS, EFS",
      "VPC and networking",
      "Databases: RDS and DynamoDB",
      "Scaling, load balancing, and high availability",
      "Monitoring, logging, and automation",
      "Serverless with Lambda and API Gateway",
      "Cost, Well-Architected Framework, certification, and interview prep",
    ],
  },
  tools: {
    title: "Which tools and services will you learn?",
    items: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "RDS",
      "DynamoDB",
      "Lambda",
      "CloudWatch",
      "CloudFormation",
      "Elastic Load Balancing",
      "Auto Scaling",
      "AWS CLI",
    ],
  },
  projects: {
    title: "What projects will you build in AWS training?",
    lead: "Each project runs in your own AWS account and goes on your GitHub.",
    items: [
      {
        title: "Host a scalable web app",
        text: "Deploy on EC2 behind a load balancer with auto-scaling.",
        imageAlt: "Server racks hosting a scalable web application",
      },
      {
        title: "Serverless application",
        text: "Build an app with Lambda, API Gateway, and DynamoDB.",
        imageAlt: "Code for a serverless application with Lambda and DynamoDB",
      },
      {
        title: "Secure multi-tier architecture",
        text: "Design a VPC with public and private subnets and IAM controls.",
        imageAlt: "Network cabling representing a secure multi-tier VPC",
      },
    ],
  },
  cert: {
    title: "Which certification does the AWS course prepare you for?",
    text: "The course maps to AWS Certified Solutions Architect – Associate (SAA-C03), with guidance on Cloud Practitioner as a starting point. You also receive a BTree course completion certificate. The AWS exam fee is paid separately to AWS.",
    imageAlt: "BTree AWS course completion certificate",
    caption: "Sample BTree AWS course completion certificate.",
  },
  jobs: {
    title: "What jobs and salary can you get after AWS training in Chennai?",
    lead: "AWS skills are among the most in-demand in Chennai's IT and GCC market.",
    roles: [
      {
        role: "Cloud Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "IT services, product firms",
      },
      {
        role: "AWS Solutions Architect (junior)",
        salary: "[₹X–₹Y LPA]",
        employers: "Enterprises, consulting",
      },
      {
        role: "Cloud / DevOps Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "SaaS, startups",
      },
      {
        role: "Cloud Support Engineer",
        salary: "[₹X–₹Y LPA]",
        employers: "Managed service providers",
      },
    ],
    note: "Source: [placement data or AmbitionBox, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why choose BTree for AWS training in Chennai?",
    bullets: [
      "Trainers who run production workloads on AWS, not just slides",
      "Every concept practised in a live AWS console",
      "Real architecture projects for your portfolio and GitHub",
      "Certification guidance for Solutions Architect – Associate",
      "Placement support: resume help, mock interviews, and hiring introductions",
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] AWS Training batch.",
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
    title: "AWS course FAQ (Chennai)",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "Do I need coding experience to learn AWS?",
        a: "No. Basic comfort with computers and networks is enough to start. Some scripting helps for automation later, and the course builds it up.",
      },
      {
        q: "Do I need my own AWS account?",
        a: "We guide you through setting up an AWS free-tier account so you can practise safely without large bills.",
      },
      {
        q: "Which AWS certification should I take first?",
        a: "Most learners start with Cloud Practitioner or go straight for Solutions Architect – Associate; we help you pick.",
      },
      {
        q: "Is this classroom or online?",
        a: "Both, with the same labs and syllabus.",
      },
      {
        q: "How long does it take to get a cloud job?",
        a: "Most learners are interview-ready in [X] months after finishing the labs and a certification.",
      },
      {
        q: "What are the fees for the AWS course in Chennai?",
        a: "The AWS course fee is ₹49,000, currently ₹44,100 with the ongoing offer, with a no-cost EMI option. Contact us for the latest batch pricing.",
      },
      {
        q: "Do you provide placement support after the AWS course?",
        a: "Yes. BTree gives placement support until you are placed: resume building, mock interviews, free aptitude and soft-skills training, and introductions to hiring partners. Support continues after the course ends.",
      },
      {
        q: "Can I access the AWS course material after the course?",
        a: "Yes. You get lifetime access to the BTree learning portal, including recorded sessions, notes, and project files, so you can revise any topic or catch up on a missed class.",
      },
      {
        q: "Who are the AWS trainers at BTree?",
        a: "Working industry professionals with years of hands-on project and mentoring experience. They teach from real projects and share the interview questions their own teams ask when hiring.",
      },
      {
        q: "Is there support if I have doubts during the course?",
        a: "Yes. You get doubt-clearing support by email, chat, and social media, plus mentor support during labs and projects. Recorded sessions let you rewatch any topic.",
      },
    ],
  },
  cta: {
    title: "Try a free AWS demo class",
    lead: "Spin up your first server in a live AWS console before you enrol.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "AWS DevOps course in Chennai",
      href: "/courses/aws-devops-course-chennai",
    },
    {
      label: "AWS data engineering training in Chennai",
      href: "/courses/aws-data-engineering",
    },
    {
      label: "Azure DevOps training in Chennai",
      href: "/courses/azure-devops",
    },
    {
      label: "AWS Solutions Architect exam guide",
      href: "#",
    },
    {
      label: "AWS interview questions",
      href: "#",
    },
    {
      label: "Cloud engineer salary in Chennai",
      href: "#",
    },
  ],
  areas:
    "**AWS training across Chennai:** Adyar, Guindy, Nandanam, Poonamallee, T. Nagar, Anna Nagar, K.K. Nagar, OMR, ECR, Mylapore, Nungambakkam, Velachery, Vadapalani, Royapettah, Porur, Triplicane. Classroom batches run at our Perungudi centre; every batch is also live online.",
};

export default course;
