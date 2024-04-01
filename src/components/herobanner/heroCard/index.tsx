import CardTimer from "./timer";
import HeroMonkey from "../../../assets/monkeys/HeroMonkey.svg";
import CardFooter from "./cardFooter";

const HeroCard = () => {
  return (
    <div className="flex flex-col items-center justify-between rounded-md bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-pink-500/25 relative h-full">
      <CardTimer />
      <img
        className="absolute bottom-0 xl:w-[500px]"
        src={HeroMonkey}
        alt="hero monkey"
      />
      <div className="absolute bottom-0  w-full">
        <CardFooter />
      </div>
    </div>
  );
};
export default HeroCard;
