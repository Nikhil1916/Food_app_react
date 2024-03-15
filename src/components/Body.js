import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SchimmerCard from "./SchimmerCard"

const searchStyle = {
    padding: "20px"
}


export default Body = () => {
  const [restList , setRestList] = useState([]);
  const filterFnc = (val) => {
    return Number(val?.data?.avgRating)>=4;
  }

  useEffect(()=>{
    console.log("Use effect called");
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestList(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(r=>{
      const data  = {
        ...r?.info
      }
      return {data};
    }));
  }

  return (
    <div className="body">
      <div className="search" style={searchStyle}>
        <button onClick={()=> {
          const filteredList = restList?.filter(filterFnc);
          setRestList(filteredList)
        } }>Filter 4 stars</button>
      </div>
      <div className="res-container">
      {
        restList?.length > 0 ? restList.map((r)=>{
          return <RestaurantCard key={r?.data?.id} resData={r} />
        }) : <SchimmerCard count = {10} />
      }
      </div>
    </div>
  );
};
