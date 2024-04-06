import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

const navItems = ["Home", "MarketPlace", "Creators", "Resource"];

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <div>
      <div className="xl:hidden fixed top-3 left-3 z-50">
        <Hamburger
          color={!toggle ? "#FFFFFF" : "#76F7BF"}
          duration={0.8}
          onToggle={(toggled) => setToggle(toggled)}
        />
      </div>

      {toggle ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 flex items-center justify-center  w-full h-96 bg-gradient-to-tl from-violet-500 to-stone-500 shadow-lg shadow-stone-500"
        >
          <ul className="flex flex-col items-center justify-center space-y-10 w-full">
            {navItems.map((item: any, index: number) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "anticipate",
                    duration: 2,
                    x: { duration: 1.5 },
                  }}
                  key={index}
                  className="text-[#FFFFFF]/80 text-xl font-Reddit border-b-[1px] w-full text-center p-2"
                >
                  {item}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
