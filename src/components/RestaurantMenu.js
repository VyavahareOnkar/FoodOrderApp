import Shimmer from "./Shimmer";
import { ITEM_URL } from "../Utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import useOnlineStatus from "../Utils/useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();

  console.log("resInfo from Restaurant Menu component", resInfo);
  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like you lost your Internet Connection, Please try again!</h1>
      </div>
    );
  }

  if (resInfo === null) {
    return <Shimmer />;
  } else {
    const {
      name,
      avgRating,
      areaName,
      totalRatingsString,
      costForTwoMessage,
      cuisines,
      sla,
    } = resInfo.cards[2]?.card?.card?.info;

    console.log("resInfo is:", name, avgRating, areaName);

    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;

    if (itemCards === undefined) {
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card;
    }
    console.log("items are", itemCards);

    return (
      <div className="resData">
        <div className="resInfo">
          <h1>{name}</h1>
          <p>
            {avgRating} ({totalRatingsString}) , {costForTwoMessage},{" "}
          </p>
          <p> {cuisines.join(", ")}</p>
          <p> Outlet: {areaName}</p>
          <p> {sla.slaString}</p>
        </div>

        <div className="res-MenuItems">
          {itemCards === undefined ? (
            <h1 className="warn-banner">
              "We are currently Closed! Apologies for Inconvenience!"
            </h1>
          ) : (
            itemCards.map((item) => {
              return (
                <ul key={item?.card?.info?.id}>
                  <li>{item?.card?.info?.name || item.title}</li>
                  <li>{item?.card?.info?.description}</li>
                  <li>
                    ₹
                    {item?.card?.info?.finalPrice / 100 ||
                      item?.card?.info?.defaultPrice / 100 ||
                      item?.card?.info?.price / 100 ||
                      item?.card?.info?.costForTwoMessage ||
                      "not available"}
                  </li>

                  {
                    <img
                      src={
                        ITEM_URL +
                        (item?.card?.info?.imageId ||
                          item?.card?.info?.cloudinaryImageId)
                      }
                      alt={item?.card?.info?.name || item.title}
                    />
                  }
                </ul>
              );
            })
          )}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
