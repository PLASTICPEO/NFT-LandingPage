import Cardano from "../../assets/platform-icons/CardanoBadge.svg";
import Bitcoin from "../../assets/platform-icons/BitcoinPlusBadge.svg";
import BinanceSmart from "../../assets/platform-icons/BinanceSmartChainBadge.svg";
import BinanceUsd from "../../assets/platform-icons/BinanceUsdBadge.svg";
import MetaMask from "../../assets/platform-icons/MetaMaskBadge.svg";
import Solana from "../../assets/platform-icons/SolanaBadge.svg";

const companiesLogos = [
  {
    icon: Cardano,
    name: "Cardano",
  },
  {
    icon: Bitcoin,
    name: "Bitcoin Plus",
  },
  {
    icon: BinanceSmart,
    name: "Binance Smart",
  },
  {
    icon: BinanceUsd,
    name: "Binance USD",
  },
  {
    icon: MetaMask,
    name: "Meta Mask",
  },
  {
    icon: Solana,
    name: "Solana",
  },
];

const CompanyLogos = () => {
  return (
    <div className="my-20 py-10">
      <div className="w-full h-[1px] bg-[red] bg-gradient-to-r from-[#E025CE] xl:from-50% from-30% to-[#581c87] xl:to-90% to-60% mb-6"></div>
      <div className="text-center">
        <div className="xl:flex  xl:items-center xl:justify-between px-20">
          {companiesLogos.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex xl:items-center justify-center xl:justify-between space-x-2 text-[#FFFFFF] font-Poppins text-sm font-thin  "
              >
                <img
                  className="hover:scale-105 cursor-pointer"
                  src={item.icon}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[red] bg-gradient-to-l from-[#E025CE] xl:from-50% from-30% to-[#581c87] xl:to-90% to-60% mt-6"></div>
    </div>
  );
};

export default CompanyLogos;
