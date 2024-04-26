import { useEffect, useState , useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import SchimmerCard from "./SchimmerCard";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";

const searchStyle = {
  padding: "20px",
};

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestList, setfilteredRestList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  // high order component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUserName, setUserInfo} = useContext(UserContext);
  useEffect(() => {
    // console.log("Use effect called");
    fetchData();
  }, []);
  // console.log("rerenderd body?");

  const filterFnc = (val) => {
    // console.log(val?.data?.avgRating>4.3);
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
  // console.log("Body Re render");
  return (
    <div className="body">
      <div className="flex gap-3 justify-center items-center" style={searchStyle}>
        <div className="search flex gap-2 box-border items-center">
          <input
            placeholder="Search"
            type="text"
            data-testid="searchInput"
            className="h-8 grow-0 text-center search-box border border-gray-100 p-1"
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e?.target?.value);
            }}
          />
          <button
            className="rounded bg-gray-300 px-4 h-8"
            onClick={() => {
              const filteredRest = restList?.filter(
                (d) =>
                  d?.data?.name
                    ?.toLowerCase()
                    ?.indexOf(searchVal?.toLocaleLowerCase()) > -1
              );
              // console.log(filteredRest);
              setfilteredRestList(filteredRest);
            }}
          >
            <span className="text-white">Search</span>
          </button>
        </div>
        {filteredRestList.length}
        <button
          className="rounded filter-btn bg-gray-300 px-4 h-8 text-white"
          onClick={() => {
            const filteredList = restList?.filter(filterFnc);
            setfilteredRestList(filteredList);
          }}
        >
        Top Rated Restaurants
        </button>
        <input className="h-8 grow-0 text-center search-box border border-gray-100 p-1" value={loggedInUserName} onChange={(e)=>{
          // console.log(e.target.value);
          setUserInfo({name:e?.target?.value});
        }} />
        
      </div>
      <div className="res-container flex flex-wrap gap-8 justify-center items-center">
        {filteredRestList?.length > 0 ? (
          filteredRestList.map((r, i) => {
            {/* console.log(r); */}
            return (
              <Link key={r?.data?.id} to={"/restaurants/" + r?.data?.id}>
              {/* if the restaurant is promoted then add a promoted label */}
              {
                i%3==0 ? <RestaurantCardPromoted resData={r} /> : <RestaurantCard resData={r} />
              }
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
export default Body;