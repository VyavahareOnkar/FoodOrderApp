import Searchbar from "./Searchbar";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [resData, setresData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67350&lng=75.90510&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setresData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resData.length === 0) {
    console.log("shimmer is working");
    return <Shimmer />;
  }

  return (
    <div className="body">
      <Searchbar />
      <div className="toplist">
        <button
          className="btn"
          id="top10"
          onClick={() => {
            const filteredData = resData.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setresData(filteredData);
          }}
        >
          Click for Top Restaurants
        </button>
      </div>
      <div className="cardbox">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
