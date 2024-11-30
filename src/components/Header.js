import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const isOnline = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log('dataInHeader', data)

  // selector to read data from store - give us access to store - subscribing to our store
  const cartItems = useSelector((store) => store.cart.items)

  // useEffect
  useEffect(() => {
    // console.log('Header useEffect called')
  }, [btnText]);

  const onLoginClick = () => {
    btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
  };

  return (
    // <div className="flex flex-col md:flex-row justify-center md:justify-between bg-red-300 h-auto md:h-24 md:w-full md:shadow-lg mb-2 items-center p-4 md:p-0 shadow-md ">
    <div className="flex flex-col md:flex-row  md:justify-between h-auto md:h-26 md:shadow-lg mb-2 items-center p-4 md:p-0 shadow-md md:w-full w-full">
      <div className="logo-container mb-4 md:mb-0 hover:scale-105">
        <Link to={"/"}>
          <img
            className="logo w-36 h-24 mx-auto md:mx-0"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex flex-col md:flex-row items-center md:items-center md:p-10 m-2 space-y-4 md:space-y-0">
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins">
            Online Status: {isOnline ? " 🟢" : "🔴"}
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins">
           <Link to={"/cart"}>Cart ({cartItems?.length})</Link>
          </li>
          <button
            onClick={onLoginClick}
            className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins"
          >
            {btnText}
          </button>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-popins font-bold">
            {loggedInUser}
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default Header;
