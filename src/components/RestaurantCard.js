import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, locality, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="Restaurants">
      <div className="card">
        <img alt="Pizza hut" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <p>{avgRating} stars</p>
        <p>{costForTwo.split("for two")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
