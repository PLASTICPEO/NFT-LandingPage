import { useEffect, useState } from "react";
import UpArrow from "../../assets/icons/arrowUp.svg";

const Up = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollPositionTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollY = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [scrollY]);
  return (
    <>
      {window.scrollY > 100 ? (
        <div
          className="xl:hidden fixed bottom-3 right-3 w-14 h-14 bg-[#FFFFFF]/15 active:bg-[#FFFFFF]/15   rounded-full flex item-center justify-center z-50"
          onClick={() => scrollPositionTop()}
        >
          <img className="color-[#FFFFFF]" src={UpArrow} alt="Arrow up" />
        </div>
      ) : null}
    </>
  );
};

export default Up;
