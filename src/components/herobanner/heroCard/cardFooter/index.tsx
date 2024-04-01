import ethIcon from "../../../../assets/icons/ethIcon.svg";
import CardButton from "../../../cardButton";

const CardFooter = () => {
  return (
    <div className="flex items-center justify-between bg-[#FFFFFF] bg-opacity-5 backdrop-blur-sm p-2">
      <div className="space-y-2 font-[Poppins]">
        <div className="flex flex-col">
          <p className="text-lg text-[#FFFFFF]">Monkey Monster</p>
          <p className="text-sm text-[#B8B8B8]">By Stefan Brown</p>
        </div>

        <div className="flex items-center space-x-2 text-[#FFFFFF]">
          <img className="w-8 h-8" src={ethIcon} alt="etherium" />
          <p>18.3 ETH</p>
        </div>
      </div>
      <div>
        <CardButton title="Place a Bid" />
      </div>
    </div>
  );
};

export default CardFooter;
