/**
 * @file tech-lead-profile.ts — Tech Lead portfolio (RCG-focused CV)
 * @feature portfolio
 */
import type { PortfolioProfile } from "./types";
import {
  sharedContact,
  sharedEducation,
  sharedExperience,
  sharedSkillGroups,
} from "./shared-experience";

/** Leadership + frontend profile for RCG / Tech Lead conversations. */
export const techLeadProfile: PortfolioProfile = {
  id: "tech-lead",
  path: "/tech-lead",
  label: "Tech Lead",
  tagline: "Leadership · Frontend Platforms · Delivery",
  title: "Tech Lead",
  headline:
    "I lead engineering teams and ship frontend platforms that move business goals forward.",
  summary:
    "Results-driven Tech Lead with 12+ years in software development and 4+ years leading teams. Strongest in frontend architecture (Angular, React, TypeScript), Agile delivery, and practical cross-stack collaboration—SQL, APIs, and clear technical direction.",
  about:
    "I’m a Tech Lead with 12+ years building software and 4+ years managing and mentoring development teams in Agile environments. My strongest craft is frontend engineering—Angular, React, TypeScript, and the systems that help UI teams ship with confidence. At RCG Information Technology, I lead design and delivery of software solutions, partner on architecture and technical strategy, and raise quality through standards, reviews, and AI-assisted workflows. I also work comfortably on the practical backend side—SQL, API endpoints, and day-to-day collaboration with backend partners—so delivery stays unblocked without losing a frontend-first edge.",
  expertiseNote:
    "Core strength: Frontend platforms, technical leadership, and delivery. Practical range: SQL, API endpoints, and cross-stack collaboration.",
  contactBlurb:
    "Open to Tech Lead and engineering leadership roles where frontend craft, clear ownership, and strong delivery matter. Reach me on email, WhatsApp, or Viber.",
  aboutHeading: "Leadership with a frontend-first craft.",
  experienceHeading: "Experience that shaped how I lead and ship.",
  experienceIntro:
    "From hands-on frontend engineering to Tech Lead responsibilities—focused on architecture, quality, and teams that deliver.",
  ...sharedContact,
  focusAreas: [
    "Technical leadership & mentoring",
    "Frontend architecture (Angular, React, TypeScript)",
    "Agile delivery & process design",
    "Code quality, standards & maintainability",
    "Practical SQL & API collaboration",
    "AI-augmented engineering workflows",
  ],
  stats: [
    { label: "Years in tech", value: 12, suffix: "+" },
    { label: "Years leading teams", value: 4, suffix: "+" },
    { label: "Years in frontend", value: 7, suffix: "+" },
  ],
  techOrbit: [
    "Angular",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "SQL",
    "Tailwind",
    "CI/CD",
  ],
  experience: [
    {
      role: "Tech Lead",
      company: "RCG Information Technology",
      period: "Nov 2024 – Present",
      highlights: [
        "Lead the design, development, and implementation of software solutions that improve operational efficiency and streamline business processes.",
        "Collaborate with cross-functional teams to define system architecture, technical strategies, and scalable delivery patterns.",
        "Drive Agile best practices—sprint planning, backlog refinement, and iterative delivery—to accelerate project timelines.",
        "Spearhead code quality initiatives through peer reviews, coding standards, and automated testing that reduce technical debt.",
        "Gather, analyze, and translate business requirements into technical specifications and actionable development plans.",
        "Strengthen team collaboration through transparency, accountability, and continuous-improvement practices.",
        "Adopt AI-powered solutions to improve development productivity and business workflows.",
      ],
    },
    ...sharedExperience,
  ],
  skills: [
    {
      category: "Frontend (Core)",
      items: sharedSkillGroups.frontendCore,
    },
    {
      category: "Leadership",
      items: sharedSkillGroups.leadership,
    },
    {
      category: "Backend (Practical)",
      items: sharedSkillGroups.backendPractical,
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
