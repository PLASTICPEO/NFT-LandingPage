import PopularCollectionsCard from "./card";
import john from "../../assets/popular-collection-creators/john6.svg";
import johnCollection from "../../assets/popular-collections/john-collection.svg";
import ivan from "../../assets/popular-collection-creators/ivan.svg";
import ivanCollection from "../../assets/popular-collections/ivan-collection.svg";
import chris from "../../assets/popular-collection-creators/chris.svg";
import chrisCollection from "../../assets/popular-collections/chris-collection.svg";
import david from "../../assets/plasticpeo.jpeg";
import davidCollection from "../../assets/popular-collections/david-collection.svg";
import jim from "../../assets/popular-collection-creators/jim.svg";
import jimCollection from "../../assets/popular-collections/jim-collection.svg";
import monnys from "../../assets/popular-collection-creators/monnys.svg";
import monnysCollection from "../../assets/popular-collections/monnys-collection.svg";

const popularCollectionData = [
  {
    collectionItem: johnCollection,
    creatorImg: john,
    creatorName: "@john6",
    collectionName: "Monkey Collection",
  },
  {
    collectionItem: ivanCollection,
    creatorImg: ivan,
    creatorName: "@ivanpetrov",
    collectionName: "Monkey Collection",
  },
  {
    collectionItem: chrisCollection,
    creatorImg: chris,
    creatorName: "@chriskostov",
    collectionName: "Monkey Collection",
  },
  {
    collectionItem: davidCollection,
    creatorImg: david,
    creatorName: "@PLASTICPEO",
    collectionName: "Monkey Collection",
  },
  {
    collectionItem: jimCollection,
    creatorImg: jim,
    creatorName: "@jim45",
    collectionName: "Monkey Collection",
  },
  {
    collectionItem: monnysCollection,
    creatorImg: monnys,
    creatorName: "@monnys",
    collectionName: "Monkey Collection",
  },
];

const PopularCollections = () => {
  return (
    <div className="container mx-auto my-8 ">
      <p className="flex items-center justify-center my-10 xl:text-5xl text-xl px-2 text-center text-[#FFFFFF] font-Roboto">
        POPULAR COLLECTIONS
      </p>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 mx-4">
        {popularCollectionData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <PopularCollectionsCard
                collectionItem={item.collectionItem}
                creatorImg={item.creatorImg}
                creatorName={item.creatorName}
                collectionName={item.collectionName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCollections;
