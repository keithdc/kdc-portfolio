/**
 * @file career.ts — Career timeline constants used for auto years / copyright
 * @feature portfolio
 */

/** First year of professional software work. */
export const CAREER_START_YEAR = 2014;

/** Development Manager / team leadership start (Finch, Sept 2021). */
export const LEADERSHIP_START_YEAR = 2021;

/** Full years since a start year (never negative). */
export function yearsSince(startYear: number): number {
  return Math.max(0, new Date().getFullYear() - startYear);
}

/** Display label like "12+". */
export function yearsLabel(startYear: number): string {
  return `${yearsSince(startYear)}+`;
}
