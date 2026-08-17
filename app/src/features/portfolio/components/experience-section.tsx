/**
 * @file experience-section.tsx — Timeline of professional experience
 * @feature portfolio
 * @dependencies @mui/material, framer-motion, magicui
 */
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MagicCard } from "@/components/magicui/magic-card";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import type { ExperienceItem, PortfolioProfile } from "../data/types";

interface ExperienceSectionProps {
  profile: PortfolioProfile;
}

/** Vertical experience timeline with Magic UI card hover + current-role beam. */
function ExperienceSection({ profile }: ExperienceSectionProps): React.JSX.Element {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 40%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });
  const lineHeight = useTransform(lineProgress, [0, 1], ["0%", "100%"]);
  const cardBg = isDark ? "#171C24" : "#FFFFFF";

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
            <TextAnimate animation="blurInUp" by="word" once as="span">
              {profile.experienceHeading}
            </TextAnimate>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mb: 5 }}>
            {profile.experienceIntro}
          </Typography>
        </BlurFade>

        <Box ref={timelineRef} sx={{ position: "relative", pl: { xs: 0, md: 1 } }}>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: 11,
              top: 8,
              bottom: 8,
              width: 2,
              bgcolor: theme.palette.divider,
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: lineHeight,
                width: "100%",
                background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                transformOrigin: "top",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {profile.experience.map((job, index) => (
              <BlurFade key={`${job.company}-${job.role}`} delay={index * 0.05}>
                <ExperienceCard
                  job={job}
                  isCurrent={index === 0}
                  cardBg={cardBg}
                  isDark={isDark}
                />
              </BlurFade>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

interface ExperienceCardProps {
  job: ExperienceItem;
  isCurrent: boolean;
  cardBg: string;
  isDark: boolean;
}

function ExperienceCard({
  job,
  isCurrent,
  cardBg,
  isDark,
}: ExperienceCardProps): React.JSX.Element {
  const theme = useTheme();

  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25 }}>
      <Box sx={{ position: "relative", ml: { md: 5 } }}>
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
            boxShadow: isCurrent
              ? `0 0 0 4px rgba(58,90,120,${isDark ? 0.28 : 0.14})`
              : "none",
            zIndex: 2,
          }}
        />

        <MagicCard
          className="relative overflow-hidden rounded-2xl"
          gradientFrom="#3A5A78"
          gradientTo="#A67C52"
          gradientColor={isDark ? "rgba(58,90,120,0.14)" : "rgba(58,90,120,0.08)"}
          gradientOpacity={0.5}
        >
          <Box
            component="article"
            sx={{
              position: "relative",
              p: { xs: 2.5, md: 3.25 },
              borderRadius: "16px",
              ["--magic-card-bg" as string]: cardBg,
              bgcolor: cardBg,
            }}
          >
            {isCurrent ? <BorderBeam size={220} duration={10} /> : null}

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
        </MagicCard>
      </Box>
    </motion.div>
  );
}

export default ExperienceSection;
