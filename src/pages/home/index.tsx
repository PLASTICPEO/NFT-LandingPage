import { motion, useScroll } from "framer-motion";
import HeroBanner from "../../components/herobanner";
import MonkeyTreasures from "../../components/monkeyTreasures";
import TrendingAuctions from "../../components/trendingAuctions";
import CompanyLogos from "../../components/velocity";
import HowToBecomeNftCreator from "../../components/nftCreator";
import PopularCreator from "../../components/popularCreator";
import PopularCollections from "../../components/popularCollections";
import SubscribeComponent from "../../components/subscribe";
import ParallaxText from "../../components/cryptoMarket";
import MobileMenu from "../../components/menu";

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
      <PopularCollections />
      <SubscribeComponent />
      <MobileMenu />
      <ParallaxText baseVelocity={-5}>
        <div className="border-[1px] p-4 w-72 text-3xl font-Reddit">
          Framer Motion
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        <div className="border-[1px] p-4 w-72 text-3xl font-Reddit">
          Framer Motion
        </div>
      </ParallaxText>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      ></motion.div>
    </div>
  );
};

export default Home;
