/**
 * @file hero-section.tsx — Full-bleed hero with portrait and CTAs
 * @feature portfolio
 * @dependencies framer-motion, @mui/material, magicui
 */
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { BlurFade } from "@/components/magicui/blur-fade";
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
      }}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={55}
        color={isDark ? "#B87A4B" : "#8F5A32"}
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
            : "linear-gradient(120deg, rgba(243,245,247,0.96) 0%, rgba(243,245,247,0.72) 45%, rgba(243,245,247,0.18) 100%)",
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
            <BlurFade delay={0.05} inView={false}>
              <Typography
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
                Keith Dale
                <Box component="span" sx={{ display: "block", color: "primary.main" }}>
                  Cordova
                </Box>
              </Typography>
            </BlurFade>

            <BlurFade delay={0.18} inView={false}>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  mb: 2,
                }}
              >
                {profile.title} · {profile.tagline}
              </Typography>
            </BlurFade>

            <BlurFade delay={0.3} inView={false}>
              <Typography
                variant="h5"
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
                {profile.headline}
              </Typography>
            </BlurFade>

            <BlurFade delay={0.42} inView={false}>
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
                    shimmerColor={isDark ? "#B87A4B" : "#2F5D62"}
                    background={
                      isDark ? "rgba(23,28,36,0.92)" : "rgba(255,255,255,0.92)"
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
                    ? "radial-gradient(circle at 40% 30%, rgba(184,122,75,0.35), transparent 55%)"
                    : "radial-gradient(circle at 40% 30%, rgba(184,122,75,0.28), transparent 55%)",
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
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Box
          sx={{
            width: 22,
            height: 36,
            border: `1.5px solid ${theme.palette.primary.main}66`,
            borderRadius: 12,
            display: "flex",
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
