/**
 * @file footer.tsx — Calm closing footer (no redundant social links)
 * @feature portfolio
 * @dependencies @mui/material
 */
import { Box, Container, Typography } from "@mui/material";
import { CAREER_START_YEAR } from "../data/career";
import type { PortfolioProfile } from "../data/types";

interface FooterProps {
  profile: PortfolioProfile;
}

/**
 * Centered brand close.
 * LinkedIn lives in Contact (and the mobile dock) — not repeated here.
 */
function Footer({ profile }: FooterProps): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: 2, md: 3 },
        pb: { xs: 12, md: 5 },
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 420,
            mx: "auto",
            py: { xs: 3, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "-0.02em",
              color: "text.primary",
              mb: 0.75,
            }}
          >
            Keith Dale Cordova
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.secondary",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 600,
              mb: 2,
            }}
          >
            {profile.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {CAREER_START_YEAR}–{year}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
