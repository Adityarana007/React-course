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

  // Whenever a state variable updates, react triggers a reconciliation cycle (re-renders the component)
  console.log('Body comp re-renders')


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() => {
    const data = await fetch(GET_RESTAURANTS)
    const response = await data.json();
    console.log('resp', response.data);
    setRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  const onTopRatedClick = () => {
    const filteredRestaurantss = filteredRestaurants?.filter(item => item.info.avgRating > 4)
    setFilteredRestaurants(filteredRestaurantss)
  }

  const onSearch = () => {
    const filteredRestaurants = restaurants.filter(item =>  {
      console.log('item.info.name', item.info.name.includes('a'))
      return item.info.name.toLowerCase().includes(searchInput?.toLowerCase()) || item.info.cuisines.join(', ').toLowerCase().includes(searchInput?.toLowerCase())
    })
    console.log('filteredRestaurants', filteredRestaurants)
    // setRestaurants(filteredRestaurants);  
    setFilteredRestaurants(filteredRestaurants)
  }

  const onChange = (val) => {
    // console.log('type',typeof val?.target?.value)
    setSearchInput(val?.target?.value);

    if(val?.target?.value === ''){
      fetchData();
    }
  }

  // get online status from custom hook
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like your are offline!! Please check your internet connection.</h1>

  // conditional rendering

    return restaurants?.length === 0 ? <Shimmer/> : (
      <div className="body">
        <div className="filter-search-container">
          <div className="filter">
            <button className="filter-btn"
            onClick={onTopRatedClick}>Top Rated Restaurants</button>
          </div>
          <div className="search">
            <input placeholder="Search for Restaurants" value={searchInput} onChange={onChange} type="text" className="search-box"/>
            <button className="search-btn"
            onClick={onSearch}>Search</button>
          </div>
        </div>
       
        <div className="res-container">
          {
              filteredRestaurants?.map(item => (
                <Link to={`/restaurants/${item.info.id}`}>
                  <RestaurantCard
                  key={item.info.id}
                  resData={item.info}
                />
                </Link>
              ))
          }
  
        </div>
      </div>
    );
  };

  export default Body;