/**
 * @file nav-dock.tsx — Bottom Magic UI dock for section navigation
 * @feature portfolio
 * @dependencies @mui/icons-material, magicui Dock
 */
import { Box, Tooltip, useTheme } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import { sharedContact } from "../data/shared-experience";

const DOCK_LINKS = [
  { label: "About", href: "#about", Icon: PersonOutlineIcon },
  { label: "Experience", href: "#experience", Icon: WorkOutlineIcon },
  { label: "Projects", href: "#projects", Icon: FolderOpenOutlinedIcon },
  { label: "Skills", href: "#skills", Icon: CodeOutlinedIcon },
  { label: "Contact", href: "#contact", Icon: MailOutlineIcon },
];

/** Floating dock — mobile-only section nav (desktop uses top navbar). */
function NavDock(): React.JSX.Element {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 14,
        zIndex: 1200,
        justifyContent: "center",
        pointerEvents: "none",
        px: 2,
      }}
    >
      <Box sx={{ pointerEvents: "auto" }}>
        <Dock
          iconSize={40}
          iconMagnification={52}
          className="border shadow-lg"
          style={{
            borderColor: theme.palette.divider,
            backgroundColor: isDark ? "rgba(23,28,36,0.88)" : "rgba(255,255,255,0.9)",
            boxShadow: isDark
              ? "0 12px 40px rgba(0,0,0,0.35)"
              : "0 12px 32px rgba(20,24,31,0.12)",
          }}
        >
          {DOCK_LINKS.map(({ label, href, Icon }) => (
            <DockIcon key={href} className="bg-transparent">
              <Tooltip title={label} placement="top">
                <Box
                  component="a"
                  href={href}
                  aria-label={label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    color: "text.secondary",
                    borderRadius: "999px",
                    textDecoration: "none",
                    transition: "color 0.2s ease, background-color 0.2s ease",
                    "&:hover": {
                      color: "primary.main",
                      bgcolor: isDark ? "rgba(58,90,120,0.18)" : "rgba(58,90,120,0.1)",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </Box>
              </Tooltip>
            </DockIcon>
          ))}
          <DockIcon className="bg-transparent">
            <Tooltip title="LinkedIn" placement="top">
              <Box
                component="a"
                href={sharedContact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  color: "text.secondary",
                  borderRadius: "999px",
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: isDark ? "rgba(58,90,120,0.18)" : "rgba(58,90,120,0.1)",
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </Box>
            </Tooltip>
          </DockIcon>
          <DockIcon className="bg-transparent">
            <Tooltip title={isDark ? "Light mode" : "Dark mode"} placement="top">
              <Box
                component="button"
                type="button"
                onClick={toggleColorMode}
                aria-label="Toggle theme"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  color: "text.secondary",
                  border: 0,
                  bgcolor: "transparent",
                  borderRadius: "999px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: isDark ? "rgba(58,90,120,0.18)" : "rgba(58,90,120,0.1)",
                  },
                }}
              >
                {isDark ? (
                  <LightModeOutlinedIcon sx={{ fontSize: 20 }} />
                ) : (
                  <DarkModeOutlinedIcon sx={{ fontSize: 20 }} />
                )}
              </Box>
            </Tooltip>
          </DockIcon>
        </Dock>
      </Box>
    </Box>
  );
}

export default NavDock;
