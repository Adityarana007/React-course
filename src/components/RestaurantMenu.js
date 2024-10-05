import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RatingComponentSvg from "../common/RatingComponentSvg";
import { useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../utils/constants";
import { GET_MENU } from "../services/apiUrls";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);
  const resInfo = restaurantInfo?.data?.cards[2]?.card?.card?.info;
  const menuList = restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
  ?.card?.card?.itemCards;

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-center mb-6 px-4">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-serif font-extrabold">{resInfo?.name}</h1>
          <div className="rest-inner-container border border-solid rounded-lg bg-white px-4 py-4 max-w-md">
            <div className="flex">
              <RatingComponentSvg />
              <p className="font-serif">
                {resInfo?.avgRating} ({resInfo?.totalRatingsString}){" "}
                <span style={{ color: "gray" }}>•</span>{" "}
                {resInfo?.costForTwoMessage}{" "}
              </p>
            </div>
            <p className="text-[#ffa700] underline font-serif">
              {resInfo?.cuisines?.join(", ")}
            </p>
            <div>
              <div className="font-serif">
                <p className="outlet-detaail-text">Outlet</p>
                <p className="areaName-detail-text">{resInfo?.areaName}</p>
              </div>
              <p className="font-serif">
                {resInfo?.sla?.slaString.toLowerCase()}
              </p>
            </div>
          </div>

          {
            menuList !== undefined ? (
              <div className="mt-4">
            <h2 className="text-lg font-serif font-extrabold">
              Recommended ({menuList?.length})
            </h2>
            <ul>
              {menuList?.map((item) => (
                <div className="mt-4 flex">
                  <div className="w-[600px]">
                    <li className="text-lg font-semibold font-serif" key={item?.card?.info?.id}>{item?.card?.info.name}</li>
                    <p className="rupee-text">
                      ₹{" "}
                      {item?.card?.info?.defaultPrice / 100 ||
                        item?.card?.info?.price / 100}
                    </p>
                    <p className="font-serif">
                      {item?.card?.info?.description !== undefined ? item?.card?.info?.description : 'Please check or taste this dish.'}
                    </p>
                  </div>

                  <div> 
                    {
                     item?.card?.info?.imageId !== undefined ? (
                      <img
                      alt="img-logo"
                      className=" h-28 w-28 rounded-lg"
                      src={IMG_BASE_URL + item?.card?.info?.imageId}
                    />
                     ) : (
                      <div className="h-28 w-28 rounded-lg bg-gray-200"></div>
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


