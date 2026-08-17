/**
 * @file navbar.tsx — Sticky navigation for portfolio pages
 * @feature portfolio
 * @dependencies @mui/material
 */
import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link as MuiLink,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** Sticky top navigation with mobile drawer and theme toggle. */
function Navbar({ profile }: NavbarProps): React.JSX.Element {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const [open, setOpen] = useState(false);
  const isDark = mode === "dark";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: isDark ? "rgba(14,18,24,0.72)" : "rgba(243,245,247,0.78)",
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

            <Stack direction="row" spacing={0.5} sx={{ display: { md: "none" } }}>
              <IconButton onClick={toggleColorMode} aria-label="Toggle theme" color="inherit">
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton onClick={() => setOpen(true)} aria-label="Open menu" color="inherit">
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "background.paper",
            p: 2,
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography fontFamily="'Syne', sans-serif" fontWeight={700}>
            Menu
          </Typography>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack spacing={1}>
          {NAV_LINKS.map((item) => (
            <MuiLink
              key={item.href}
              href={item.href}
              underline="none"
              color="text.primary"
              onClick={() => setOpen(false)}
              sx={{ py: 1.25, fontWeight: 500 }}
            >
              {item.label}
            </MuiLink>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}

export default Navbar;
