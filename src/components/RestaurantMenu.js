import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import SchimmerAccordian from "./SchimmerAccordian";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex , setShowIndex] = useState(0);
  // console.log(showIndex);
  const restInfo = useRestaurantMenu(resId);
  // console.log(restInfo, " ----->rest info<----- ");
  if (restInfo == null) {
    return (
      <div className="flex justify-center">
        <SchimmerAccordian count={10} />
      </div>
    );
  }
  const categories =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter(
        (c) =>
          c?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      ?.map((c) => c?.card?.card);
  const { name, cuisines, costForTwoMessage, city } =
    restInfo?.cards?.[2]?.card?.card?.info;
  return restInfo === null ? (
    <SchimmerAccordian />
  ) : (
    <div className="rest-menu flex flex-col gap-3 ml-8 mt-8 text-center">
      <h1 className="text-lg font-bold">{name}</h1>
      <p className="font-semibold">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <p className="font-semibold">{city}</p>
      {categories?.map((_, i) => {

        {/* controlled component */}
        return <RestaurantCategory key={i} _={_} index={i} toggle={i==showIndex} showIndex={showIndex} setShowIndex={(ind)=>setShowIndex(ind)} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
