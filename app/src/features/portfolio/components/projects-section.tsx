/**
 * @file projects-section.tsx — Selected work showcase (public + anonymized internal)
 * @feature portfolio
 * @dependencies @mui/material, framer-motion, magicui
 */
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { MagicCard } from "@/components/magicui/magic-card";
import { useColorMode } from "@/shared/hooks/use-color-mode";
import type { PortfolioProfile, ProjectItem } from "../data/types";

interface ProjectsSectionProps {
  profile: PortfolioProfile;
}

/** Selected projects — same set on both shareable URLs, company names omitted. */
function ProjectsSection({ profile }: ProjectsSectionProps): React.JSX.Element {
  const { mode } = useColorMode();
  const isDark = mode === "dark";
  const cardBg = isDark ? "#171C24" : "#FFFFFF";

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <BlurFade>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: "0.16em", fontWeight: 700 }}
          >
            Selected work
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "3rem" }, mt: 1, mb: 1.5, maxWidth: 640 }}
          >
            <TextAnimate animation="blurInUp" by="word" once as="span">
              Projects shaped by real delivery.
            </TextAnimate>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 580, mb: 5 }}
          >
            A mix of public products and confidential internal systems. Company names are
            omitted on purpose—focus is on the problem, stack, and impact.
          </Typography>
        </BlurFade>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2.5,
          }}
        >
          {profile.projects.map((project, index) => (
            <BlurFade key={project.title} delay={index * 0.06}>
              <ProjectCard project={project} cardBg={cardBg} isDark={isDark} />
            </BlurFade>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
  cardBg: string;
  isDark: boolean;
}

function ProjectCard({ project, cardBg, isDark }: ProjectCardProps): React.JSX.Element {
  const theme = useTheme();
  const isInternal = project.visibility === "internal";

  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }} style={{ height: "100%" }}>
      <MagicCard
        className="h-full"
        gradientFrom="#3A5A78"
        gradientTo="#A67C52"
        gradientColor={isDark ? "rgba(58,90,120,0.12)" : "rgba(58,90,120,0.08)"}
        gradientOpacity={0.45}
      >
        <Box
          sx={{
            p: { xs: 2.5, md: 3 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            ["--magic-card-bg" as string]: cardBg,
            bgcolor: cardBg,
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              alignSelf: "flex-start",
              px: 1.1,
              py: 0.4,
              mb: 1.5,
              borderRadius: 999,
              border: `1px solid ${theme.palette.divider}`,
              color: "text.secondary",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {isInternal ? (
              <LockOutlinedIcon sx={{ fontSize: 14 }} />
            ) : (
              <PublicOutlinedIcon sx={{ fontSize: 14 }} />
            )}
            {isInternal ? "Internal" : "Public"}
          </Box>

          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "1.2rem", md: "1.3rem" },
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.7 }}>
            {project.summary}
          </Typography>

          <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600, mb: 1.5 }}>
            {project.role}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2 }}>
            {project.stack.map((item) => (
              <Box
                key={item}
                sx={{
                  px: 1.1,
                  py: 0.4,
                  borderRadius: 999,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "text.secondary",
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(20,24,31,0.03)",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          <Typography variant="body2" sx={{ mb: 1.5, color: "text.primary", fontWeight: 500 }}>
            {project.outcome}
          </Typography>

          {project.note ? (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mb: 1.5, fontStyle: "italic" }}
            >
              {project.note}
            </Typography>
          ) : null}

          <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", gap: 1 }}>
            {project.links && project.links.length > 0 ? (
              project.links.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon />}
                  size="small"
                  sx={{ borderRadius: 999, px: 2 }}
                  variant="outlined"
                >
                  {link.label}
                </Button>
              ))
            ) : (
              <Typography variant="caption" color="text.secondary">
                Available to discuss under NDA
              </Typography>
            )}
          </Box>
        </Box>
      </MagicCard>
    </motion.div>
  );
}

export default ProjectsSection;
