import CustomButton from "../button";
import { useSubscribe } from "./hooks/useSubscribe";

const SubscribeComponent = () => {
  const { handleSubmit, handleChange, formData } = useSubscribe();
  return (
    <div className="flex items-center justify-center relative w-full h-96 container mx-auto my-10">
      <div className="absolute top-0 left-0 w-[3px] h-1/2 bg-gradient-to-b from-[#A8189A] rounded-b-lg opacity-90"></div>
      <div className="absolute top-0 left-0 w-1/2 h-[3px] bg-gradient-to-r from-[#A8189A] rounded-b-lg opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-[3px] h-1/2 bg-gradient-to-t  from-green-800 rounded-t-lg opacity-90"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-[3px] bg-gradient-to-l from-green-800 rounded-t-lg opacity-90"></div>
      <div className="flex flex-col items-center justify-center space-y-6">
        <p className="text-4xl text-[#FFFFFF] font-Poppins">
          Never Miss a Drop
        </p>
        <p className="text-sm text-[#FFFFFF]/55 text-center w-96 font-Poppins font-thin">
          Sign up your Email Adress and never miss anything. We will update you
          once per week!
        </p>
        <div className="flex items-center justify-center space-x-2">
          <div className="relative">
            <input
              onChange={handleChange}
              value={formData.email}
              className="text-[#FFFFFF]/85 px-2.5 font-Poppins text-sm h-8 outline-none m-1.5 placeholder-gray-900 placeholder:Roboto placeholder:text-xl placeholder:text-[#FFFFFF]/55  bg-transparent w-72"
              type="text"
              name="email"
              placeholder="Email adress"
            />

            <div className="absolute top-0 left-0 w-[3px] h-1/2 bg-gradient-to-b from-[#FFFFFF] rounded-b-lg opacity-90 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1/2 h-[3px] bg-gradient-to-r from-[#FFFFFF] rounded-b-lg opacity-90 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[3px] h-1/2 bg-gradient-to-t  from-[#FFFFFF] rounded-t-lg opacity-90 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-[3px] bg-gradient-to-l from-[#FFFFFF] rounded-t-lg opacity-90 rounded-full"></div>
          </div>
          <CustomButton
            triggerProps={{ onClick: handleSubmit }}
            name={"Send"}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;
