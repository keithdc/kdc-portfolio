/**
 * @file navbar.tsx — Sticky navigation for portfolio pages
 * @feature portfolio
 * @dependencies @mui/material
 */
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import type { PortfolioProfile } from "../data/types";

interface NavbarProps {
  profile: PortfolioProfile;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** Sticky top navigation — desktop links; mobile uses the bottom dock. */
function Navbar({ profile }: NavbarProps): React.JSX.Element {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: isDark ? "rgba(14,18,24,0.72)" : "rgba(251,250,248,0.86)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "0.92rem", sm: "1.05rem" },
              letterSpacing: "-0.03em",
              color: "text.primary",
              mr: 2,
            }}
          >
            Keith Dale Cordova
          </Typography>

          <Typography
            variant="body2"
            sx={{
              display: { xs: "none", md: "block" },
              color: "text.secondary",
              borderLeft: `1px solid ${theme.palette.divider}`,
              pl: 2,
            }}
          >
            {profile.title}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {NAV_LINKS.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                color="inherit"
                sx={{ fontWeight: 500, color: "text.secondary" }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton onClick={toggleColorMode} aria-label="Toggle theme" color="inherit">
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
