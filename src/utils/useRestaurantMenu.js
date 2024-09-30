import React, { useEffect, useState } from "react";
import { GET_MENU } from "../services/apiUrls";


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(GET_MENU(resId));
    const respJson = await data.json();
    console.log("respJson__", respJson);
    setResInfo(respJson);
  };
  return resInfo;
};

export default useRestaurantMenu;
