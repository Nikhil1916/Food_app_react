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
    return <div className="flex justify-center"> <SchimmerAccordian count={10} /></div>;
  }
  const categories = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')?.map(c=>c?.card?.card);
  categories.forEach((cat, i)=>{
    if(i==0) cat['is_active'] = true;
    else cat['is_active'] = false
  })
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
          <div className="w-6/12 mx-auto" key={i}>
          {
          _?.itemCards?.length > 0 ?
             <div
              onClick={() => {
                _.is_active = !_.is_active;
                console.log(_);
                setToggle(!toggle);
              }}
              className="accordion"  key={i}
            >
              <div className="accordion-item">
              <div className="bg-gray-50 p-4 shadow-lg my-4 flex justify-between items-center">
                <h2 className="accordion-title font-bold">{_.title}  ({_?.itemCards?.length})</h2>
                <span className="font-bold">^</span>
              </div>
                <div className={_.is_active ? "accordion-content block bg-gray-50 p-4 flex flex-col gap-2 font-normal " : "hidden"}>
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
