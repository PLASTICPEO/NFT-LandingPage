import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import CustomButton from "../button";
import HeadLine from "./headline";
import HeroCard from "./heroCard";
import HowItWork from "./howitwork";
import { useEffect, useRef, useState } from "react";

const slideCotainerVariant = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const slideMonkeyCard = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const HeroBanner = () => {
  return (
    <div className="grid xl:grid-cols-2 xl:grid-rows-4 grid-cols-1 gap-8 xl:pt-28 pt-20 container mx-auto">
      <motion.div
        className="flex flex-col space-y-2 xl:row-span-2 "
        variants={slideCotainerVariant}
        initial="hidden" // Set the initial variant
        whileInView="visible"
      >
        <HeadLine />
        <div className="flex items-center space-x-4 ">
          <CustomButton name={"Connect Wallet"} />
          <HowItWork />
        </div>
      </motion.div>
      <motion.div
        className="xl:h-full h-96 row-span-3"
        variants={slideMonkeyCard}
        initial="hidden" // Set the initial variant
        whileInView="visible"
      >
        <HeroCard />
      </motion.div>
    </div>
  );
};

export default HeroBanner;
