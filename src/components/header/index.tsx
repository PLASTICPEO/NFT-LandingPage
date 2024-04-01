import CustomButton from "../button";
import Logo from "../logo";
import NavMenu from "../menu";

const menuItems = ["Home", "MarketPlace", "Creators", "Resource"];

const Header = () => {
  return (
    <div className="hidden xl:flex items-center justify-between px-20 h-20">
      <Logo />
      <NavMenu items={menuItems} />
      <CustomButton name="Connect Wallet" />
    </div>
  );
};

export default Header;
