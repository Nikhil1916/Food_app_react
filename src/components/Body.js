import { useState } from "react";
import restaurant from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const searchStyle = {
    padding: "20px"
}


export default Body = () => {
  const [restList , setRestList] = useState(restaurant);
  const filterFnc = (val) => {
    return Number(val?.data?.avgRating)>=4;
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
        restList.map((r)=>{
          return <RestaurantCard key={r?.data?.id} resData={r} />
        })
      }
      </div>
    </div>
  );
};
