import facebook from "../../../assets/social/facebook.svg";
import pinterest from "../../../assets/social/pinterest.svg";
import discord from "../../../assets/social/discord.svg";
import youtube from "../../../assets/social/youtube.svg";
import tiktok from "../../../assets/social/tiktok.svg";

const sociaIcons = [
  { icon: facebook, title: "facebook" },
  { icon: pinterest, title: "pinterest" },
  { icon: discord, title: "discord" },
  { icon: youtube, title: "youtube" },
  { icon: tiktok, title: "tiktok" },
];

const SocialSection = () => {
  return (
    <div className="flex  space-x-2">
      {sociaIcons.map((item: any, index: number) => {
        return (
          <img
            key={index}
            className="w-8 hover:scale-105 cursor-pointer"
            src={item.icon}
            alt={item.title}
          />
        );
      })}
    </div>
  );
};

export default SocialSection;
