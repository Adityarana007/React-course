import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { GET_RESTAURANTS } from "../services/apiUrls";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);


  // Whenever a state variable updates, react triggers a reconciliation cycle (re-renders the component)
  console.log("Body comp re-renders");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RESTAURANTS);
    const response = await data.json();
    console.log("resp", response.data);
    setRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onTopRatedClick = () => {
    const filteredRestaurantss = filteredRestaurants?.filter(
      (item) => item.info.avgRating > 4
    );
    setFilteredRestaurants(filteredRestaurantss);
    setShowTopRated(true)
  };

  const onSearch = () => {
    const filteredRestaurants = restaurants.filter((item) => {
      console.log("item.info.name", item.info.name.includes("a"));
      return (
        item.info.name.toLowerCase().includes(searchInput?.toLowerCase()) ||
        item.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchInput?.toLowerCase())
      );
    });
    console.log("filteredRestaurants", filteredRestaurants);
    // setRestaurants(filteredRestaurants);
    setFilteredRestaurants(filteredRestaurants);
  };

  const onChange = (val) => {
    // console.log('type',typeof val?.target?.value)
    setSearchInput(val?.target?.value);

    if (val?.target?.value === "") {
      fetchData();
    }
  };

  const onResetFilter = () => {
    setShowTopRated(false);
    setFilteredRestaurants(restaurants)
  }

  // get online status from custom hook
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like your are offline!! Please check your internet connection.
      </h1>
    );

  // conditional rendering

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-col md:flex-row justify-between px-8 items-center h-20 mt-4 md:mt-0">
        <div className="">
          <div className="">
          <button className={`text-black-600 font-serif ${showTopRated ? 'bg-orange-300 text-white' :'bg-stone-300'}  px-4 py-2 rounded-md hover:bg-orange-300 hover:scale-105 hover:text-white`} onClick={onTopRatedClick}>
            Top Rated Restaurants
          </button>
          {
            showTopRated && (
              <button className="px-2 text-red-500" onClick={onResetFilter} >Reset Filter (x)</button>
            )
          }
          </div>
        </div>
        <div className="w-96 h-12 mt-4 md:mt-0" >
          <input
            placeholder="Search for Restaurants"
            value={searchInput}
            onChange={onChange}
            type="text"
            className="bg-white-300 w-72 h-12 focus:outline-none focus:border-gray-400 border pl-2 font-serif"
          />
          <button className="bg-orange-300 h-12 w-24 rounded-r-md text-white font-serif hover:bg-orange-400 hover:cursor-pointer disabled:cursor-default disabled:bg-orange-300" onClick={onSearch} disabled={searchInput?.length == 0}>
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-4 justify-center mt-10 md:mt-0">
        {console.log('filteredRestaurants', filteredRestaurants)}
        {filteredRestaurants?.map((item) => (
          <Link to={`/restaurants/${item.info.id}`}>
            <RestaurantCard key={item.info.id} resData={item.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
