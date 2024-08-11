import { useState } from "react";
import { resObj } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [restaurants, setRestaurants] = useState(resObj)

  const onTopRatedClick = () => {
    console.log(resObj);
    const filteredRestaurants = resObj.filter(item => item.info.avgRating > 4)
    setRestaurants(filteredRestaurants);  

  }
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
           onClick={onTopRatedClick}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {
              restaurants?.map(item => (
                  <RestaurantCard
                  key={item.info.id}
                  resData={item.info}
                />
              ))
          }
  
        </div>
      </div>
    );
  };

  export default Body;