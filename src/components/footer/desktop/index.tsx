const desktopList = [
  "My Account",
  "Marketplace",
  "Resources",
  "Company",
  "Profile",
  "Explore",
  "Help Center",
  "About Us",
  "Collections",
  "All NFT",
  "Partners",
  "Careers",
  "Favourites",
  "Collectible",
  "Blog",
  "Support",
  "Settings",
  "All World",
  "Newsletter",
  "Rankings",
];

const FooterDesktopList = () => {
  return (
    <div>
      <ul className="grid xl:grid-rows-5 grid-col-1 xl:grid-flow-col gap-2 font-[Poppins] xl:place-items-end">
        {desktopList.map((item: any, index: number) => {
          const isFirstItem = index % 5 === 0;
          return (
            <li
              className={`text-xs cursor-pointer hover:text-[#FFFFFF] ${
                isFirstItem ? "text-[#FFFFFF]" : "text-[#B8B8B8]"
              }`}
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

export default FooterDesktopList;
