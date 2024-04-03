import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SchimmerCard from "./SchimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { Link } from "react-router-dom";

const searchStyle = {
  padding: "20px",
};

export default Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setfilteredRestList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    console.log("Use effect called");
    fetchData();
  }, []);
  console.log("rerenderd body?");

  const filterFnc = (val) => {
    return Number(val?.data?.avgRating) > 4.3;
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const json = await data.json();
    setRestList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (r) => {
          const data = {
            ...r?.info,
          };
          return { data };
        }
      )
    );
    setfilteredRestList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (r) => {
          const data = {
            ...r?.info,
          };
          return { data };
        }
      )
    );
  };
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  if(!isOnline) {
    return (
      <div>
        <h1>Looks like You Are Offline!! Please check your connection.</h1>
      </div>
    )
  }
  // console.log("")
  return (
    <div className="body">
      <div className="filter" style={searchStyle}>
        <div className="search">
          <input
            placeholder="Search"
            type="text"
            className="search-box"
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e?.target?.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRest = restList?.filter(
                (d) =>
                  d?.data?.name
                    ?.toLowerCase()
                    ?.indexOf(searchVal?.toLocaleLowerCase()) > -1
              );
              console.log(filteredRest);
              setfilteredRestList(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restList?.filter(filterFnc);
            setfilteredRestList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestList?.length > 0 ? (
          filteredRestList.map((r) => {
            return (
              <Link key={r?.data?.id} to={"/restaurants/" + r?.data?.id}>
                <RestaurantCard resData={r} />{" "}
              </Link>
            );
          })
        ) : (
          <SchimmerCard count={10} />
        )}
      </div>
    </div>
  );
};
