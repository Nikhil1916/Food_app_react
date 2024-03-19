import { useEffect, useState } from "react";
import SchimmerCard from "./SchimmerCard";


const RestaurantMenu = () => {

    const [ restInfo , setRestInfo ] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    async function fetchMenu() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER`);
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

    return restInfo ===  null ? <SchimmerCard/> : (
        <div className="rest-menu">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ") } - {costForTwoMessage}</p>
        <p>{city}</p>
        {/* <h3>{costForTwoMessage}</h3> */}
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Biryani</li>
            <li>Biryani</li>
            <li>Biryani</li>
            <li>Biryani</li>
        </ul>
        </div>
    )
}

export default RestaurantMenu;