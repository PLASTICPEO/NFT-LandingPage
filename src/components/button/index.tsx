import { CustomButtonTypes } from "./customButton.types";

const CustomButton: React.FC<CustomButtonTypes> = ({ name }) => {
  return (
    <button className="flex items-center justify-center  shadow-[rgba(189,_36,_230,_0.24)_0px_3px_8px] font-[Poppins] border-[#4AED52] border-2 rounded-md px-6 py-2 text-[#FFFFFF] hover:bg-[#BD24E6] cursor-pointer">
      {name}
    </button>
  );
};

export default CustomButton;
