import { NavMenuProps } from "./NavMenuProps.types";

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
  return (
    <div>
      <ul className="flex items-center justify-center space-x-12">
        {items?.map((item: string, index: number) => {
          return (
            <li
              className="text-[#B8B8B8] font-[Poppins] text-sm hover:text-[#FFFFFF] cursor-pointer"
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
