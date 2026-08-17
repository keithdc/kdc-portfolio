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
  focusAreas: string[];
  stats: PortfolioStat[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  techOrbit: string[];
}
