import { Swiper, SwiperSlide } from "swiper/react";
import monkey from "../../assets/monkeys/HeroMonkey.svg";
import VanessaHurt from "../../assets/creators/vanesaHurt.svg";
import AlexaBrains from "../../assets/creators/AlexaBrains.svg";
import AlexandraSmith from "../../assets/creators/AlexandraSmith.svg";
import JasonBradley from "../../assets/creators/JasonBradley.svg";
import JohnOnyx from "../../assets/creators/JohnOnyx.svg";
import MichaelleCort from "../../assets/creators/MichaelleCort.svg";
import cover from "../../assets/creator-card-cover/VanessaHurtCover.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {
  EffectFade,
  FreeMode,
  Mousewheel,
  Pagination,
  Zoom,
} from "swiper/modules";

const CreatorData = [
  {
    name: "Vanessa Hurt",
    cover: cover,
    creator: VanessaHurt,
    about: "I am a professional digital art creator",
    artWorks: "312",
    followers: "1123",
    following: "250",
  },
  {
    name: "Alexa Brains",
    cover: cover,
    creator: AlexaBrains,
    about: "Specialized in creating monkey NFTs",
    artWorks: "1502",
    followers: "341",
    following: "332",
  },
  {
    name: "Alexandra Smith",
    cover: cover,
    creator: AlexandraSmith,
    about: "Marketing epert and NFT creator",
    artWorks: "254",
    followers: "1123",
    following: "231",
  },
  {
    name: "Jason Bradley",
    cover: cover,
    creator: JasonBradley,
    about: "I am a professional digital creator",
    artWorks: "563",
    followers: "295",
    following: "111",
  },
  {
    name: "John Onyx",
    cover: cover,
    creator: JohnOnyx,
    about: "I am a professional illstrator playing with photoshop",
    artWorks: "862",
    followers: "225",
    following: "191",
  },
  {
    name: "Michaelle Cort",
    cover: cover,
    creator: MichaelleCort,
    about: "I create different NFT proects with illustrator",
    artWorks: "201",
    followers: "843",
    following: "782",
  },
];

const PopularCreator = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full overflow-hidden mb-8">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        onSlideChange={(e) => console.log(e)}
        // slidesPerView={5}
        mousewheel={true}
        scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, EffectFade]}
        className="xl:w-10/12 w-full flex items-center justify-center"
      >
        {CreatorData.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col xl:space-y-8 space-y-14 font-Poppins group relative shadow-xl text-white  rounded-xl p-2  xl:mx-0 mx-2   overflow-hidden cursor-pointer bg-gradient-to-r from-violet-800 to-indigo-900 hover:from-violet-800/65">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="mx-auto relative xl:w-fit w-full "
                  src={item.cover}
                  alt=""
                />
                <img
                  className="mx-auto  xl:w-11 w-20 absolute xl:top-20 top-32"
                  src={item.creator}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-xs text-[#FFFFFF] font-bold">{item.name}</p>
                <p className="text-xs text-[#B8B8B8] font-Roboto w-40 text-center">
                  {item.about}
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
                    <p className="text-[#FFFFFF]">{item.artWorks}</p>
                  </div>
                  <div className="text-[#FFFFFF] flex flex-col items-center justify-center text-xs">
                    <p className="text-[#B8B8B8]">Followers</p>
                    <p className="text-[#FFFFFF]">{item.followers}</p>
                  </div>
                  <div className="text-[#FFFFFF] flex flex-col items-center justify-center text-xs">
                    <p className="text-[#B8B8B8]">Following</p>
                    <p className="text-[#FFFFFF]">{item.following}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCreator;
