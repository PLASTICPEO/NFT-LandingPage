import ParallaxComponent from "./parallax";
import BitcoinPlus from "../../assets/crypto-market/bitcoin.svg";
import Binance from "../../assets/crypto-market/Binance.svg";
import Okex from "../../assets/crypto-market/Okex.svg";
import Terra from "../../assets/crypto-market/Terra.svg";
import Covalent from "../../assets/crypto-market/Covalent.svg";
import Solana from "../../assets/crypto-market/Solana.svg";
import Etherium from "../../assets/crypto-market/Etherium.svg";
import MetaMask from "../../assets/crypto-market/MetaMask.svg";

const items = [
  {
    icon: Solana,
  },
  {
    icon: BitcoinPlus,
  },
  {
    icon: Binance,
  },
  {
    icon: Okex,
  },
  {
    icon: Terra,
  },
  {
    icon: Covalent,
  },
  {
    icon: MetaMask,
  },
  {
    icon: Etherium,
  },
];

const CryptoMarket = () => {
  return (
    <div className="mb-20">
      <p className="text-4xl text-[#FFFFFF] text-center font-[Roboto] pb-20">
        WE WORK WITH WORLD'S TOP COMPANIES
      </p>
      <ParallaxComponent baseVelocity={-5}>
        <div className="flex items-center justify-center space-x-4 ">
          {items.map((item: any, index: number) => {
            return (
              <img
                className="xl:w-max w-44 "
                key={index}
                src={item.icon}
                alt=""
              />
            );
          })}
        </div>
      </ParallaxComponent>
      <ParallaxComponent baseVelocity={5}>
        <div className="flex items-center justify-center space-x-4">
          {items.map((item: any, index: number) => {
            return (
              <img
                className="xl:w-max w-44 "
                key={index}
                src={item.icon}
                alt=""
              />
            );
          })}
        </div>
      </ParallaxComponent>
    </div>
  );
};

export default CryptoMarket;
