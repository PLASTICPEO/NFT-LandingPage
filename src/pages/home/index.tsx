import HeroBanner from "../../components/herobanner";
import MonkeyTreasures from "../../components/monkeyTreasures";
import TrendingAuctions from "../../components/trendingAuctions";
import CompanyLogos from "../../components/velocity";

const Home = () => {
  return (
    <div className="grid grid-cols-1 px-4 gap-4 overflow-hidden">
      <HeroBanner />
      <CompanyLogos />
      <TrendingAuctions />
      <MonkeyTreasures />
    </div>
  );
};

export default Home;
