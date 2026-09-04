/**
 * @file full-stack-page.tsx — Lazy route entry for Full Stack Angular/Ionic profile
 * @feature portfolio
 */
import PortfolioPage from "./portfolio-page";
import { mobileProfile } from "../data/mobile-profile";

/** Full Stack CV route — shareable at /full-stack. */
function FullStackPage(): React.JSX.Element {
  return <PortfolioPage profile={mobileProfile} />;
}

export default FullStackPage;
