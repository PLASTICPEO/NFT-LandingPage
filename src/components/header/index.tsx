import CustomButton from "../button";
import Logo from "../logo";
import NavMenu from "../navigator";

const menuItems = ["Home", "MarketPlace", "Creators", "Resource"];

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#000000] to-violet-900/65 z-50">
      <div className="hidden xl:flex items-center justify-between px-20 h-20">
        <Logo />
        <NavMenu items={menuItems} />
        <CustomButton name="Connect Wallet" />
      </div>
    </div>
  );
};

export default Header;
