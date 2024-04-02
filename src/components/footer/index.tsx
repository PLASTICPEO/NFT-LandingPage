import Logo from "../logo";
import SocialSection from "./social";
import LegalFooter from "./Legal";
import BriefDescription from "./about";
import FooterDesktopList from "./desktop";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[1px] bg-[red] bg-gradient-to-r from-[#E025CE] xl:from-50% from-30% to-[#581c87] xl:to-90% to-60% "></div>
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-4 px-20 py-8 ">
        <div className="flex flex-col space-y-5">
          <Logo />
          <BriefDescription />
          <SocialSection />
        </div>
        <div className="xl:col-span-3 col-span-4">
          <FooterDesktopList />
        </div>
        <div className="col-span-4">
          <LegalFooter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
