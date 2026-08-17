/**
 * @file shared-experience.ts — Shared career history used by both CV profiles
 * @feature portfolio
 *
 * Only the current/top role differs per profile (RCG vs iScale).
 * Everything below is the same wording for both shareable URLs.
 */
import type { ExperienceItem } from "./types";

/** Finch + earlier roles — identical copy across both portfolio routes. */
export const sharedExperience: ExperienceItem[] = [
  {
    role: "Development Manager",
    company: "Finch LLC",
    period: "Sept 2021 – Mar 2025",
    highlights: [
      "Led a development team delivering enterprise web applications and internal business platforms from planning through release.",
      "Owned project planning, task allocation, and execution so initiatives shipped on time without sacrificing quality.",
      "Set coding standards, development workflows, and engineering practices that raised consistency across the team.",
      "Improved maintainability by enforcing DRY principles, cutting duplication, and strengthening overall code health.",
      "Built internal collaboration and productivity tools that made communication clearer and delivery more visible.",
      "Guided architecture discussions and technology decisions that supported scalable, sustainable product growth.",
      "Mentored engineers through code reviews, pairing, and knowledge-sharing sessions that leveled up team capability.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Finch LLC",
    period: "Oct 2019 – Mar 2025",
    highlights: [
      "Built and maintained responsive web applications in Agile and Kanban environments with reusable, scalable UI foundations.",
      "Created and owned CI/CD pipelines with Bitbucket Pipelines across multiple deployment environments.",
      "Partnered with backend, design, and product stakeholders to ship polished, production-ready user experiences.",
      "Improved performance, reliability, and maintainability through refactoring and disciplined engineering standards.",
      "Diagnosed production issues quickly and shipped durable fixes that minimized downtime and user impact.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Yondu Inc.",
    period: "Mar 2018 – Oct 2019",
    highlights: [
      "Designed, developed, and maintained enterprise web applications with a focus on scalability and long-term quality.",
      "Refactored legacy codebases using modern practices, reducing technical debt and improving developer velocity.",
      "Built and enhanced configurable applications that adapted as client business requirements evolved.",
      "Mentored junior developers through reviews, technical guidance, and knowledge-sharing sessions.",
      "Established coding standards and maintained CI/CD pipelines that streamlined multi-environment deployments.",
    ],
  },
  {
    role: "Analysis Programmer",
    company: "Robinsons Bank",
    period: "Aug 2016 – Feb 2018",
    highlights: [
      "Developed business-critical applications and monitoring tools that supported day-to-day banking operations.",
      "Enhanced existing systems through bug fixes, performance improvements, and feature delivery.",
      "Designed SQL queries, views, and stored procedures powering reporting and business intelligence needs.",
      "Produced operational and analytical reports used by leadership for decision-making.",
      "Provided production support with fast diagnosis and minimal service disruption.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Southwest Tours Inc.",
    period: "Aug 2014 – June 2016",
    highlights: [
      "Developed and maintained internal business applications and customer-facing web solutions.",
      "Created SQL queries, views, and stored procedures supporting application logic and reporting.",
      "Built and maintained WordPress websites for corporate and customer platforms.",
      "Supported testing, deployments, operational reporting, and day-to-day technical assistance for business users.",
    ],
  },
];

/** Shared skill groups used by both profiles (mobile adds hybrid stack on top). */
export const sharedSkillGroups = {
  frontendCore: [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "RxJS / NgRx / Redux",
    "MUI / Angular Material",
    "Signals / Hooks",
  ],
  leadership: [
    "Team Leadership",
    "Delivery Planning",
    "Agile / Scrum / Kanban",
    "Mentoring & Coaching",
    "Architecture Decisions",
  ],
  backendPractical: [
    "Node.js APIs",
    "REST endpoints",
    "SQL queries",
    "MySQL / PostgreSQL",
    "NoSQL",
    "Firebase",
  ],
  cloudDevops: [
    "AWS (S3, IAM, EC2)",
    "Bitbucket Pipelines",
    "CI/CD",
    "Nx Monorepo",
    "GitHub / Bitbucket",
  ],
  aiTools: ["Cursor", "Claude", "Kiro", "Jira", "Shortcut"],
};

export const sharedEducation = [
  {
    school: "Central Philippine University",
    degree: "Bachelor of Information Technology",
    year: "2015",
  },
  {
    school: "Central Philippine University",
    degree: "Bachelor of Software Engineering",
    year: "2012",
  },
];

export const sharedContact = {
  email: "keithdc019@gmail.com",
  phone: "+63 917 701 0848",
  location: "Dasmariñas, Cavite, Philippines",
};
