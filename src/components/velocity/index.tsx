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
    <div className="my-20 py-10 relative ">
      <div className="w-1/2 h-[1px]  bg-gradient-to-r from-[#E025CE] my-4"></div>
      <div className="text-center">
        <div className="flex  items-center justify-between xl:px-20 px-2 ">
          {companiesLogos.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col xl:items-center  xl:justify-between justify-center space-y-2 text-[#FFFFFF] font-Poppins text-sm font-thin  "
              >
                <img
                  className="hover:scale-105 cursor-pointer w-12"
                  src={item.icon}
                  alt={item.name}
                />
                <p className="w-max xl:block hidden">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-[1px] bg-gradient-to-l  from-lime-300 my-4"></div>
    </div>
  );
};

export default CompanyLogos;
