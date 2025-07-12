import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setresData] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [searchData, setsearchData] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("Inside useeffect", resData);
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
    setsearchData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("rendering!");

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurants"
          className="searchbar"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            console.log("search btn clicked!");
            const filterData = resData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(resData);
            setsearchData(filterData);
          }}
        >
          Search
        </button>
      </div>

      <div className="toplist">
        <button
          className="btn"
          id="top10"
          onClick={() => {
            const filteredData = resData.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setsearchData(filteredData);
          }}
        >
          Click for Top Restaurants
        </button>
      </div>
      <div className="cardbox">
        {searchData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
