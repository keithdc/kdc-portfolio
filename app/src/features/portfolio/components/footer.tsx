/**
 * @file footer.tsx — Site footer
 * @feature portfolio
 * @dependencies @mui/material
 */
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { CAREER_START_YEAR } from "../data/career";
import { sharedContact } from "../data/shared-experience";

/** Minimal footer with copyright + LinkedIn — no cross-profile links. */
function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="body2" color="text.secondary">
            © {CAREER_START_YEAR}–{year} Keith Dale Cordova
          </Typography>
          <Link
            href={sharedContact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="text.secondary"
            variant="body2"
            sx={{ fontWeight: 500 }}
          >
            LinkedIn
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
