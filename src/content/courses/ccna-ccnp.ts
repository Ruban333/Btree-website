import type { CoursePage } from "../course-types";

const course: CoursePage = {
  slug: "ccna-ccnp",
  name: "CCNA & CCNP",
  track: "Networking",
  seo: {
    title: "CCNA & CCNP Course in Chennai with Placement | BTree",
    description:
      "CCNA and CCNP course in Chennai: 4 months of live Cisco labs in routing, switching, security and automation. Prep for 200-301 and ENCOR 350-401.",
  },
  hero: {
    h1: "CCNA and CCNP course in Chennai",
    lead: "The BTree CCNA and CCNP course in Chennai takes you from networking basics to enterprise routing, switching and security on Cisco devices. In 4 months of live classes and Cisco labs you configure real networks, prepare for the CCNA 200-301 and CCNP Enterprise exams, and get placement support for network engineer roles.",
    proof: {
      score: "[4.9]",
      detail: "from [N] Google reviews · [N] CCNA and CCNP learners placed in 2026",
    },
    syllabusButton: "Download CCNA and CCNP syllabus (PDF)",
    formTitle: "Talk to a CCNA advisor",
  },
  glance: {
    title: "How long is the CCNA and CCNP course?",
    lead: "The combined course takes **4 months, about 150 hours** of live classes and Cisco labs: roughly 2 months for CCNA and 2 months for CCNP Enterprise. You can also join the CCNA part on its own.",
    batches: [
      {
        name: "Weekday batch",
        duration: "4 months",
        schedule: ["Monday to Friday", "2 hours a day"],
        note: "For freshers or full-time learners",
      },
      {
        name: "Weekend batch",
        duration: "5 months",
        schedule: ["Saturday and Sunday", "4 hours a day"],
        note: "Fits around a support or NOC job",
      },
      {
        name: "CCNA only",
        duration: "2 months",
        schedule: ["Weekday or weekend", "batches"],
        note: "Start with the associate level",
      },
    ],
  },
  whatis: {
    title: "What are CCNA and CCNP?",
    definition:
      "**CCNA** (Cisco Certified Network Associate) is Cisco's entry-level networking certification, earned by passing one exam, 200-301. **CCNP Enterprise** is the professional level: a core exam, 350-401 ENCOR, plus one concentration exam such as 300-410 ENARSI.",
    why: "Network engineers design, configure and troubleshoot the routers, switches, firewalls and VPNs that every office, data centre and cloud connection depends on, which is why CCNA is still the most requested certification in network job posts.",
    pipeline: {
      label: "The path from CCNA to CCNP",
      caption: "What you learn, in the order you learn it.",
      steps: [
        {
          label: "Address",
          tools: "IPv4, IPv6, subnetting",
        },
        {
          label: "Switch",
          tools: "VLANs, STP, EtherChannel",
        },
        {
          label: "Route",
          tools: "OSPF, EIGRP, BGP",
        },
        {
          label: "Secure",
          tools: "ACLs, AAA, IPsec VPN",
        },
        {
          label: "Design",
          tools: "SD-WAN, SD-Access, VRF",
        },
        {
          label: "Automate",
          tools: "Python, Ansible, RESTCONF",
          highlight: true,
        },
      ],
    },
  },
  outcomes: {
    title: "What you'll learn in the CCNA and CCNP course",
    lead: "By the end you can design, configure, secure and troubleshoot a multi-site enterprise network on your own.",
    items: [
      {
        title: "Subnet any network",
        text: "IPv4 and IPv6 addressing, VLSM and route summarisation.",
      },
      {
        title: "Build switched networks",
        text: "VLANs, trunking, Rapid PVST+, EtherChannel and port security.",
      },
      {
        title: "Configure routing",
        text: "Static routes, OSPFv2 and OSPFv3, EIGRP and BGP.",
      },
      {
        title: "Secure the network",
        text: "ACLs, AAA with TACACS+ and RADIUS, and IPsec VPNs.",
      },
      {
        title: "Design enterprise networks",
        text: "VRF, GRE, DMVPN, SD-WAN and SD-Access.",
      },
      {
        title: "Troubleshoot like an engineer",
        text: "show and debug commands, Wireshark and a structured method.",
      },
      {
        title: "Automate network tasks",
        text: "Python, Netmiko, Ansible and RESTCONF/NETCONF.",
      },
      {
        title: "Pass network interviews",
        text: "Scenario questions, lab tests and a reviewed resume.",
      },
    ],
  },
  who: {
    title: "Who should join this CCNA course?",
    items: [
      {
        title: "Freshers and graduates",
        text: "ECE, EEE, CSE, IT and diploma graduates who want a networking career; basics are taught from scratch.",
      },
      {
        title: "Desktop and hardware engineers",
        text: "Move from desktop support to network engineering.",
      },
      {
        title: "NOC and L1 engineers",
        text: "Get the CCNP depth you need for L2 and L3 roles.",
      },
      {
        title: "System administrators",
        text: "Add routing, switching and security skills to your server experience.",
      },
    ],
  },
  curriculum: {
    title: "CCNA and CCNP syllabus",
    lead: "9 modules covering CCNA 200-301 and CCNP ENCOR and ENARSI, about 150 hours of live classes and labs.",
    modules: [
      {
        title: "CCNA: Networking fundamentals",
        sessions: "8 sessions",
        bullets: [
          "OSI and TCP/IP models, cabling and interfaces",
          "IPv4 and IPv6 addressing",
          "Subnetting and VLSM practice",
        ],
      },
      {
        title: "CCNA: Switching",
        sessions: "8 sessions",
        bullets: [
          "VLANs, trunking and inter-VLAN routing",
          "STP and Rapid PVST+, root, BPDU and loop guard",
          "EtherChannel and port security",
        ],
      },
      {
        title: "CCNA: Routing",
        sessions: "8 sessions",
        bullets: ["Static and default routes", "OSPFv2 and OSPFv3", "First-hop redundancy with HSRP and VRRP"],
      },
      {
        title: "CCNA: IP services and security",
        sessions: "7 sessions",
        bullets: [
          "DHCP, NAT, SNMP and Syslog",
          "Standard and extended ACLs",
          "AAA with TACACS+ and RADIUS, wireless basics",
        ],
      },
      {
        title: "CCNA: Revision and 200-301 practice tests",
        sessions: "3 sessions",
        bullets: ["Timed practice tests", "Lab-based revision of weak areas"],
      },
      {
        title: "CCNP ENCOR: Enterprise core",
        sessions: "12 sessions",
        bullets: [
          "Enterprise architecture and virtualisation: VRF, GRE, IPsec",
          "Advanced OSPF, EIGRP and BGP",
          "SD-WAN and SD-Access",
          "Security and assurance",
        ],
      },
      {
        title: "CCNP ENARSI: Advanced routing and services",
        sessions: "10 sessions",
        bullets: [
          "Route redistribution and filtering",
          "Policy-based routing and DMVPN",
          "Infrastructure security and troubleshooting",
        ],
      },
      {
        title: "Network automation",
        sessions: "5 sessions",
        bullets: ["Python, Netmiko and Ansible", "RESTCONF, NETCONF, JSON and YAML"],
      },
      {
        title: "Capstone, certification and interview prep",
        sessions: "4 sessions",
        bullets: ["Multi-site capstone network", "ENCOR practice tests, mock interviews, resume review"],
      },
    ],
  },
  tools: {
    title: "Networking tools you'll use",
    items: [
      "Cisco IOS XE",
      "Cisco Packet Tracer",
      "Cisco Modeling Labs",
      "EVE-NG",
      "GNS3",
      "Wireshark",
      "SecureCRT",
      "Cisco Catalyst SD-WAN",
      "Python",
      "Netmiko",
      "Ansible",
      "Postman",
    ],
  },
  projects: {
    title: "CCNA and CCNP projects you'll build",
    lead: "Each project is built in a lab, documented with diagrams and configs, and added to your GitHub.",
    items: [
      {
        title: "Branch office network",
        text: "VLANs, inter-VLAN routing, DHCP, NAT and ACLs for a 3-floor office.",
        stack: "Packet Tracer · VLANs · NAT · ACLs",
        imageAlt: "Switch stack configured with VLANs for a branch office network",
      },
      {
        title: "Multi-site enterprise WAN",
        text: "Head office and branches linked with OSPF, BGP to two ISPs and a DMVPN overlay.",
        stack: "EVE-NG · OSPF · BGP · DMVPN",
        imageAlt: "Multi-site enterprise WAN with OSPF and BGP in EVE-NG",
      },
      {
        title: "Network automation toolkit",
        text: "Back up configs and push VLAN changes to 20 switches in one run.",
        stack: "Python · Netmiko · Ansible",
        imageAlt: "Python script backing up Cisco switch configurations",
      },
    ],
  },
  cert: {
    title: "CCNA and CCNP certification",
    text: "You earn a BTree CCNA and CCNP course certificate and prepare for the Cisco CCNA (200-301) and CCNP Enterprise (350-401 ENCOR and 300-410 ENARSI) exams. Cisco has announced CCNA v2.0 from 3 February 2027 with the same exam code; the course covers both versions.",
    imageAlt: "BTree CCNA and CCNP course completion certificate",
    caption: "Sample BTree CCNA and CCNP course completion certificate.",
  },
  jobs: {
    title: "Jobs and salary after CCNA and CCNP",
    lead: "CCNA learners usually start as network support or NOC engineers; adding CCNP opens network engineer and L2 roles. Typical Chennai salaries are below.",
    roles: [
      {
        role: "Network engineer",
        salary: "₹[X–Y] LPA",
        employers: "IT services, managed service providers",
      },
      {
        role: "NOC engineer (L1/L2)",
        salary: "₹[X–Y] LPA",
        employers: "Data centres, ISPs, telecom",
      },
      {
        role: "Network support engineer",
        salary: "₹[X–Y] LPA",
        employers: "Enterprises, GCCs",
      },
      {
        role: "Network security engineer (junior)",
        salary: "₹[X–Y] LPA",
        employers: "Banks, security service providers",
      },
    ],
    note: "Source: [salary source, year]. Ranges vary by skills and company.",
  },
  why: {
    title: "Why learn CCNA and CCNP at BTree",
    items: [
      {
        title: "Lab time every class",
        text: "Every topic is configured in Cisco Modeling Labs and EVE-NG, not just shown on slides.",
      },
      {
        title: "Trainers who run networks",
        text: "Taught by working network engineers with CCNP or CCIE and [N]+ years of experience.",
      },
      {
        title: "Small live batches",
        text: "Up to [N] learners per batch, recorded sessions and weekly lab clinics.",
      },
      {
        title: "Placement until hired",
        text: "Resume review, mock interviews and referrals to hiring partners, with no end date.",
      },
    ],
  },
  reviews: {
    title: "What our last batch says",
    lead: "Video stories and reviews from learners of the [Batch month] CCNA & CCNP batch.",
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
    title: "CCNA and CCNP course FAQ",
    lead: "Answers to the questions learners ask most before joining.",
    items: [
      {
        q: "What is the CCNA course fee in Chennai?",
        a: "The BTree CCNA course fee is ₹[FEE], and the combined CCNA and CCNP course is ₹[FEE], with no-cost EMI from ₹[EMI] a month. The fee covers live classes, Cisco labs, 3 projects, practice tests, the course certificate and placement support, online or in the Chennai classroom.",
      },
      {
        q: "What is the difference between CCNA and CCNP?",
        a: "CCNA is the associate level: one exam, 200-301, covering networking fundamentals, switching, routing, security and automation basics. CCNP Enterprise is the professional level: a core exam, 350-401 ENCOR, plus one concentration exam such as 300-410 ENARSI, with much deeper design and troubleshooting.",
      },
      {
        q: "How long does it take to complete CCNA and CCNP?",
        a: "About 2 months for CCNA and 2 more months for CCNP Enterprise on weekday batches, or about 5 months in total on weekends. Most learners book the CCNA exam at the end of month 2 and the ENCOR exam after the course.",
      },
      {
        q: "Is the CCNA exam changing in 2027?",
        a: "Yes. Cisco has announced CCNA v2.0 from 3 February 2027. The exam code stays 200-301, and the new blueprint adds an AI and network operations domain and puts more weight on troubleshooting. The current version can be taken until 2 February 2027.",
      },
      {
        q: "Can a fresher or non-IT graduate do CCNA?",
        a: "Yes. CCNA has no formal prerequisites and the course starts with networking basics. Freshers from any engineering or science stream can join; plan for 6–8 hours a week of lab practice outside class.",
      },
      {
        q: "Is coding required for CCNA?",
        a: "No. CCNA is about configuring and troubleshooting networks with Cisco commands. The course adds basic Python and Ansible for network automation, taught from scratch, because employers increasingly ask for it.",
      },
      {
        q: "What is the salary of a CCNA network engineer in Chennai?",
        a: "Entry-level network engineers with CCNA in Chennai typically earn ₹[X–Y] LPA, and CCNP-certified engineers with 2–3 years of experience earn ₹[X–Y] LPA ([source, year]). The jobs table above lists typical roles.",
      },
      {
        q: "Is the CCNA course available online?",
        a: "Yes. The course runs as live online batches with cloud-based Cisco labs, and as classroom batches at the BTree centre in Perungudi, Chennai. Both get the same trainers, labs, recordings and placement support.",
      },
    ],
  },
  cta: {
    title: "Try a free CCNA demo class",
    lead: "Configure your first VLAN and OSPF network live, before you join.",
    button: "Book my demo class",
  },
  related: [
    {
      label: "Cyber security course in Chennai",
      href: "/courses/cyber-security",
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
      label: "CCNA vs CCNP: which should you take first?",
      href: "#",
    },
    {
      label: "Network engineer salary in Chennai",
      href: "#",
    },
    {
      label: "CCNA interview questions with answers",
      href: "#",
    },
    {
      label: "Subnetting cheat sheet for beginners",
      href: "#",
    },
  ],
};

export default course;
