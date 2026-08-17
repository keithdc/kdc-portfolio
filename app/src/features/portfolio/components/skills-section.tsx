/**
 * @file skills-section.tsx — Professional skills showcase with refined accents
 * @feature portfolio
 * @dependencies @mui/material, framer-motion, magicui
 */
import { Box, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { MagicCard } from "@/components/magicui/magic-card";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import type { PortfolioProfile } from "../data/types";

interface SkillsSectionProps {
  profile: PortfolioProfile;
}

interface ChipTone {
  bg: string;
  border: string;
  text: string;
}

/**
 * Professional category accents — one calm family each.
 * Soft fills, thin borders, ink text. No neon glow.
 */
const CATEGORY_TONE: Record<string, ChipTone> = {
  frontend: { bg: "#F7F1EB", border: "#D9C2AB", text: "#6B4E38" },
  mobile: { bg: "#EEF3F6", border: "#B7C9D4", text: "#3D5563" },
  leadership: { bg: "#EEF3F2", border: "#B5C7C4", text: "#3A524F" },
  backend: { bg: "#EFF3EF", border: "#B8C7B8", text: "#3F5340" },
  cloud: { bg: "#EFF2F6", border: "#B8C3D1", text: "#3E4C5E" },
  tools: { bg: "#F5F0EF", border: "#D0BCB8", text: "#5C4541" },
};

const DARK_CATEGORY_TONE: Record<string, ChipTone> = {
  frontend: { bg: "rgba(184,122,75,0.12)", border: "rgba(184,122,75,0.28)", text: "#D4B08A" },
  mobile: { bg: "rgba(100,140,160,0.12)", border: "rgba(100,140,160,0.28)", text: "#A8C0CC" },
  leadership: { bg: "rgba(47,93,98,0.16)", border: "rgba(47,93,98,0.32)", text: "#9BB8BA" },
  backend: { bg: "rgba(80,120,90,0.14)", border: "rgba(80,120,90,0.3)", text: "#A8C4AE" },
  cloud: { bg: "rgba(90,110,140,0.14)", border: "rgba(90,110,140,0.3)", text: "#A8B4C8" },
  tools: { bg: "rgba(140,110,105,0.14)", border: "rgba(140,110,105,0.3)", text: "#C4AFA8" },
};

/** Core stack tiles — restrained copper / slate / teal only. */
const FEATURE_TILES_LIGHT: ChipTone[] = [
  { bg: "#F7F1EB", border: "#D4B08A", text: "#6B4E38" },
  { bg: "#EEF3F6", border: "#A8B8C4", text: "#3D5563" },
  { bg: "#EEF3F2", border: "#A3B8B5", text: "#3A524F" },
  { bg: "#F4F2F0", border: "#C8BDB4", text: "#5A534C" },
  { bg: "#F7F1EB", border: "#D4B08A", text: "#6B4E38" },
  { bg: "#EEF3F6", border: "#A8B8C4", text: "#3D5563" },
  { bg: "#EEF3F2", border: "#A3B8B5", text: "#3A524F" },
  { bg: "#F4F2F0", border: "#C8BDB4", text: "#5A534C" },
];

const FEATURE_TILES_DARK: ChipTone[] = [
  { bg: "rgba(184,122,75,0.14)", border: "rgba(184,122,75,0.3)", text: "#D4B08A" },
  { bg: "rgba(100,140,160,0.14)", border: "rgba(100,140,160,0.3)", text: "#A8C0CC" },
  { bg: "rgba(47,93,98,0.18)", border: "rgba(47,93,98,0.34)", text: "#9BB8BA" },
  { bg: "rgba(120,120,130,0.14)", border: "rgba(120,120,130,0.3)", text: "#B8B8C0" },
  { bg: "rgba(184,122,75,0.14)", border: "rgba(184,122,75,0.3)", text: "#D4B08A" },
  { bg: "rgba(100,140,160,0.14)", border: "rgba(100,140,160,0.3)", text: "#A8C0CC" },
  { bg: "rgba(47,93,98,0.18)", border: "rgba(47,93,98,0.34)", text: "#9BB8BA" },
  { bg: "rgba(120,120,130,0.14)", border: "rgba(120,120,130,0.3)", text: "#B8B8C0" },
];

/** Maps a skill category label to a color family key. */
function resolveCategoryKey(category: string): string {
  const value = category.toLowerCase();
  if (value.includes("frontend")) return "frontend";
  if (value.includes("mobile") || value.includes("hybrid")) return "mobile";
  if (value.includes("leadership")) return "leadership";
  if (value.includes("backend") || value.includes("data")) return "backend";
  if (value.includes("cloud") || value.includes("devops")) return "cloud";
  if (value.includes("ai") || value.includes("tool")) return "tools";
  return "frontend";
}

/** Returns the professional chip tone for a category. */
function getChipTone(category: string, isDark: boolean): ChipTone {
  const key = resolveCategoryKey(category);
  return (isDark ? DARK_CATEGORY_TONE : CATEGORY_TONE)[key] ?? CATEGORY_TONE.frontend;
}

/** Category title colors — muted, not neon. */
function getCategoryTitleColor(category: string, isDark: boolean): string {
  return getChipTone(category, isDark).text;
}

/** Professional skills showcase with restrained accent colors. */
function SkillsSection({ profile }: SkillsSectionProps): React.JSX.Element {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";
  const marqueeItems = profile.skills.flatMap((group) =>
    group.items.map((item) => ({ label: item, category: group.category })),
  );
  const cardBg = isDark ? "#171C24" : "#FFFFFF";
  const tileColors = isDark ? FEATURE_TILES_DARK : FEATURE_TILES_LIGHT;

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 9, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "inline-flex",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 999,
            px: 1.75,
            py: 0.6,
            mb: 2,
            bgcolor: isDark ? "rgba(23,28,36,0.8)" : "rgba(255,255,255,0.85)",
          }}
        >
          <AnimatedShinyText className="text-sm font-semibold tracking-wide">
            ✦ Frontend-first · Practical full-stack range
          </AnimatedShinyText>
        </Box>

        <BoxReveal boxColor={theme.palette.primary.main} delay={0.05}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "3.1rem" }, maxWidth: 640, mb: 1.5 }}
          >
            Skills shaped by real delivery.
          </Typography>
        </BoxReveal>

        <BlurFade delay={0.12}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 580, mb: 2, fontSize: { xs: "1rem", md: "1.08rem" } }}
          >
            {profile.expertiseNote}
          </Typography>
        </BlurFade>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "stretch",
            mb: { xs: 5, md: 7 },
          }}
        >
          <BlurFade delay={0.15}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                minHeight: { xs: 300, sm: 360 },
                overflow: "hidden",
                borderRadius: 4,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor: isDark ? "rgba(23,28,36,0.85)" : "#FFFFFF",
                p: { xs: 2.5, md: 3 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "1.35rem", md: "1.55rem" },
                  mb: 0.75,
                }}
              >
                Core stack
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, maxWidth: 360 }}>
                {profile.id === "mobile"
                  ? "Angular, Ionic, and the practical tools I use to ship hybrid products end to end."
                  : "The frontend and delivery tools I rely on as a Tech Lead—plus the practical stack that keeps teams shipping."}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 1.25,
                  mt: "auto",
                }}
              >
                {profile.techOrbit.map((tech, index) => {
                  const tone = tileColors[index % tileColors.length];
                  return (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                      whileHover={{ y: -2 }}
                    >
                      <Box
                        sx={{
                          px: 1.5,
                          py: 1.4,
                          borderRadius: 2,
                          bgcolor: tone.bg,
                          border: `1px solid ${tone.border}`,
                          color: tone.text,
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 600,
                          fontSize: { xs: "0.88rem", md: "0.95rem" },
                          textAlign: "center",
                        }}
                      >
                        {tech}
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>
            </Box>
          </BlurFade>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            {profile.skills.slice(0, 4).map((group, index) => (
              <BlurFade key={group.category} delay={0.1 + index * 0.05}>
                <MagicCard
                  className="h-full"
                  gradientFrom="#B87A4B"
                  gradientTo="#2F5D62"
                  gradientColor={
                    isDark ? "rgba(184,122,75,0.12)" : "rgba(184,122,75,0.08)"
                  }
                  gradientOpacity={0.5}
                >
                  <Box
                    sx={{
                      p: 2.25,
                      minHeight: 150,
                      ["--magic-card-bg" as string]: cardBg,
                      bgcolor: cardBg,
                      borderRadius: "16px",
                      height: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        mb: 1.25,
                        color: getCategoryTitleColor(group.category, isDark),
                      }}
                    >
                      {group.category}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                      {group.items.map((skill) => (
                        <ColorChip
                          key={skill}
                          label={skill}
                          tone={getChipTone(group.category, isDark)}
                          size="sm"
                        />
                      ))}
                    </Box>
                  </Box>
                </MagicCard>
              </BlurFade>
            ))}
          </Box>
        </Box>

        {profile.skills.slice(4).map((group, index) => (
          <BlurFade key={group.category} delay={0.08 + index * 0.05}>
            <MagicCard
              className="mb-3"
              gradientFrom="#B87A4B"
              gradientTo="#2F5D62"
              gradientColor={
                isDark ? "rgba(47,93,98,0.12)" : "rgba(47,93,98,0.08)"
              }
              gradientOpacity={0.5}
            >
              <Box
                sx={{
                  p: 2.5,
                  ["--magic-card-bg" as string]: cardBg,
                  bgcolor: cardBg,
                  borderRadius: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    mb: 1.5,
                    color: getCategoryTitleColor(group.category, isDark),
                  }}
                >
                  {group.category}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.85 }}>
                  {group.items.map((skill) => (
                    <ColorChip
                      key={skill}
                      label={skill}
                      tone={getChipTone(group.category, isDark)}
                      size="md"
                    />
                  ))}
                </Box>
              </Box>
            </MagicCard>
          </BlurFade>
        ))}
      </Container>

      <Box sx={{ mt: 5 }}>
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.divider}`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            py: 2,
            bgcolor: isDark ? "rgba(14,18,24,0.4)" : "rgba(255,255,255,0.55)",
          }}
        >
          <Marquee pauseOnHover className="[--duration:50s]">
            {marqueeItems.map((item) => (
              <ColorChip
                key={`marquee-${item.label}`}
                label={item.label}
                tone={getChipTone(item.category, isDark)}
                size="md"
                classNameSx={{ mx: 0.75 }}
              />
            ))}
          </Marquee>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <BlurFade>
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", letterSpacing: "0.16em", fontWeight: 700 }}
          >
            Education
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 2,
            }}
          >
            {profile.education.map((edu) => (
              <Box
                key={`${edu.degree}-${edu.year}`}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: cardBg,
                }}
              >
                <Typography fontFamily="'Syne', sans-serif" fontWeight={700}>
                  {edu.degree}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {edu.school} · {edu.year}
                </Typography>
              </Box>
            ))}
          </Box>
        </BlurFade>
      </Container>
    </Box>
  );
}

interface ColorChipProps {
  label: string;
  tone: ChipTone;
  size?: "sm" | "md" | "lg";
  classNameSx?: Record<string, string | number>;
}

/** Refined skill chip — soft fill, thin border, no neon glow. */
function ColorChip({
  label,
  tone,
  size = "md",
  classNameSx,
}: ColorChipProps): React.JSX.Element {
  const padding =
    size === "sm"
      ? { px: 1.1, py: 0.45, fontSize: "0.75rem" }
      : size === "lg"
        ? { px: 1.6, py: 0.75, fontSize: "0.88rem" }
        : { px: 1.25, py: 0.5, fontSize: "0.8rem" };

  return (
    <motion.span
      whileHover={{ y: -1 }}
      transition={{ duration: 0.18 }}
      style={{ display: "inline-block" }}
    >
      <Box
        sx={{
          ...padding,
          borderRadius: 999,
          whiteSpace: "nowrap",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          letterSpacing: "0.01em",
          color: tone.text,
          bgcolor: tone.bg,
          border: `1px solid ${tone.border}`,
          ...classNameSx,
        }}
      >
        {label}
      </Box>
    </motion.span>
  );
}

export default SkillsSection;
