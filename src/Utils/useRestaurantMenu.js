import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const resData = await fetch(MENU_API + resId);

    const resInfoJson = await resData.json();

    setResInfo(resInfoJson?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
