/**
 * @file mobile-profile.ts — Angular/Ionic portfolio (iScale-focused CV)
 * @feature portfolio
 */
import type { PortfolioProfile } from "./types";
import {
  sharedContact,
  sharedEducation,
  sharedExperience,
  sharedSkillGroups,
} from "./shared-experience";

/** Angular / Ionic profile for iScale and hybrid mobile conversations. */
export const mobileProfile: PortfolioProfile = {
  id: "mobile",
  path: "/mobile",
  label: "Angular · Ionic",
  tagline: "Hybrid Mobile · Angular · Frontend Craft",
  title: "Senior Angular / Ionic Developer",
  headline:
    "I build high-performing Angular and Ionic apps that feel native, fast, and maintainable.",
  summary:
    "Senior frontend engineer with 12+ years of experience, specializing in Angular and Ionic. I ship hybrid mobile products, lead framework upgrades, and handle the practical backend work—SQL and API endpoints—that keeps feature delivery moving.",
  about:
    "I’m a frontend specialist with 12+ years shipping software products, with deep focus on Angular, Ionic, TypeScript, and hybrid mobile platforms. At iScale Ventures, I’ve led Ionic v8 feature work and page revamps, built reusable components, owned iOS/Android release builds, and driven Angular upgrades plus Cordova-to-Capacitor migration. I’m strongest in the UI layer—performance, maintainable architecture, and reusable systems—while staying effective on practical backend tasks like SQL and API endpoints so frontend work isn’t blocked. Earlier leadership as a Development Manager sharpened how I mentor peers and keep quality high while moving fast.",
  expertiseNote:
    "Core strength: Angular, Ionic, and hybrid mobile delivery. Practical range: SQL, API endpoints, and cross-stack collaboration.",
  contactBlurb:
    "Open to senior Angular / Ionic and hybrid mobile frontend roles where craft, ownership, and reliable delivery matter. Reach me on email, WhatsApp, or Viber.",
  aboutHeading: "Frontend craft built for hybrid products.",
  experienceHeading: "Experience behind the products I ship.",
  experienceIntro:
    "Angular and Ionic delivery, with earlier leadership and frontend experience that shaped how I build, mentor, and release.",
  ...sharedContact,
  focusAreas: [
    "Ionic v8 + Capacitor mobile apps",
    "Angular upgrades & modern architecture",
    "Reusable component systems",
    "iOS / Android release pipelines",
    "Practical SQL & API endpoints",
    "AI-assisted development workflows",
  ],
  stats: [
    { label: "Years in tech", value: 12, suffix: "+" },
    { label: "Years in frontend", value: 7, suffix: "+" },
    { label: "Hybrid releases", value: 15, suffix: "+" },
  ],
  techOrbit: [
    "Angular",
    "Ionic",
    "Capacitor",
    "TypeScript",
    "RxJS",
    "SQL",
    "Node.js",
    "Tailwind",
  ],
  experience: [
    {
      role: "Senior Angular / Ionic Developer",
      company: "iScale Ventures Inc.",
      period: "Apr 2025 – June 2026",
      highlights: [
        "Led development of new features and page revamps on Ionic v8, improving UX consistency and delivery speed across the mobile product.",
        "Optimized application code for performance and long-term maintainability without slowing feature work.",
        "Created reusable Ionic components shared across screens, reducing duplication and accelerating new development.",
        "Built release versions through Xcode for iOS and Android Studio for Android, keeping store-ready builds reliable.",
        "Led Angular version upgrades and the migration from Cordova to Capacitor for a more modern, sustainable mobile stack.",
        "Learned backend fundamentals with Ruby to collaborate more effectively across the product surface.",
        "Introduced a balanced AI + manual coding approach that improved delivery efficiency while protecting code quality.",
      ],
    },
    ...sharedExperience,
  ],
  skills: [
    {
      category: "Frontend (Core)",
      items: [
        "Angular",
        "TypeScript",
        "RxJS / NgRx / Signals",
        "Tailwind CSS",
        "Ionic Components",
        "PrimeNG / MUI",
        "React",
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
      category: "Backend (Practical)",
      items: [
        ...sharedSkillGroups.backendPractical.filter((item) => item !== "NoSQL"),
        "Ruby (learning)",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: sharedSkillGroups.cloudDevops,
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
