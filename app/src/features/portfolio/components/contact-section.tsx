/**
 * @file contact-section.tsx — Contact CTA with email, LinkedIn, WhatsApp, and Viber
 * @feature portfolio
 * @dependencies @mui/material, magicui
 */
import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import type { PortfolioProfile } from "../data/types";

interface ContactSectionProps {
  profile: PortfolioProfile;
}

/** Returns digits-only phone for deep links (WhatsApp / Viber). */
function toPhoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

/** Closing contact section with email, LinkedIn, WhatsApp, Viber, and location. */
function ContactSection({ profile }: ContactSectionProps): React.JSX.Element {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";
  const phoneDigits = toPhoneDigits(profile.phone);
  const whatsappHref = `https://wa.me/${phoneDigits}`;
  const viberHref = `viber://chat?number=%2B${phoneDigits}`;

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="md">
        <BlurFade>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              borderRadius: 4,
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 7 },
              bgcolor: isDark ? "rgba(23,28,36,0.88)" : "rgba(255,255,255,0.92)",
              border: `1px solid ${theme.palette.divider}`,
              backgroundImage: isDark
                ? "radial-gradient(circle at 50% 0%, rgba(58,90,120,0.20), transparent 55%)"
                : "radial-gradient(circle at 50% 0%, rgba(58,90,120,0.12), transparent 55%)",
            }}
          >
            <BorderBeam duration={11} size={220} />
            <Typography
              variant="overline"
              sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 700 }}
            >
              Contact
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                mt: 1,
                mb: 2,
              }}
            >
              <TextAnimate animation="blurInUp" by="word" once as="span">
                Ready when you are.
              </TextAnimate>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 500, mx: "auto", mb: 4 }}
            >
              {profile.contactBlurb}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 4 }}
            >
              <a href={`mailto:${profile.email}`} style={{ textDecoration: "none" }}>
                <ShimmerButton className="text-sm font-semibold px-7 py-3 w-full sm:w-auto">
                  Email Keith
                </ShimmerButton>
              </a>
              <Button
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                sx={{ borderRadius: 999, px: 3.5 }}
              >
                LinkedIn
              </Button>
              <Button
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<ChatOutlinedIcon />}
                sx={{ borderRadius: 999, px: 3.5 }}
              >
                WhatsApp
              </Button>
              <Button
                href={viberHref}
                variant="outlined"
                size="large"
                startIcon={<PhoneOutlinedIcon />}
                sx={{
                  borderRadius: 999,
                  px: 3.5,
                  borderColor: "secondary.main",
                  color: "secondary.main",
                  "&:hover": {
                    borderColor: "secondary.dark",
                    bgcolor: "rgba(166,124,82,0.08)",
                  },
                }}
              >
                Viber
              </Button>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2.5}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >
              <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                <EmailOutlinedIcon fontSize="small" />
                <Typography variant="body2">{profile.email}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                <PhoneOutlinedIcon fontSize="small" />
                <Typography variant="body2">{profile.phone}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                <PlaceOutlinedIcon fontSize="small" />
                <Typography variant="body2">{profile.location}</Typography>
              </Stack>
            </Stack>
          </Box>
        </BlurFade>
      </Container>
    </Box>
  );
}

export default ContactSection;
