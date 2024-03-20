import { useEffect, useState } from "react";
import SchimmerCard from "./SchimmerCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {

    const [ restInfo , setRestInfo ] = useState(null);
    const {resId} = useParams();
    // console.log(params);
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    async function fetchMenu() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    }
    if(restInfo == null) {
        return <SchimmerCard count = {10} />
    }
    console.log(restInfo?.cards?.[0]?.card?.card?.info);
    const { name , cuisines , costForTwoMessage, city } = restInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = restInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card;
    console.log(restInfo);
    return restInfo ===  null ? <SchimmerCard/> : (
        <div className="rest-menu">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ") } - {costForTwoMessage}</p>
        <p>{city}</p>
        {/* <h3>{costForTwoMessage}</h3> */}
        <h2>Menu</h2>
        <ul>
            {
                itemCards?.map((data,i)=>{
                    return <li style={{marginLeft:'2em', lineHeight:'2em'}} key={data?.card?.info?.id}>{data?.card?.info?.name} - {"Rs." + (data?.card?.info?.price/100 || data?.card?.info?.defaultPrice/100)}</li>
                })
            }
        </ul>
        </div>
    )
}

export default RestaurantMenu;