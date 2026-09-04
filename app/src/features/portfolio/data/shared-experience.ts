/**
 * @file shared-experience.ts — Shared career history used by both CV profiles
 * @feature portfolio
 *
 * Only the current/top role differs per profile (RCG vs iScale).
 * Everything below is the same wording for both shareable URLs.
 */
import type { ExperienceItem, ProjectItem } from "./types";

/** Finch + earlier roles — identical copy across both portfolio routes. */
export const sharedExperience: ExperienceItem[] = [
  {
    role: "Development Manager · Senior Frontend Developer",
    company: "Finch LLC",
    period: "Oct 2019 – Nov 2024",
    highlights: [
      "Progressed from Senior Frontend Developer into Development Manager (from Sept 2021), leading delivery while staying hands-on in frontend craft.",
      "Managed and led a development team shipping enterprise web applications and internal business platforms end to end.",
      "Built responsive, reusable frontend systems in Agile and Kanban environments, partnering with design, backend, and product.",
      "Owned CI/CD with Bitbucket Pipelines across multiple environments and raised standards through reviews and DRY practices.",
      "Directed planning, task allocation, and execution so initiatives landed on time without sacrificing quality.",
      "Built internal collaboration tools, guided architecture decisions, and mentored engineers to level up team capability.",
      "Improved production reliability by diagnosing issues quickly and shipping durable fixes with minimal user impact.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Yondu Inc.",
    period: "Mar 2018 – Oct 2019",
    highlights: [
      "Built enterprise web applications from the ground up—owning design, development, and delivery of scalable product surfaces.",
      "Took configurable client platforms from concept through implementation as business requirements evolved.",
      "Refactored legacy systems with modern practices, cutting technical debt and improving long-term maintainability.",
      "Mentored junior developers and helped establish coding standards across the engineering team.",
      "Set up and maintained CI/CD pipelines that streamlined multi-environment releases.",
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
    "Node.js / Express APIs",
    "REST API design",
    "SQL queries & stored procedures",
    "MySQL / PostgreSQL",
    "NoSQL",
    "Firebase",
    "Server setup & deployments",
  ],
  cloudDevops: [
    "AWS (S3, IAM, EC2)",
    "Bitbucket Pipelines",
    "CI/CD",
    "Nx Monorepo",
    "GitHub / Bitbucket",
  ],
  testing: [
    "Jest",
    "Regression testing",
    "Postman",
    "API verification",
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
  linkedin: "https://www.linkedin.com/in/keith-dale-c/",
};

/**
 * Selected work shown on both portfolio URLs.
 * Company names intentionally omitted. Public links only where safe.
 */
export const sharedProjects: ProjectItem[] = [
  {
    title: "Hybrid Soccer Training App",
    summary:
      "Cross-platform Ionic soccer training app for players and coaches—built with Angular on the client and Ruby on the backend for real store distribution on both iOS and Android, with a focus on clear UX and reliable hybrid delivery.",
    role: "Frontend / Mobile contributor",
    stack: ["Ionic", "Angular", "TypeScript", "Ruby", "iOS", "Android"],
    outcome: "Live on the Apple App Store and Google Play.",
    visibility: "public",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/ph/app/techne-futbol-soccer-training/id1298569303",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.technefutbol.techneapp&hl=en",
      },
    ],
  },
  {
    title: "Customer Operations Suite",
    summary:
      "Customer-facing enterprise suite spanning Analytics, Workflow, and a ticket system for managing client work. Analytics consolidated metrics from major e-commerce platforms—Google Ads, Amazon, Shopify, and more—into clear diagrams so teams could see whether the business was generating income.",
    role: "Development Manager · Senior Frontend Developer",
    stack: ["Angular", "TypeScript", "Analytics UI", "Workflow", "Enterprise UI"],
    outcome:
      "Served global enterprise clients across the US, Europe, and Japan with a unified view of performance and operations.",
    visibility: "internal",
    note: "Internal customer product — company names omitted for confidentiality.",
  },
  {
    title: "Theme Park Restaurant Reservations",
    summary:
      "Internal Angular apps for restaurant table reservations across major theme park properties—covering both the guest-facing reservation flow and the admin tooling that operations teams use day to day.",
    role: "Developer · Reservation & Admin apps",
    stack: ["Angular", "TypeScript", "Enterprise UI", "Internal tooling"],
    outcome:
      "Supported reservation and admin workflows for high-volume hospitality operations inside a large entertainment brand.",
    visibility: "internal",
    note: "Confidential internal system — brand and product names withheld.",
  },
  {
    title: "Regional Insurance Customer App",
    summary:
      "Southeast Asia customer app for viewing insurance and VUL (variable universal life) policies, with the ability to top up VUL. Built as a region-configurable product—users in the Philippines vs Singapore see different forms and pages based on market rules.",
    role: "Senior Software Engineer",
    stack: ["Enterprise web", "Configurable UI", "TypeScript / JS", "CI/CD"],
    outcome:
      "Shipped a multi-market insurance experience that adapted forms and flows per client region.",
    visibility: "internal",
    note: "Internal insurance product — anonymized for NDA safety.",
  },
  {
    title: "Travel Company Web Platform",
    summary:
      "Early-career full-stack build for a Philippine travel brand—customer-facing site plus server setup, owned end-to-end with limited senior guidance. Rough edges came with the learning curve; finishing and shipping still happened.",
    role: "Junior Software Developer · Full stack",
    stack: ["Web apps", "WordPress", "SQL", "Server setup"],
    outcome: "Delivered a working travel platform that supported bookings and operations at the time.",
    visibility: "public",
    links: [
      {
        label: "Visit live site",
        href: "https://www.southwesttours.com.ph/",
      },
    ],
    note: "The live site has been redesigned; the original build is no longer in use.",
  },
];
