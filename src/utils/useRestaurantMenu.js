import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
    const [restInfo, setRestInfo] = useState(null);
    // fetchdata
    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestInfo(json.data);
    }
    // console.log(restInfo);
    return restInfo;
}

export default useRestaurantMenu;