/**
 * @file hero-section.tsx — Full-bleed hero with portrait and CTAs
 * @feature portfolio
 * @dependencies framer-motion, @mui/material, magicui
 */
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { WordRotate } from "@/components/magicui/word-rotate";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import portrait from "@/assets/keith-cordova.png";
import type { PortfolioProfile } from "../data/types";

interface HeroSectionProps {
  profile: PortfolioProfile;
}

/** First-viewport hero: brand, headline, supporting line, CTAs, portrait. */
function HeroSection({ profile }: HeroSectionProps): React.JSX.Element {
  const theme = useTheme();
  const { mode } = useColorMode();
  const isDark = mode === "dark";

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 8 },
        pb: { xs: 10, md: 8 },
      }}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={55}
        color={isDark ? "#5C7D9A" : "#3A5A78"}
        size={0.45}
        staticity={35}
        ease={55}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "linear-gradient(120deg, rgba(14,18,24,0.92) 0%, rgba(14,18,24,0.55) 48%, rgba(14,18,24,0.2) 100%)"
            : "linear-gradient(120deg, rgba(251,250,248,0.96) 0%, rgba(251,250,248,0.72) 45%, rgba(251,250,248,0.16) 100%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.2rem" },
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "text.primary",
                mb: 1.5,
              }}
            >
              <TextAnimate
                as="span"
                animation="blurInUp"
                by="word"
                startOnView={false}
                once
                delay={0.05}
                className="block"
              >
                Keith Dale
              </TextAnimate>
              <Box
                component="span"
                sx={{ display: "block", color: "primary.main", mt: 0.5 }}
              >
                <SparklesText
                  sparklesCount={5}
                  colors={{ first: "#3A5A78", second: "#A67C52" }}
                >
                  Cordova
                </SparklesText>
              </Box>
            </Box>

            <BlurFade delay={0.2} inView={false}>
              <Box
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  mb: 2,
                  minHeight: "1.4em",
                }}
              >
                <WordRotate words={profile.heroRotateWords} duration={2600} />
              </Box>
            </BlurFade>

            <BlurFade delay={0.32} inView={false}>
              <Box
                sx={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", md: "1.55rem" },
                  lineHeight: 1.35,
                  maxWidth: 540,
                  mb: 2.5,
                  color: "text.primary",
                }}
              >
                <TextAnimate
                  as="h2"
                  animation="slideUp"
                  by="word"
                  startOnView={false}
                  once
                  delay={0.05}
                >
                  {profile.headline}
                </TextAnimate>
              </Box>
            </BlurFade>

            <BlurFade delay={0.45} inView={false}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: 520,
                  mb: 4,
                  fontSize: { xs: "0.98rem", md: "1.05rem" },
                }}
              >
                {profile.summary}
              </Typography>
            </BlurFade>

            <BlurFade delay={0.55} inView={false}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <a href="#contact" style={{ textDecoration: "none" }}>
                  <ShimmerButton className="text-sm font-semibold px-7 py-3 w-full sm:w-auto">
                    Let&apos;s talk
                  </ShimmerButton>
                </a>
                <a href="#experience" style={{ textDecoration: "none" }}>
                  <ShimmerButton
                    shimmerColor={isDark ? "#5C7D9A" : "#3A5A78"}
                    background={
                      isDark ? "rgba(23,28,36,0.92)" : "rgba(255,255,255,0.94)"
                    }
                    className={`text-sm font-semibold px-7 py-3 w-full sm:w-auto ${isDark ? "" : "!text-[#14181F]"}`}
                  >
                    View experience
                  </ShimmerButton>
                </a>
              </Stack>
            </BlurFade>
          </Box>

          <BlurFade delay={0.25} inView={false}>
            <Box
              sx={{
                position: "relative",
                justifySelf: { xs: "center", md: "end" },
                width: { xs: "min(88vw, 360px)", md: "100%" },
                maxWidth: 460,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: { xs: "-8% -6%", md: "-10% -8%" },
                  background: isDark
                    ? "radial-gradient(circle at 40% 30%, rgba(58,90,120,0.35), transparent 55%)"
                    : "radial-gradient(circle at 40% 30%, rgba(166,124,82,0.22), transparent 55%)",
                  filter: "blur(18px)",
                  zIndex: 0,
                }}
              />
              <Box
                component="img"
                src={portrait}
                alt="Keith Dale Cordova"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center top",
                  aspectRatio: "1 / 1.08",
                  borderRadius: { xs: "28% 28% 18% 18%", md: "32% 32% 20% 20%" },
                  boxShadow: isDark
                    ? "0 30px 80px rgba(0,0,0,0.45)"
                    : "0 30px 70px rgba(20,24,31,0.18)",
                  border: `1px solid ${theme.palette.divider}`,
                }}
              />
            </Box>
          </BlurFade>
        </Box>
      </Container>

      <motion.div
        style={{
          position: "absolute",
          bottom: 88,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: 22,
            height: 36,
            border: `1.5px solid ${theme.palette.primary.main}66`,
            borderRadius: 12,
            justifyContent: "center",
            pt: 0.8,
          }}
        >
          <motion.div
            style={{
              width: 3,
              height: 7,
              borderRadius: 4,
              backgroundColor: theme.palette.primary.main,
            }}
            animate={{ opacity: [1, 0], y: [0, 10] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}

export default HeroSection;
