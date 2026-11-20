import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "cyber-security",
  name: "Cyber security",
  track: "Networking & Security",
  seo: {
    title: "Cyber Security Course in Chennai with Placement | BTree",
    description:
      "Cyber security course in Chennai: ethical hacking, SOC and SIEM, web app security and cloud security in 5 months of live labs. Prepare for Security+ and CEH.",
  },
  hero: {
    h1: "Cyber security course in Chennai",
    lead: "The BTree cyber security course in Chennai teaches you to protect, test and monitor networks, systems and web applications. In 5 months of live, hands-on labs you learn ethical hacking, SOC analysis with a SIEM and cloud security, prepare for CompTIA Security+ and CEH, and get placement support for security roles.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] cyber security learners placed in 2026",
    },
    syllabusButton: "Download cyber security syllabus (PDF)",
    formTitle: "Talk to a cyber security advisor",
  },
  glance: {
    title: "How long is the cyber security course?",
    lead: "The cyber security course takes **5 months, about 180 hours** of live classes and labs.",
    batches: [
      { name: "Duration", duration: "5 months" },
      { name: "Hours of learning", duration: "180 hours" },
    ],
  },
  whatis: {
    title: "What is cyber security?",
    definition:
      "**Cyber security** is the practice of protecting computers, networks, applications and data from attacks. Security professionals find weaknesses before attackers do (ethical hacking and penetration testing), watch for attacks as they happen (security operations) and respond when something goes wrong (incident response).",
    why: "Every company that stores customer data needs these skills, and India's Digital Personal Data Protection Act raises the stakes, so SOC analyst and security engineer roles keep growing in Chennai's banks, IT services firms and global capability centres.",
    pipeline: {
      label: "The six functions of the NIST Cybersecurity Framework 2.0",
      caption: "The course follows the NIST Cybersecurity Framework 2.0.",
      steps: [
        {
          label: "Govern",
          tools: "Policy, risk, compliance",
        },
        {
          label: "Identify",
          tools: "Assets, vulnerabilities",
        },
        {
          label: "Protect",
          tools: "Hardening, IAM, firewalls",
        },
        {
          label: "Detect",
          tools: "SIEM, log analysis",
        },
        {
          label: "Respond",
          tools: "Incident response playbooks",
        },
        {
          label: "Recover",
          tools: "Backups, lessons learned",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the cyber security course",
    lead: "By the end you can test, monitor and defend a small company network and explain what you found.",
    items: [
      {
        title: "Understand networks and protocols",
        text: "TCP/IP, DNS, HTTP, firewalls and packet analysis.",
      },
      {
        title: "Secure Linux and Windows",
        text: "Hardening, users, permissions, logs and Active Directory basics.",
      },
      {
        title: "Hack ethically",
        text: "Recon, scanning, enumeration and exploitation with Kali Linux.",
      },
      {
        title: "Test web applications",
        text: "OWASP Top 10 with Burp Suite and OWASP ZAP.",
      },
      {
        title: "Work in a SOC",
        text: "SIEM alert triage with Splunk, Wazuh and Microsoft Sentinel.",
      },
      {
        title: "Respond to incidents",
        text: "Playbooks, MITRE ATT&CK mapping and forensics basics.",
      },
      {
        title: "Secure the cloud",
        text: "IAM, misconfigurations and logging on AWS and Azure.",
      },
      {
        title: "Pass security interviews",
        text: "Scenario questions, a VAPT report portfolio and a reviewed resume.",
      },
    ],
  },
  who: {
    title: "Who should join this cyber security course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "Any engineering or science graduate; networking and Linux are taught from scratch.",
      },
      {
        title: "Network and system admins",
        text: "Move into security engineering or SOC roles.",
      },
      {
        title: "Developers and testers",
        text: "Learn secure coding and application security testing.",
      },
      {
        title: "IT support engineers",
        text: "Turn support experience into an L1 SOC analyst role.",
      },
    ],
  },
  curriculum: {
    title: "Cyber security course syllabus",
    lead: "9 modules and a capstone, about 180 hours of live classes and labs.",
    modules: [
      {
        title: "Networking and security fundamentals",
        sessions: "8 sessions",
        bullets: [
          "TCP/IP, ports, protocols and Wireshark",
          "Firewalls, IDS and IPS",
          "Security concepts: CIA triad, risk, threats",
        ],
      },
      {
        title: "Linux and Windows for security",
        sessions: "7 sessions",
        bullets: [
          "Linux command line and Bash",
          "Windows, Active Directory and PowerShell basics",
          "System hardening and logging",
        ],
      },
      {
        title: "Cryptography, IAM and security controls",
        sessions: "5 sessions",
        bullets: ["Encryption, hashing, PKI and TLS", "Identity and access management, MFA"],
      },
      {
        title: "Ethical hacking and penetration testing",
        sessions: "14 sessions",
        bullets: [
          "Reconnaissance and OSINT",
          "Scanning with Nmap and vulnerability assessment with Nessus",
          "Exploitation with Metasploit, password attacks",
          "Writing a VAPT report",
        ],
      },
      {
        title: "Web application security",
        sessions: "10 sessions",
        bullets: ["OWASP Top 10", "Burp Suite and OWASP ZAP", "SQL injection, XSS, broken access control"],
      },
      {
        title: "Security operations (SOC)",
        sessions: "10 sessions",
        bullets: [
          "SIEM: Splunk, Wazuh, Microsoft Sentinel",
          "Log analysis and alert triage",
          "Threat intelligence and MITRE ATT&CK",
        ],
      },
      {
        title: "Incident response and digital forensics",
        sessions: "6 sessions",
        bullets: ["Incident response lifecycle and playbooks", "Disk and memory forensics basics with Autopsy"],
      },
      {
        title: "Cloud security, GRC and compliance",
        sessions: "6 sessions",
        bullets: ["AWS and Azure security basics", "ISO 27001, NIST CSF 2.0 and India's DPDP Act"],
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "6 sessions",
        bullets: ["Red team and blue team capstone", "Security+ and CEH practice tests, mock interviews"],
      },
    ],
  },
  tools: {
    title: "Security tools you'll use",
    items: [
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Metasploit",
      "Burp Suite",
      "OWASP ZAP",
      "Nessus",
      "Splunk",
      "Wazuh",
      "Microsoft Sentinel",
      "Hashcat",
      "Autopsy",
      "MITRE ATT&CK",
    ],
  },
  projects: {
    title: "Cyber security projects you'll build",
    lead: "Every project runs in an isolated lab you are authorised to attack, and ends in a written report for your portfolio.",
    items: [
      {
        title: "Penetration test of a lab network",
        text: "Find and exploit weaknesses in a vulnerable lab network, then write a client-ready VAPT report.",
        stack: "Kali · Nmap · Nessus · Metasploit",
        imageAlt: "Terminal output from a penetration test on a lab network",
      },
      {
        title: "Web application security assessment",
        text: "Test OWASP Juice Shop against the OWASP Top 10 and recommend fixes.",
        stack: "Burp Suite · OWASP ZAP · OWASP Top 10",
        imageAlt: "Web application security assessment using Burp Suite",
      },
      {
        title: "Build a mini SOC",
        text: "Collect logs into a SIEM, write detection rules mapped to MITRE ATT&CK and triage alerts.",
        stack: "Wazuh · Splunk · MITRE ATT&CK",
        imageAlt: "Security operations dashboard showing SIEM alerts",
      },
    ],
  },
  cert: {
    title: "Cyber security certification",
    text: "You earn a BTree cyber security course certificate and prepare for CompTIA Security+ and EC-Council Certified Ethical Hacker (CEH). CompTIA scheduled Security+ SY0-801 for release in November 2026, and SY0-701 stays bookable in English until 11 June 2027; the course covers both.",
    imageAlt: "BTree cyber security course completion certificate",
    caption: "Sample BTree cyber security course completion certificate.",
  },
  jobs: {
    title: "Jobs and salary after the cyber security course",
    lead: "Cyber security learners usually start as L1 SOC analysts or junior VAPT testers. Typical Chennai salaries are below.",
    roles: [
      {
        role: "SOC analyst (L1)",
        salary: "₹[X–Y] LPA",
        employers: "Managed security providers, GCCs",
      },
      {
        role: "Security analyst",
        salary: "₹[X–Y] LPA",
        employers: "Banks, fintech, insurance",
      },
      {
        role: "VAPT / penetration tester (junior)",
        salary: "₹[X–Y] LPA",
        employers: "Security consultancies",
      },
      {
        role: "Cloud security associate",
        salary: "₹[X–Y] LPA",
        employers: "IT services, cloud partners",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn cyber security at BTree",
    items: [
      {
        title: "Safe, legal attack labs",
        text: "You practise on isolated lab networks built for hacking, never on real systems.",
      },
      {
        title: "Trainers who defend networks",
        text: "Taught by working security consultants and SOC leads with [N]+ years of experience.",
      },
      {
        title: "Small live batches",
        text: "Up to [N] learners per batch, recorded sessions and weekly CTF practice.",
      },
      {
        title: "Placement until hired",
        text: "Resume review, mock interviews and referrals to hiring partners, with no end date.",
      },
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] Cyber security batch.",
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
    title: "Cyber security course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the cyber security course fee in Chennai?",
        a: "The BTree cyber security course fee is ₹[FEE] for the full 5-month programme, with no-cost EMI from ₹[EMI] a month. The fee covers live classes, hacking and SOC labs, 3 projects, the course certificate, Security+ and CEH practice tests and placement support.",
      },
      {
        q: "Can a fresher or non-IT graduate learn cyber security?",
        a: "Yes. The course starts with networking, Linux and Windows basics, so no security experience is needed. Freshers usually start as L1 SOC analysts; plan for 8–10 hours a week of lab practice outside class.",
      },
      {
        q: "Is coding required for cyber security?",
        a: "Not to start. SOC and VAPT roles need scripting more than programming, so the course teaches Bash, PowerShell and basic Python for automation. Deeper coding helps later for application security and exploit development.",
      },
      {
        q: "Which certification is better first: Security+ or CEH?",
        a: "Security+ is the better first certification for most learners because it covers defence, operations and governance broadly. CEH is useful if you want offensive roles such as VAPT. The course prepares you for both.",
      },
      {
        q: "Is ethical hacking legal?",
        a: "Yes, when you have written permission from the owner of the system. Testing any system without permission is illegal in India under the IT Act. In the course you only attack lab systems built for practice.",
      },
      {
        q: "How long does it take to learn cyber security?",
        a: "The BTree course takes 5 months, about 180 hours of live classes and labs. Most learners are ready for L1 SOC interviews by the end.",
      },
      {
        q: "What is the salary of a cyber security analyst in Chennai?",
        a: "Entry-level SOC and security analysts in Chennai typically earn ₹[X–Y] LPA, rising to ₹[X–Y] LPA with 3 years of experience ([source, year]). Certifications such as Security+ and CEH usually lead to higher offers.",
      },
      {
        q: "Is the cyber security course available online?",
        a: "Yes. The course runs as live online batches with cloud labs, and as classroom batches at the BTree centre in Perungudi, Chennai, with the same trainers, labs, recordings and placement support.",
      },
    ],
  },
  cta: {
    title: "Try a free cyber security demo class",
    lead: "Watch a live scan find a real weakness in a lab network.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "CCNA and CCNP course in Chennai",
      href: "/courses/ccna-ccnp",
    },
    {
      label: "Azure DevOps course in Chennai",
      href: "/courses/azure-devops",
    },
    {
      label: "AWS DevOps course in Chennai",
      href: "/courses/aws-devops-course-chennai",
    },
    {
      label: "Cyber security roadmap for freshers",
      href: "#",
    },
    {
      label: "SOC analyst interview questions",
      href: "#",
    },
    {
      label: "Security+ vs CEH: which first?",
      href: "#",
    },
    {
      label: "Cyber security salary in Chennai",
      href: "#",
    },
  ],
};

export default course;
