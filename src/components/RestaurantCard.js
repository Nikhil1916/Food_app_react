import { CDN_LINK } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.data;
  return (
    <div data-testid="resCard" className="rest-card rounded-lg p-4 w-[270px] min-h-[350px] flex flex-col  items-center bg-gray-100 hover:bg-gray-200 mb-6">
      <img className="rest-img rounded" src={CDN_LINK + cloudinaryImageId} />
      <h3 className="font-bold py-1">{name}</h3>
      <h4 className="ml-6">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return ({resData}) => (
    <div className="relative">
      <label className="absolute bg-black text-white p-2 rounded left-[-25px]">Promoted</label>
      <RestaurantCard resData={resData} />
    </div>
  );
}

export default RestaurantCard;
