import howitwork from "../../../assets/icons/howItWorkIcon.svg";

const HowItWork = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-xl text-[#FFFFFF] font-[Poppins] cursor-pointer ">
      <img className="w-10 hover:scale-105" src={howitwork} alt="how it work" />
      <p>HOW IT WORK</p>
    </div>
  );
};

export default HowItWork;
