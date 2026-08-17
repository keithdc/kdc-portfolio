/**
 * @file tech-lead-profile.ts — Tech Lead / Full Stack portfolio (RCG-focused CV)
 * @feature portfolio
 */
import type { PortfolioProfile } from "./types";
import {
  CAREER_START_YEAR,
  LEADERSHIP_START_YEAR,
  yearsLabel,
  yearsSince,
} from "./career";
import {
  sharedContact,
  sharedEducation,
  sharedExperience,
  sharedProjects,
  sharedSkillGroups,
} from "./shared-experience";

const yearsInTech = yearsLabel(CAREER_START_YEAR);
const yearsLeading = yearsLabel(LEADERSHIP_START_YEAR);

/** Leadership + full-stack profile for RCG / Tech Lead conversations. */
export const techLeadProfile: PortfolioProfile = {
  id: "tech-lead",
  path: "/tech-lead",
  label: "Tech Lead · Full Stack",
  tagline: "Tech Lead · Front End Expertise · Full Stack · Agile Delivery",
  title: "Tech Lead · Full Stack",
  headline:
    "I lead engineering teams and ship full-stack products that move business goals forward.",
  summary: `Results-driven Tech Lead with ${yearsInTech} years in software development and ${yearsLeading} years leading teams. Full-stack capable—strongest in frontend architecture (Angular, React, TypeScript) with solid backend range across Node.js APIs, SQL, and end-to-end delivery.`,
  about: `I’m a Tech Lead and full-stack engineer with ${yearsInTech} years building software and ${yearsLeading} years managing and mentoring development teams in Agile environments. I ship across the stack—frontend platforms in Angular, React, and TypeScript, plus backend work in Node.js APIs, SQL, and practical service collaboration. At RCG Information Technology, I lead design and delivery of software solutions, partner on architecture and technical strategy, and raise quality through standards, reviews, and AI-assisted workflows. My edge is owning features end to end so teams stay unblocked from UI through data and APIs.`,
  expertiseNote:
    "Full stack enabled: frontend platforms + Node.js APIs, SQL, and delivery leadership.",
  contactBlurb:
    "Open to Tech Lead and full-stack engineering leadership roles where ownership, architecture, and strong delivery matter. Reach me on email, LinkedIn, WhatsApp, or Viber.",
  aboutHeading: "Leadership with full-stack ownership.",
  experienceHeading: "Experience that shaped how I lead and ship.",
  experienceIntro:
    "From building products at Yondu, through leadership at Finch, to Tech Lead delivery—focused on architecture, quality, and teams that ship.",
  ...sharedContact,
  focusAreas: [
    "Technical leadership & mentoring",
    "Full-stack delivery (UI → APIs → SQL)",
    "Frontend architecture (Angular, React, TypeScript)",
    "Node.js APIs & data collaboration",
    "Agile delivery & process design",
    "AI-augmented engineering workflows",
  ],
  heroRotateWords: [
    "Tech Lead",
    "Front End Expertise",
    "Full Stack",
    "Agile Delivery",
  ],
  stats: [
    { label: "Years in frontend", value: 12, suffix: "+" },
    { label: "Years in backend", value: 6, suffix: "+" },
    {
      label: "Years leading teams",
      value: yearsSince(LEADERSHIP_START_YEAR),
      suffix: "+",
    },
  ],
  techOrbit: [
    "Angular",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "SQL",
    "CI/CD",
    "AWS",
  ],
  experience: [
    {
      role: "Tech Lead",
      company: "RCG Information Technology",
      period: "Nov 2024 – Present",
      highlights: [
        "Lead the design, development, and implementation of software solutions that improve operational efficiency and streamline business processes.",
        "Collaborate with cross-functional teams to define system architecture, technical strategies, and scalable delivery patterns across the stack.",
        "Drive Agile best practices—sprint planning, backlog refinement, and iterative delivery—to accelerate project timelines.",
        "Spearhead code quality initiatives through peer reviews, coding standards, and automated testing that reduce technical debt.",
        "Gather, analyze, and translate business requirements into technical specifications and actionable development plans.",
        "Strengthen team collaboration through transparency, accountability, and continuous-improvement practices.",
        "Adopt AI-powered solutions to improve development productivity and business workflows.",
      ],
    },
    ...sharedExperience,
  ],
  projects: sharedProjects,
  skills: [
    {
      category: "Frontend (Core)",
      items: sharedSkillGroups.frontendCore,
    },
    {
      category: "Backend & Data",
      items: sharedSkillGroups.backendPractical,
    },
    {
      category: "Leadership",
      items: sharedSkillGroups.leadership,
    },
    {
      category: "Testing & Quality",
      items: sharedSkillGroups.testing,
    },
    {
      category: "Cloud & DevOps",
      items: sharedSkillGroups.cloudDevops,
    },
    {
      category: "AI & Tools",
      items: sharedSkillGroups.aiTools,
    },
  ],
  education: sharedEducation,
};
