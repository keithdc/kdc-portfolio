/**
 * @file tech-lead-page.tsx — Lazy route entry for Tech Lead profile
 * @feature portfolio
 */
import PortfolioPage from "./portfolio-page";
import { techLeadProfile } from "../data/tech-lead-profile";

/** Tech Lead CV route — shareable at /tech-lead. */
function TechLeadPage(): React.JSX.Element {
  return <PortfolioPage profile={techLeadProfile} />;
}

export default TechLeadPage;
