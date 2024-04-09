import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import SchimmerAccordian from "./SchimmerAccordian";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [toggle, setToggle] = useState(false);
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  if (restInfo == null) {
    return (
      <div className="flex justify-center">
        {" "}
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
  categories.forEach((cat, i) => {
    if (i == 0) cat["is_active"] = true;
    else cat["is_active"] = false;
  });
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
        return <RestaurantCategory key={i} _={_} i={i} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
