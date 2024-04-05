import { Swiper, SwiperSlide } from "swiper/react";
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

import { EffectFade, Mousewheel } from "swiper/modules";
import PopularCreatorCard from "./card";

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
    <div className="flex items-center justify-center flex-col h-full overflow-hidden mb-16">
      <div>
        <p className="xl:text-5xl text-2xl text-[#FFFFFF] my-10 text-center font-[Roboto]">
          POPULAR CREATORS
        </p>
      </div>
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
            <PopularCreatorCard
              name={item.name}
              cover={item.cover}
              creator={item.creator}
              about={item.about}
              artWorks={item.artWorks}
              followers={item.followers}
              following={item.following}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCreator;
