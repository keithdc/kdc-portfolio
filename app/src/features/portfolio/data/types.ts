/**
 * @file types.ts — Shared portfolio profile types
 * @shared
 */
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
}

export interface PortfolioStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  summary: string;
  role: string;
  stack: string[];
  outcome: string;
  visibility: "public" | "internal";
  /** One or more public links (e.g. App Store + Play Store). */
  links?: ProjectLink[];
  note?: string;
}

export interface PortfolioProfile {
  id: string;
  path: string;
  label: string;
  tagline: string;
  title: string;
  headline: string;
  summary: string;
  about: string;
  expertiseNote: string;
  contactBlurb: string;
  aboutHeading: string;
  experienceHeading: string;
  experienceIntro: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  focusAreas: string[];
  /** Short phrases rotated under the hero name. */
  heroRotateWords: string[];
  stats: PortfolioStat[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  techOrbit: string[];
}
