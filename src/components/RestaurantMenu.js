import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RatingComponentSvg from "../common/RatingComponentSvg";
import { useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuList, setMenuList] = useState(null);
  const { resId } = useParams();
  console.log("resId", resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy-la3g.onrender.com/full/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.981448338218446&lng=76.86849609017372&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const respJson = await data.json();
    console.log(
      "menuResponse",
      respJson.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setMenuList(
      respJson.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setResInfo(respJson.data?.cards[2]?.card?.card?.info);
  };



  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="menu">
        <div>
          <h1 className="restaurant-detail-name">{resInfo?.name}</h1>
          <div className="rest-inner-container">
            <div className="rating-detail-container">
              <RatingComponentSvg />
              <p className="rating-detail-text">
                {resInfo?.avgRating} ({resInfo?.totalRatingsString}){" "}
                <span style={{ color: "gray" }}>•</span>{" "}
                {resInfo?.costForTwoMessage}{" "}
              </p>
            </div>
            <p className="cuisines-detail-text" style={{ paddingLeft: 20 }}>
              {resInfo?.cuisines?.join(", ")}
            </p>
            <div>
              <div className="outlet-area-div">
                <p className="outlet-detaail-text">Outlet</p>
                <p className="areaName-detail-text">{resInfo?.areaName}</p>
              </div>
              <p className="deliverytime-detail-text">
                {resInfo?.sla?.slaString.toLowerCase()}
              </p>
            </div>
          </div>

          {
            menuList !== undefined ? (
              <div className="recommended-div">
            <h2 className="recommended-text">
              Recommended ({menuList?.length})
            </h2>
            <ul>
              {menuList?.map((item) => (
                <div className="info-container">
                  <div>
                    <li key={item?.card?.info?.id}>{item?.card?.info.name}</li>
                    <p className="rupee-text">
                      ₹{" "}
                      {item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100}
                    </p>
                    <p className="description-text">
                      {item?.card?.info?.description}
                    </p>
                  </div>

                  <div> 
                    {
                     item?.card?.info?.imageId !== undefined && (
                      <img
                      alt="img-logo"
                      className="menu-img"
                      src={IMG_BASE_URL + item?.card?.info?.imageId}
                    />
                     ) 
                    }
                    
                  </div>
                </div>
              ))}
            </ul>
          </div>
            ) : (
              <div>
                <h1>No Items Available</h1>
              </div>
            )
          }
          
        </div>
      </div>

      {/* image */}
    </div>
  );
};

export default RestaurantMenu;


