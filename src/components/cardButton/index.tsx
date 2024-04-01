import { CardButtonPropsTypes } from "./index.types";

const CardButton: React.FC<CardButtonPropsTypes> = ({ title }) => {
  return (
    <button className="px-3.5 py-2 bg-[black] text-[#FFFFFF] font-[Poppins] text-sm rounded-md cursor-pointer">
      {title}
    </button>
  );
};

export default CardButton;
