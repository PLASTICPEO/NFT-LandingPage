import { PopularCollectionPropsTypes } from "./index.types";
import HeartIcon from "../../../assets/icons/heartIcon.svg";
import favoriteFill from "../../../assets/icons/favoriteFill.svg";
import { useState } from "react";

const PopularCollectionsCard: React.FC<PopularCollectionPropsTypes> = ({
  collectionItem,
  collectionName,
  creatorImg,
  creatorName,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="relative p-4">
      <div className="absolute top-0 left-0 w-[3px] h-1/2 bg-gradient-to-b from-[#A8189A] rounded-b-lg opacity-90"></div>
      <div className="absolute top-0 left-0 w-1/2 h-[3px] bg-gradient-to-r from-[#A8189A] rounded-b-lg opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-[3px] h-1/2 bg-gradient-to-t  from-green-800 rounded-t-lg opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-[3px] bg-gradient-to-l from-green-800 rounded-t-lg opacity-90"></div>
      <div className="flex flex-col items-center justify-center space-y-6 ">
        <div>
          <img src={collectionItem} alt={collectionName} />
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center space-x-2">
            <div onClick={() => favoriteToggle()}>
              <img
                className="rounded-lg w-14"
                src={creatorImg}
                alt={creatorName}
              />
            </div>

            <div className="text-[#FFFFFF] font-Roboto">
              <p>{collectionName}</p>
              <div className="flex items-center justify-center space-x-2 text-xs">
                <p className="text-[#A3A3A3]">Created by:</p>
                <p className="text-[#BD24E6]">{creatorName}</p>
              </div>
            </div>
          </div>

          <div onClick={() => favoriteToggle()}>
            <img
              className="w-8 cursor-pointer"
              src={isFavorite ? favoriteFill : HeartIcon}
              alt={creatorName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollectionsCard;
