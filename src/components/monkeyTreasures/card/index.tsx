import { TreasureCardPropsTypes } from "./index.types";
import greenNFTlogo from "../../../assets/icons/green_logos_ethereum.svg";
import heartIcon from "../../../assets/icons/heartIcon.svg";
import favoriteFill from "../../../assets/icons/favoriteFill.svg";
import CardButton from "../../cardButton";
import { useState } from "react";

const TreasureCard: React.FC<TreasureCardPropsTypes> = ({
  ownName,
  ownPhoto,
  nft,
  category,
  price,
  nftName,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-[#E025CE] text-[#FFFFFF] font-Roboto rounded-md p-2 bg-opacity-10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img src={ownPhoto} alt="User Photo" />
          <p>{ownName}</p>
        </div>
        <div onClick={() => favoriteToggle()}>
          <img
            className="w-4 cursor-pointer hover:scale-125"
            src={isFavorite ? favoriteFill : heartIcon}
            alt="Like"
          />
        </div>
      </div>
      <img
        className="flex items-center justify-center w-full"
        src={nft}
        alt={nftName}
      />
      <div>
        <p className="text-lg mt-2">{nftName}</p>
        <p className="text-[#B8B8B8] font-thin">{category}</p>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={greenNFTlogo} alt="Green NFT Logo" />
            <div>
              <p className="text-[#B8B8B8]">Price</p>
              <p className="text-sm">{price} ETH</p>
            </div>
          </div>

          <CardButton title="Place a Bid" />
        </div>
      </div>
    </div>
  );
};

export default TreasureCard;
