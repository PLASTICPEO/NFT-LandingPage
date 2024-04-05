import TreasureCard from "./card";
import almond from "../../assets/treasure-monkey/almond.svg";
import almondOwn from "../../assets/users/Ellipse1.svg";
import bayl from "../../assets/treasure-monkey/bayl.svg";
import baylOwn from "../../assets/users/Ellipse2.svg";
import arab from "../../assets/treasure-monkey/arab.svg";
import arabOwn from "../../assets/users/Ellipse3.svg";
import diamond from "../../assets/treasure-monkey/diamond.svg";
import diamondOwn from "../../assets/users/Ellipse4.svg";
import tiger from "../../assets/treasure-monkey/tiger.svg";
import tigerOwn from "../../assets/users/Ellipse5.svg";
import galactic from "../../assets/treasure-monkey/galactic.svg";
import galacticOwn from "../../assets/users/Ellipse6.svg";
import black from "../../assets/treasure-monkey/black.svg";
import blackOwn from "../../assets/users/Ellipse7.svg";
import tropic from "../../assets/treasure-monkey/tropic.svg";
import tropicOwn from "../../assets/users/Ellipse8.svg";
import colorful from "../../assets/treasure-monkey/colorful.svg";
import colorfulOwn from "../../assets/users/Ellipse9.svg";
import hell from "../../assets/treasure-monkey/hell.svg";
import hellOwn from "../../assets/users/Ellipse10.svg";
import CustomButton from "../button";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useRef } from "react";

const TreasureCardDate = [
  {
    nft: almond,
    nftName: "Almond Monkey",
    category: "Limited Edition",
    price: "13.1",
    ownName: "Monkey #448",
    ownPhoto: almondOwn,
  },
  {
    nft: bayl,
    nftName: "Bayl Universe",
    category: "Limited Edition",
    price: "19.2",
    ownName: "Monkey #346",
    ownPhoto: baylOwn,
  },
  {
    nft: arab,
    nftName: "Arab Classy",
    category: "Limited Edition",
    price: "12.3",
    ownName: "Monkey #412",
    ownPhoto: arabOwn,
  },
  {
    nft: diamond,
    nftName: "Diamond Carl",
    category: "Limited Edition",
    price: "17.7",
    ownName: "Monkey #325",
    ownPhoto: diamondOwn,
  },
  {
    nft: tiger,
    nftName: "Tiger Monkey",
    category: "Limited Edition",
    price: "10.5",
    ownName: "Monkey #269",
    ownPhoto: tigerOwn,
  },
  {
    nft: galactic,
    nftName: "Galactic Timmy",
    category: "Limited Edition",
    price: "12.1",
    ownName: "Monkey #504",
    ownPhoto: galacticOwn,
  },
  {
    nft: black,
    nftName: "Black Bob",
    category: "Limited Edition",
    price: "7.3",
    ownName: "Monkey #117",
    ownPhoto: blackOwn,
  },
  {
    nft: tropic,
    nftName: "Tropic Monkey",
    category: "Limited Edition",
    price: "6.4",
    ownName: "Monkey #104",
    ownPhoto: tropicOwn,
  },
  {
    nft: colorful,
    nftName: "Colorful Angel",
    category: "Limited Edition",
    price: "6.8",
    ownName: "Monkey #302",
    ownPhoto: colorfulOwn,
  },
  {
    nft: hell,
    nftName: "Hell Monkey",
    category: "Limited Edition",
    price: "12.6",
    ownName: "Monkey #226",
    ownPhoto: hellOwn,
  },
];

const slideCotainerVariant = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const MonkeyTreasures = () => {
  const y = useScroll().scrollYProgress;
  const yTransformed = useParallax(y, 100);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < previousScrollY.current) {
        slideCotainerVariant.hidden.y = 150;
      } else {
        slideCotainerVariant.hidden.y = -150;
      }
      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4">
        <motion.div
          style={{ y: yTransformed }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center justify-center space-y-2 xl:mb-20 mb-2"
        >
          <p className="flex items-center justify-center text-center xl:text-5xl text-2xl text-[#FFFFFF] font-Poppins">
            MONTHLY MONKEY TREASURES
          </p>
          <p className="text-sm font-thin text-[#FFFFFF] max-w-[600px] text-center">
            Discover one of the most popular NFT creations picked for you. Place
            your bid and bi the first to have these treasures. All of the
            artworks are limited selections.
          </p>
        </motion.div>
        <div className="grid xl:grid-cols-5 grid-cols-1 xl:gap-4 gap-8">
          {TreasureCardDate.map((item: any, index: number) => {
            return (
              <motion.div
                key={index}
                className="flex flex-col space-y-2 xl:row-span-2 cursor-pointer"
                variants={slideCotainerVariant}
                initial="hidden"
                whileInView="visible"
              >
                <TreasureCard
                  ownName={item.ownName}
                  ownPhoto={item.ownPhoto}
                  category={item.category}
                  nftName={item.nftName}
                  nft={item.nft}
                  price={item.price}
                />
              </motion.div>
            );
          })}
        </div>
        <div className="flex items-center justify-center m-10">
          <CustomButton name="VIEW MORE" />
        </div>
      </div>
      <div className="w-1/2 h-[1px]  bg-gradient-to-r from-[#E025CE]   my-4"></div>
    </div>
  );
};

export default MonkeyTreasures;
