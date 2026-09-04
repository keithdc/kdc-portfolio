/**
 * @file full-stack-page.tsx — Lazy route entry for Full Stack Angular/Ionic profile
 * @feature portfolio
 */
import PortfolioPage from "./portfolio-page";
import { fullStackProfile } from "../data/full-stack-profile";

/** Full Stack CV route — shareable at /full-stack. */
function FullStackPage(): React.JSX.Element {
  return <PortfolioPage profile={fullStackProfile} />;
}

export default FullStackPage;
