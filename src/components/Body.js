import Searchbar from "./Searchbar";
import RestaurantCard from "./RestaurantCard";
import { restaurantsData } from "../Utils/apiData";

const Body = () => {
  return (
    <div className="body">
      <Searchbar />

      <div className="cardbox">
        {restaurantsData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
