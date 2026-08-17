/**
 * @file brand.ts — Portfolio color tokens (corporate steel + muted bronze)
 * @shared
 *
 * Primary UI: steel blue. Brand accent: muted bronze (sparse).
 * Light default: soft porcelain / warm flesh atmosphere (not flat cream).
 */
export const brand = {
  steel: {
    main: "#3A5A78",
    light: "#5C7D9A",
    dark: "#2A4359",
    rgb: "58, 90, 120",
  },
  bronze: {
    main: "#A67C52",
    light: "#C4A07A",
    dark: "#7A5A3A",
    rgb: "166, 124, 82",
  },
  slate: {
    main: "#5B6B7A",
    light: "#7A8A98",
    dark: "#3F4C58",
    rgb: "91, 107, 122",
  },
  ink: {
    darkBg: "#0E1218",
    darkPaper: "#171C24",
    /** Near-white porcelain — warm whisper, much lighter than flesh. */
    lightBg: "#FBFAF8",
    lightPaper: "#FFFFFF",
    textDark: "#F2F4F7",
    textDarkMuted: "#A8B0BC",
    textLight: "#1A1C1F",
    textLightMuted: "#5E646E",
  },
} as const;
