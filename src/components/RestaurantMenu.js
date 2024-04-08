import { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuList from "./RestaurantMenuList";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import SchimmerAccordian from "./SchimmerAccordian";

const RestaurantMenu = () => {
  const [toggle, setToggle] = useState(false);
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  if (restInfo == null) {
    return <SchimmerAccordian count={10} />;
  }
  const categories = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')?.map(c=>c?.card?.card);
  console.log(categories);

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
      {categories?.map((_,i) => {
        return (
          <div className="flex justify-center" key={i}>
          {
          _?.itemCards?.length > 0 ?
             <div
              onClick={() => {
                _.is_active = !_.is_active;
                // console.log(_);
                setToggle(!toggle);
              }}
              className="accordion"  key={i}
            >
              <div className="accordion-item">
                <h2 className="accordion-title">{_.title}</h2>
                <div className={_.is_active ? "accordion-content" : "d-none"}>
                <RestaurantMenuList itemCards={_.itemCards} />
                </div>
              </div>
            </div> : ''
          }
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
