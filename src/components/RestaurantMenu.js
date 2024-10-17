import React, { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RatingComponentSvg from "../common/RatingComponentSvg";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);
  const resInfo = restaurantInfo?.data?.cards[2]?.card?.card?.info;
  const [recommendedList, setRecommendedList] = useState([]);
  const [restaurantAddress, setRestaurantAddress] = useState([]);
  const [restaurantLicense, setRestaurantLicense] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  const filteredCategories =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  useEffect(() => {
    const liscenseIndex =
      restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.length - 2;
    const addressIndex =
      restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.length - 1;
    // console.log(
    //   "RestaurantInfo",
    //   restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    setRecommendedList(
      restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[2]?.card?.card
    );
    setRestaurantLicense(
      restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
        liscenseIndex
      ]?.card?.card
    );
    setRestaurantAddress(
      restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
        addressIndex
      ]?.card?.card
    );
  }, [restaurantInfo]);

  return restaurantInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-center mb-6 my-10">
        <div className="max-w-sm md:max-w-lg">
          <h1 className="text-2xl font-popins font-extrabold mb-6">
            {resInfo?.name}
          </h1>
          <div className="border border-solid rounded-lg bg-white px-4 py-4 max-w-full shadow-md">
            <div className="flex items-center">
              <RatingComponentSvg />
              <p className="font-popins ml-2">
                {resInfo?.avgRating} ({resInfo?.totalRatingsString}){" "}
                <span style={{ color: "gray" }}>•</span>{" "}
                {resInfo?.costForTwoMessage}{" "}
              </p>
            </div>
            <p className="text-[#ffa700] underline font-popins">
              {resInfo?.cuisines?.join(", ")}
            </p>
            <div>
              <div className="font-popins flex items-center">
                <p className="outlet-detaail-text">Outlet</p>
                <p className="areaName-detail-text ml-2 text-sm text-gray-500">
                  {resInfo?.areaName}
                </p>
              </div>
              <p className="font-popins">
                {resInfo?.sla?.slaString?.toLowerCase()}
              </p>
            </div>
          </div>

          {recommendedList?.itemCards !== undefined ? (
            <>
              {/* Separator */}
              <div className="h-4 my-8 bg-gray-200 w-full"></div>
              {/* Render Restaurant Menu */}
              {filteredCategories?.map((category, index) => (
                // controlled component
                <RestaurantCategory
                  item={category?.card?.card}
                  showItems={index === showIndex}
                  setShowIndexMethod={() => {
                    if(showIndex !== null && index === showIndex){
                      setShowIndex(null)
                    } else {
                      setShowIndex(index)
                    }
                }}
                />
              ))}
              {/* Restaurant Address Code Starts*/}
              <div className="border border-solid rounded-lg bg-gray-100 px-4 py-4 max-w-full shadow-md my-8">
                <div className="flex items-center">
                  <p className="font-popins ml-2 text-sm text-gray-400">
                    {restaurantLicense.text}
                  </p>
                </div>
                <div className="h-[1] bg-gray-300 my-4"></div>
                <p className="font-popins ml-2 text-sm text-gray-400">
                  {restaurantAddress.name}
                </p>
                <p className="font-popins ml-2 text-sm text-gray-400">
                  {restaurantAddress.completeAddress}
                </p>
                <div className="h-[1] bg-gray-300 my-4"></div>
                <div></div>
              </div>
              {/* Restaurant Address Code Ends*/}
            </>
          ) : (
            <div className="py-10">
              <h1 className="font-bold text-gray-400 text-2xl text-center">
                No Items Available at the moment
              </h1>
            </div>
          )}
        </div>
      </div>

      {/* image */}
    </div>
  );
};

export default RestaurantMenu;
