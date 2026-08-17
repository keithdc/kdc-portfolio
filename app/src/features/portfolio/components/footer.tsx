/**
 * @file footer.tsx — Site footer
 * @feature portfolio
 * @dependencies @mui/material
 */
import { Box, Container, Typography } from "@mui/material";

/** Minimal footer with copyright only — no cross-profile links. */
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
        <Typography variant="body2" color="text.secondary">
          © {year} Keith Dale Cordova
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
