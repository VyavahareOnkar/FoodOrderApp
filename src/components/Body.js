import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [resData, setresData] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [searchData, setsearchData] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67350&lng=75.90510&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setresData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setsearchData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("body rendering!");

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like you lost your Internet Connection, Please try again!</h1>
      </div>
    );
  }

  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body  my-4">
      <div className="search flex justify-center  ">
        <div className="toplist">
          <button
            className="btn  m-2 bg-amber-500 hover:bg-amber-700 text-white p-2 rounded-xl"
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
        <input
          type="text"
          placeholder="Search Restaurants"
          className="searchbar border-2 m-2 p-2"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="btn m-2 bg-amber-500 hover:bg-amber-700 text-white p-2 rounded-xl"
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

      <div className="cardbox flex flex-wrap items-center justify-center">
        {searchData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
