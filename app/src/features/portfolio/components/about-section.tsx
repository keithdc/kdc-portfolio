/**
 * @file about-section.tsx — About narrative, focus areas, and stats
 * @feature portfolio
 * @dependencies @mui/material, magicui
 */
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import type { PortfolioProfile } from "../data/types";

interface AboutSectionProps {
  profile: PortfolioProfile;
}

/** About section with enhanced narrative, focus areas, and animated stats. */
function AboutSection({ profile }: AboutSectionProps): React.JSX.Element {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box component="section" id="about" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <BlurFade>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 700 }}
          >
            About
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              maxWidth: 640,
              mt: 1,
              mb: 3,
            }}
          >
            <TextAnimate animation="blurInUp" by="word" once as="span">
              {profile.aboutHeading}
            </TextAnimate>
          </Typography>
        </BlurFade>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "start",
          }}
        >
          <BlurFade delay={0.1}>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.08rem" }, mb: 2 }}
            >
              {profile.about}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                mb: 3,
                maxWidth: 520,
              }}
            >
              {profile.expertiseNote}
            </Typography>
            <Stack spacing={1.25}>
              {profile.focusAreas.map((area) => (
                <Box
                  key={area}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    color: "text.primary",
                    fontWeight: 500,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      flexShrink: 0,
                    }}
                  />
                  {area}
                </Box>
              ))}
            </Stack>
          </BlurFade>

          <BlurFade delay={0.2}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                p: { xs: 3, md: 3.5 },
                bgcolor: isDark ? "rgba(23,28,36,0.85)" : "rgba(255,255,255,0.92)",
                border: `1px solid ${theme.palette.divider}`,
                backdropFilter: "blur(10px)",
              }}
            >
              <BorderBeam size={180} duration={12} />
              <Stack spacing={3}>
                {profile.stats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      sx={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "2.4rem", md: "2.8rem" },
                        lineHeight: 1,
                        color: "text.primary",
                      }}
                    >
                      <NumberTicker value={stat.value} />
                      {stat.suffix ?? ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </BlurFade>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutSection;
