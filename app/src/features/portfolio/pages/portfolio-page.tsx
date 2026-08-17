/**
 * @file portfolio-page.tsx — Shared portfolio layout driven by a profile
 * @feature portfolio
 * @dependencies section components, react-router-dom
 */
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import NavDock from "../components/nav-dock";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import ExperienceSection from "../components/experience-section";
import ProjectsSection from "../components/projects-section";
import SkillsSection from "../components/skills-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import type { PortfolioProfile } from "../data/types";

interface PortfolioPageProps {
  profile: PortfolioProfile;
}

/** Full single-page portfolio composition for a given CV profile. */
function PortfolioPage({ profile }: PortfolioPageProps): React.JSX.Element {
  const location = useLocation();

  useEffect(() => {
    document.title = `${profile.title} · Keith Dale Cordova`;
  }, [profile.title]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const el = document.querySelector(location.hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [location.hash, profile.id]);

  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden", pb: { xs: 8, md: 0 } }}>
      <Navbar profile={profile} />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <ExperienceSection profile={profile} />
      <ProjectsSection profile={profile} />
      <SkillsSection profile={profile} />
      <ContactSection profile={profile} />
      <Footer profile={profile} />
      <NavDock />
    </Box>
  );
}

export default PortfolioPage;
