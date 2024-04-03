import { useEffect, useState } from "react";
import SchimmerCard from "./SchimmerCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantMenuList from "./RestaurantMenuList";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [restInfo, setRestInfo] = useState(null);
  const [restMenuList, setRestMenuList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);
  useEffect(()=>{
    // setRestInfo(restInfo);
  },[]);
  if (restInfo == null) {
    return <SchimmerCard count={10} />;
  }
  const arr = restMenuList;
  if (restMenuList?.length < 2) {
    const { itemCards, title } =
      restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        ?.card;
    restMenuList?.length < 2 &&
      arr.push({
        itemCards,
        title,
        is_active: true,
      });
  }

  const { name, cuisines, costForTwoMessage, city } =
    restInfo?.cards?.[2]?.card?.card?.info;
  if (restMenuList?.length < 2) {
    const { itemCards, title } =
      restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
        ?.card;
    arr.push({
      itemCards,
      title,
      is_active: false,
    });
    setRestMenuList(arr);
  }
  return restInfo === null ? (
    <SchimmerCard />
  ) : (
    <div className="rest-menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <p>{city}</p>
      {restMenuList?.map((_,i) => {
        return (
          <div
            onClick={() => {
              _.is_active = !_.is_active;
              console.log(_);
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
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
