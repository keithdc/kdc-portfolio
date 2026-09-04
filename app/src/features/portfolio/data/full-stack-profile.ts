/**
 * @file full-stack-profile.ts — Full Stack Angular/Ionic portfolio (iScale-focused CV)
 * @feature portfolio
 */
import type { PortfolioProfile } from "./types";
import { CAREER_START_YEAR, yearsLabel } from "./career";
import {
  sharedContact,
  sharedEducation,
  sharedExperience,
  sharedProjects,
  sharedSkillGroups,
} from "./shared-experience";

const yearsInTech = yearsLabel(CAREER_START_YEAR);

/** Full-stack Angular / Ionic profile for hybrid + API delivery conversations. */
export const fullStackProfile: PortfolioProfile = {
  id: "full-stack",
  path: "/full-stack",
  label: "Full Stack · Angular · React.js · Ionic",
  tagline: "Full Stack · Angular · React.js · Ionic",
  title: "Senior Full Stack · Angular / React.js / Ionic",
  headline:
    "I build full-stack Angular, React.js, and Ionic products—from polished UI to APIs and data—that feel fast and maintainable.",
  summary: `Senior full-stack engineer with ${yearsInTech} years of experience, specializing in Angular, React.js, and Ionic. I ship hybrid mobile and web products, lead framework upgrades, and own the backend work—SQL, REST APIs, Ruby, and release pipelines—that keeps feature delivery moving end to end.`,
  about: `I’m a full-stack engineer with ${yearsInTech} years shipping software products, with deep focus on Angular, React.js, Ionic, TypeScript, and hybrid mobile platforms—plus practical backend delivery in SQL, REST APIs, Node.js, and Ruby. At iScale Ventures, I’ve led Ionic v8 feature work and page revamps, built reusable components, owned iOS/Android release builds, and driven Angular upgrades plus Cordova-to-Capacitor migration. I also work across the product surface with backend fundamentals (including Ruby) so features aren’t blocked at the API or data layer. Earlier leadership as a Development Manager sharpened how I mentor peers and keep quality high while moving fast.`,
  expertiseNote:
    "Full stack enabled: Angular, React.js, and Ionic + Ruby, SQL, REST APIs, Node.js, and release ownership.",
  contactBlurb:
    "Open to senior full-stack Angular / React.js / Ionic and hybrid mobile roles where end-to-end ownership and reliable delivery matter. Reach me on email, LinkedIn, WhatsApp, or Viber.",
  aboutHeading: "Full-stack craft built for hybrid products.",
  experienceHeading: "Experience behind the products I ship.",
  experienceIntro:
    "From building apps at Yondu, through Finch leadership and frontend craft, to Angular/React.js/Ionic full-stack delivery at iScale.",
  ...sharedContact,
  focusAreas: [
    "Angular, React.js, and Ionic product delivery",
    "Ionic v8 + Capacitor mobile apps",
    "Lead the delivery of iOS and Android",
    "Lead the migration of Cordova to Capacitor",
    "Full-stack feature delivery (UI → API → SQL)",
    "MySQL",
  ],
  heroRotateWords: ["Full Stack", "Angular", "React.js", "Ionic", "Ruby"],
  stats: [
    { label: "Total years of experience", value: 12, suffix: "+" },
    { label: "Years in frontend", value: 12, suffix: "+" },
    { label: "Years in backend", value: 6, suffix: "+" },
    { label: "Hybrid releases", value: 15, suffix: "+" },
  ],
  techOrbit: [
    "Angular",
    "React.js",
    "Ionic",
    "Ruby",
    "TypeScript",
    "Node.js",
    "SQL",
    "CI/CD",
  ],
  experience: [
    {
      role: "Senior Angular / Ionic Developer",
      company: "iScale Ventures Inc.",
      period: "Apr 2025 – June 2026",
      highlights: [
        "Led development of new features and page revamps on Ionic v8, improving UX consistency and delivery speed across the mobile product.",
        "Led the delivery of iOS and Android releases through Xcode and Android Studio, keeping store-ready builds reliable.",
        "Led the migration from Cordova to Capacitor for a more modern, sustainable hybrid mobile stack.",
        "Optimized application code for performance and long-term maintainability without slowing feature work.",
        "Created reusable Ionic components shared across screens, reducing duplication and accelerating new development.",
        "Led Angular version upgrades alongside the Capacitor migration to modernize the product platform.",
        "Expanded into backend fundamentals with Ruby and API collaboration so features moved end to end across the product surface.",
        "Introduced a balanced AI + manual coding approach that improved delivery efficiency while protecting code quality.",
      ],
    },
    ...sharedExperience,
  ],
  projects: sharedProjects,
  skills: [
    {
      category: "Frontend (Core)",
      items: [
        "Angular",
        "React.js",
        "TypeScript",
        "Ruby",
        "RxJS / NgRx / Signals",
        "Tailwind CSS",
        "Ionic Components",
        "PrimeNG / MUI",
        "Next.js",
      ],
    },
    {
      category: "Mobile & Hybrid",
      items: [
        "Ionic v8",
        "Capacitor",
        "Cordova → Capacitor migration",
        "Xcode / iOS builds",
        "Android Studio",
        "Hybrid app architecture",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        ...sharedSkillGroups.backendPractical.filter((item) => item !== "NoSQL"),
        "Ruby",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: sharedSkillGroups.cloudDevops,
    },
    {
      category: "Testing & Quality",
      items: sharedSkillGroups.testing,
    },
    {
      category: "Leadership & Tools",
      items: [
        "Team Leadership",
        "Agile / Scrum / Kanban",
        "Mentoring",
        "Cursor / Claude / Kiro",
        "Jira / Shortcut",
      ],
    },
  ],
  education: sharedEducation,
};
