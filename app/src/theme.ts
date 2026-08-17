/**
 * @file theme.ts — MUI theme for Keith Dale Cordova portfolio
 * @shared
 * @dependencies @mui/material
 *
 * Visual direction: ink + copper on cool mist atmospheres.
 * Avoids purple gradients, cream/terracotta defaults, and broadsheet layouts.
 */
import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

/** Creates a theme instance for the given color mode. */
function getTheme(mode: PaletteMode) {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#B87A4B",
        light: "#D4A57A",
        dark: "#8F5A32",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#2F5D62",
        light: "#4F7F84",
        dark: "#1E3F43",
        contrastText: "#FFFFFF",
      },
      background: {
        default: isDark ? "#0E1218" : "#F3F5F7",
        paper: isDark ? "#171C24" : "#FFFFFF",
      },
      text: {
        primary: isDark ? "#F2F4F7" : "#14181F",
        secondary: isDark ? "#A8B0BC" : "#5B6574",
      },
      divider: isDark
        ? "rgba(184, 122, 75, 0.18)"
        : "rgba(47, 93, 98, 0.14)",
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
            boxShadow: "0 10px 28px rgba(184, 122, 75, 0.28)",
            "&:hover": {
              boxShadow: "0 14px 34px rgba(184, 122, 75, 0.36)",
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
              ? "radial-gradient(ellipse 80% 50% at 10% -10%, rgba(184,122,75,0.14), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 0%, rgba(47,93,98,0.18), transparent 50%)"
              : "radial-gradient(ellipse 80% 50% at 8% -8%, rgba(184,122,75,0.12), transparent 55%), radial-gradient(ellipse 55% 45% at 92% 0%, rgba(47,93,98,0.10), transparent 50%), linear-gradient(180deg, #F7F8FA 0%, #EEF1F4 100%)",
            backgroundAttachment: "fixed",
          },
        },
      },
    },
  });
}

export default getTheme;
