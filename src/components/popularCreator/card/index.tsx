import { CreatorCardPropsTypes } from "./index.types";

const PopularCreatorCard: React.FC<CreatorCardPropsTypes> = ({
  cover,
  creator,
  name,
  about,
  artWorks,
  followers,
  following,
}) => {
  return (
    <div className="flex flex-col xl:space-y-8 space-y-14 font-Poppins group relative shadow-xl text-white  rounded-xl p-2  xl:mx-0 mx-8   overflow-hidden cursor-pointer bg-gradient-to-r from-indigo-900/10 to-violet-900 hover:from-violet-800/65">
      <div className="flex flex-col items-center justify-center">
        <img className="mx-auto relative xl:w-fit w-full " src={cover} alt="" />
        <img
          className="mx-auto  xl:w-12 w-18 absolute xl:top-24 top-28"
          src={creator}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-xs text-[#FFFFFF] font-bold">{name}</p>
        <p className="text-xs text-[#B8B8B8] font-Roboto w-40 text-center">
          {about}
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="border-[1px] text-xs px-6 py-1.5 rounded-md w-24 h-8 text-center hover:bg-[#FFFFFF] hover:text-[Black] shadow-md hover:shadow-[#FFFFFF]">
            Follow
          </button>
          <button className="border-[1px] text-xs px-6 py-1.5 rounded-md w-24 h-8 text-center hover:bg-[#FFFFFF] hover:text-[Black] shadow- hover:shadow-[#FFFFFF]">
            Message
          </button>
        </div>
        <div className="flex items-center justify-between space-x-6">
          <div className="text-[#FFFFFF] flex flex-col items-center justify-center text-xs">
            <p className="text-[#B8B8B8]">Art Works</p>
            <p className="text-[#FFFFFF] font-bold">{artWorks}</p>
          </div>
          <div className="text-[#FFFFFF] flex flex-col items-center justify-center text-xs">
            <p className="text-[#B8B8B8]">Followers</p>
            <p className="text-[#FFFFFF] font-bold">{followers}</p>
          </div>
          <div className="text-[#FFFFFF] flex flex-col items-center justify-center text-xs">
            <p className="text-[#B8B8B8]">Following</p>
            <p className="text-[#FFFFFF] font-bold">{following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCreatorCard;
