import React, { useState } from "react";
import ItemsList from "./ItemsList";
import UpArrowSvgComp from "../common/UpArrowSvg";
import DownArrowSvg from "../common/DownArrowSvg";

const RestaurantCategory = ({ item , showItems, setShowIndexMethod}) => {
  const handleClick = () => {
    setShowIndexMethod(); 
  }

  return (
    <div>
      {/* Res Category */}
      <>
        {item !== undefined ? (
          <div className="mt-4 ">
            {/* Header */}
            <div className="flex justify-between" onClick={handleClick}>
              <h2 className="text-lg font-popins font-extrabold">
                {item?.title} ({item?.itemCards?.length})
              </h2>
              <span className="hover:cursor-pointer pr-4">{!showItems ? <DownArrowSvg/> : <UpArrowSvgComp/>}</span>
            </div>
            {/* Accordian Body */}
            {showItems && <ItemsList item={item}/>}
              <div className="h-4 my-4 bg-gray-200 w-full"></div>
            
          </div>
        ) : null}
      </>
    </div>
  );
};

export default RestaurantCategory;
