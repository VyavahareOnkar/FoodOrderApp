import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, locality, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="Restaurants  m-4">
      <div className="card w-[250] bg-amber-100 p-2 text-center">
        <img
          alt="Pizza hut"
          className="w-[200] justify-self-center-safe "
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold">{name}</h3>
        <p>{avgRating} stars</p>
        <p>{costForTwo.split("for two")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
