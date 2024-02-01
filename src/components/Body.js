import restaurant from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const searchStyle = {
    padding: "20px"
}
// console.log(restaurant);
export default Body = () => (
    <div className="body">
      <div className="search" style={searchStyle}>
        <input type="text" placeholder="Search" className="input-text" />
      </div>
      <div className="res-container">
      {
        restaurant.map((r)=>{
          return <RestaurantCard resData={r} />
        })
      }
      </div>
    </div>
  );
