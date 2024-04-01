import TrendingCard from "./card";
import Monkey43 from "../../assets/monkeys/TrendingMonkey43.svg";
import Monkey01 from "../../assets/monkeys/Monkey01.svg";
import Monkey25 from "../../assets/monkeys/TrendingMonkey25.svg";
import Monkey55 from "../../assets/monkeys/TrendingMonkey55.svg";
import { motion } from "framer-motion";
import CustomButton from "../button";

const TrendingCardsData = [
  {
    nft: Monkey43,
    title: "Monkey #43",
    author: "By Gloria Milt",
    eth: "12.1",
    time: "7h:4m:8s",
  },
  {
    nft: Monkey01,
    title: "Monkey #01",
    author: "By Stefan Brown",
    eth: "18.3",
    time: "5h:7m:8s",
  },
  {
    nft: Monkey25,
    title: "Monkey #55",
    author: "By Chris Kostov",
    eth: "12.6",
    time: "2h:3m:5s",
  },
  {
    nft: Monkey55,
    title: "Monkey #25",
    author: "By Laura Petrova",
    eth: "17.8",
    time: "9h:2m:4s",
  },
];

const slideCotainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1.5,
    },
  },
};

const TrendingAuctions = () => {
  return (
    <div className="container mx-auto xl:my-10 my-4">
      <p className="flex items-center justify-center xl:text-5xl text-2xl text-[#FFFFFF] font-Poppins mb-60">
        TRENDING AUCTIONS
      </p>
      <div className="grid xl:grid-cols-4 grid-rows-1 grid-cols-1 xl:gap-4 gap-40 xl:px-0 px-2">
        {TrendingCardsData.map((item: any, index: number) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col space-y-2 xl:row-span-2 "
              variants={slideCotainerVariant}
              initial="hidden" // Set the initial variant
              whileInView="visible"
            >
              <TrendingCard
                NFT={item.nft}
                title={item.title}
                author={item.author}
                eth={item.eth}
                time={item.time}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center justify-center m-10">
        <CustomButton name="VIEW MORE" />
      </div>
    </div>
  );
};

export default TrendingAuctions;
