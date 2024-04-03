import { motion } from "framer-motion";
import { CreatorCardPropsTypes } from "./index.PropsTypes";

const NftCreatorCard: React.FC<CreatorCardPropsTypes> = ({
  icon,
  title,
  body,
}) => {
  return (
    <motion.div
      className=" p-20 h-fit xl:w-96 h-fit cursor-pointer relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      <div className="absolute top-0 left-0 w-[3px] h-1/2 bg-gradient-to-b from-green-800 rounded-b-lg opacity-90"></div>
      <div className="absolute top-0 left-0 w-1/2 h-[3px] bg-gradient-to-r from-green-800 rounded-b-lg opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-[3px] h-1/2 bg-gradient-to-t from-[#A8189A] rounded-t-lg opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-[3px] bg-gradient-to-l from-[#A8189A] rounded-t-lg opacity-90"></div>
      <div className="flex flex-col items-center justify-center text-[#FFFFFF] xl:space-y-2 space-y-4">
        <img className="w-8 h-8" src={icon} alt={title} />
        <p className="text-sm w-max">{title}</p>
        <p className="text-xs text-center font-thin text-wrap">{body}</p>
      </div>
    </motion.div>
  );
};

export default NftCreatorCard;
