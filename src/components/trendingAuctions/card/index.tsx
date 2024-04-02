import { TrendingCardPropsTypes } from "./index.props.types";
import ethIcon from "../../../assets/icons/ethIcon.svg";
import CardButton from "../../cardButton";
import CardTimer from "../../herobanner/heroCard/timer";
import { motion } from "framer-motion";

const TrendingCard: React.FC<TrendingCardPropsTypes> = ({
  NFT,
  title,
  author,
  time,
  eth,
}) => {
  return (
    <div className="flex flex-col items-center justify-end rounded-md bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-pink-500/25 relative h-80">
      <motion.div
        className="absolute bottom-32 cursor-pointer"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.8 }}
      >
        <img src={NFT} alt={title} />
      </motion.div>

      <div className="flex item-center justify-between h-36 w-full bg-[#FFFFFF] bg-opacity-5 backdrop-blur-xl p-4">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <p className="text-[#FFFFFF] text-bold font-Poppins">{title}</p>
            <p className="text-[#B8B8B8] text-thin font-Roboto text-sm">
              {author}
            </p>
          </div>

          <div className="flex items-center space-x-2 text-[#FFFFFF]">
            <img className="w-8 h-8" src={ethIcon} alt="etherium" />
            <p>{eth} ETH</p>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="text-center text-[#FFFFFF] font-Roboto text-sm border-2 p-2 rounded-md">
            <p>{time}</p>
          </div>
          <CardButton title="Place a Bid" />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
