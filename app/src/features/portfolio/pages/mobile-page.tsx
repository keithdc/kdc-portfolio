/**
 * @file mobile-page.tsx — Lazy route entry for Angular/Ionic profile
 * @feature portfolio
 */
import PortfolioPage from "./portfolio-page";
import { mobileProfile } from "../data/mobile-profile";

/** Angular/Ionic CV route — shareable at /mobile. */
function MobilePage(): React.JSX.Element {
  return <PortfolioPage profile={mobileProfile} />;
}

export default MobilePage;
