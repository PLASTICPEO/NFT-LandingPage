import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

const navItems = ["Home", "MarketPlace", "Creators", "Resource"];

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    setToggle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="xl:hidden absolute top-3 left-3 z-50">
        <Hamburger
          toggled={toggle}
          toggle={setToggle}
          color="#FFFFFF"
          duration={0.8}
          size={28}
        />
      </div>

      {toggle ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-0 left-0 flex items-center justify-center w-full h-96 bg-gradient-to-tl from-violet-500 to-stone-500 shadow-lg shadow-[#FFFFFF]"
        >
          <ul className="flex flex-col items-center justify-center space-y-6 w-full">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "anticipate",
                  duration: 1,
                  x: { duration: 1.5 },
                }}
                className="text-[#FFFFFF]/80 text-xl font-Reddit w-full text-center p-2"
              >
                <a href={`#${item}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
