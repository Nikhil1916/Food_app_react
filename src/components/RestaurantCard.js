import {CDN_LINK} from "../utils/constant"
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.data;
    return (<div className="rest-card">
      <img className="rest-img" src={CDN_LINK + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString} </h4>
    </div>)
  }

  export default RestaurantCard;