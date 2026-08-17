/**
 * @file experience-section.tsx — Timeline of professional experience
 * @feature portfolio
 * @dependencies @mui/material, framer-motion, magicui
 */
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import type { PortfolioProfile } from "../data/types";

interface ExperienceSectionProps {
  profile: PortfolioProfile;
}

/** Vertical experience timeline with role details and highlights. */
function ExperienceSection({ profile }: ExperienceSectionProps): React.JSX.Element {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box component="section" id="experience" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <BlurFade>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 700 }}
          >
            Experience
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "3rem" }, mt: 1, mb: 1.5, maxWidth: 620 }}
          >
            {profile.experienceHeading}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mb: 5 }}>
            {profile.experienceIntro}
          </Typography>
        </BlurFade>

        <Box sx={{ position: "relative", pl: { xs: 0, md: 1 } }}>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: 11,
              top: 8,
              bottom: 8,
              width: 2,
              bgcolor: theme.palette.divider,
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {profile.experience.map((job, index) => (
              <BlurFade key={`${job.company}-${job.role}`} delay={index * 0.05}>
                <Box
                  component={motion.article}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  sx={{
                    position: "relative",
                    ml: { md: 5 },
                    p: { xs: 2.5, md: 3.25 },
                    borderRadius: 3,
                    bgcolor: isDark ? "rgba(23,28,36,0.72)" : "rgba(255,255,255,0.78)",
                    border: `1px solid ${theme.palette.divider}`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      left: { md: -45 },
                      top: 28,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      bgcolor: "background.default",
                      border: `3px solid ${theme.palette.primary.main}`,
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      gap: 1,
                      mb: 1.5,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: { xs: "1.2rem", md: "1.35rem" },
                        }}
                      >
                        {job.role}
                      </Typography>
                      <Typography color="secondary.main" fontWeight={600}>
                        {job.company}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                      }}
                    >
                      {job.period}
                    </Typography>
                  </Box>

                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      pl: 2.25,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      color: "text.secondary",
                    }}
                  >
                    {job.highlights.map((item) => (
                      <Typography component="li" key={item} variant="body2" sx={{ lineHeight: 1.7 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </BlurFade>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ExperienceSection;
