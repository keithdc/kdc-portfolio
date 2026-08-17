/**
 * @file theme.ts — MUI theme for Keith Dale Cordova portfolio
 * @shared
 * @dependencies @mui/material
 *
 * Visual direction: porcelain light default + steel primary, muted bronze accent.
 * Avoids purple gradients, generic cream/terracotta stacks, and broadsheet layouts.
 */
import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
import { brand } from "@/features/portfolio/data/brand";

/** Creates a theme instance for the given color mode. */
function getTheme(mode: PaletteMode) {
  const isDark = mode === "dark";
  const { steel, bronze, slate, ink } = brand;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: steel.main,
        light: steel.light,
        dark: steel.dark,
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: bronze.main,
        light: bronze.light,
        dark: bronze.dark,
        contrastText: "#FFFFFF",
      },
      background: {
        default: isDark ? ink.darkBg : ink.lightBg,
        paper: isDark ? ink.darkPaper : ink.lightPaper,
      },
      text: {
        primary: isDark ? ink.textDark : ink.textLight,
        secondary: isDark ? ink.textDarkMuted : ink.textLightMuted,
      },
      divider: isDark
        ? `rgba(${steel.rgb}, 0.22)`
        : `rgba(${slate.rgb}, 0.18)`,
    },
    typography: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      h1: {
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        letterSpacing: "-0.03em",
      },
      h2: {
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontFamily: "'Syne', sans-serif",
        fontWeight: 600,
        letterSpacing: "-0.02em",
      },
      h4: {
        fontFamily: "'Syne', sans-serif",
        fontWeight: 600,
      },
      h5: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
      },
      h6: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
      },
      body1: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 400,
        lineHeight: 1.75,
      },
      body2: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 400,
        lineHeight: 1.65,
      },
      button: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "0.02em",
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            padding: "10px 22px",
            fontSize: "0.92rem",
          },
          contained: {
            boxShadow: `0 10px 28px rgba(${steel.rgb}, 0.28)`,
            "&:hover": {
              boxShadow: `0 14px 34px rgba(${steel.rgb}, 0.36)`,
            },
          },
          outlined: {
            borderWidth: 1.5,
            "&:hover": {
              borderWidth: 1.5,
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: isDark
              ? `radial-gradient(ellipse 80% 50% at 10% -10%, rgba(${steel.rgb},0.16), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 0%, rgba(${bronze.rgb},0.10), transparent 50%)`
              : `radial-gradient(ellipse 80% 50% at 8% -8%, rgba(${steel.rgb},0.06), transparent 55%), radial-gradient(ellipse 55% 45% at 92% 0%, rgba(${bronze.rgb},0.05), transparent 50%), linear-gradient(180deg, #FDFCFB 0%, #F7F5F2 100%)`,
            backgroundAttachment: "fixed",
          },
        },
      },
    },
  });
}

export default getTheme;
