import { motion, useScroll } from "framer-motion";
import HeroBanner from "../../components/herobanner";
import MonkeyTreasures from "../../components/monkeyTreasures";
import TrendingAuctions from "../../components/trendingAuctions";
import CompanyLogos from "../../components/velocity";
import HowToBecomeNftCreator from "../../components/nftCreator";
import PopularCreator from "../../components/popularCreator";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="grid grid-cols-1 gap-4 overflow-hidden">
      <HeroBanner />
      <CompanyLogos />
      <TrendingAuctions />
      <MonkeyTreasures />
      <HowToBecomeNftCreator />
      <PopularCreator />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      ></motion.div>
    </div>
  );
};

export default Home;
