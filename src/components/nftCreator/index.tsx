import wallet from "../../assets/creator-card-icons/wallet-icon.svg";
import network from "../../assets/creator-card-icons/network-icon.svg";
import image from "../../assets/creator-card-icons/image-icon.svg";
import NftCreatorCard from "./card";

const CreatorNFTcardDate = [
  {
    icon: wallet,
    title: "CONNECT YOUR WALLET",
    body: "Connect your Wallet, use the pink button in the left of the Header. Now you can use any feature.",
  },

  {
    icon: network,
    title: "CREATE ARTWORK",
    body: "Create your NFT collection. Add social links, profile and banner image. Set a secondary sales fee for your artwork.",
  },

  {
    icon: image,
    title: "UPLOAD YOUR NFTS",
    body: "Upload. Add a title & description. Costumize your NFT’s, properties, stats and unlockable content.",
  },
];

const HowToBecomeNftCreator = () => {
  return (
    <div className="relative">
      <div className="container mx-auto w-full">
        <div>
          <p className="flex items-center justify-center xl:text-5xl text-xl px-2 text-center text-[#FFFFFF] font-Poppins">
            HOW TO BECOME MONKEY NFT CREATOR
          </p>
        </div>
        <div className="xl:flex items-center justify-center m-8 xl:space-x-16">
          {CreatorNFTcardDate.map((item: any, index: number) => {
            return (
              <div key={index} className={`${index === 1 ? "mb-20" : "mt-0"}`}>
                <NftCreatorCard
                  title={item.title}
                  icon={item.icon}
                  body={item.body}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-[1px] bg-gradient-to-l from-green-800 my-4"></div>
    </div>
  );
};

export default HowToBecomeNftCreator;
