import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState('Login');
  const isOnline = useOnlineStatus();
  
  // useEffect
  useEffect(() => {
    // console.log('Header useEffect called')
  }, [btnText]);
  
  const onLoginClick = () => {
    btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
  };
  
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between bg-white h-auto md:h-24 w-auto md:w-full md:shadow-lg mb-2 items-center p-4 md:p-0 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
      <div className="logo-container mb-4 md:mb-0">
        <img
          className="logo w-36 h-24 mx-auto md:mx-0"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex flex-col md:flex-row items-center md:items-center md:p-10 m-2 space-y-4 md:space-y-0">
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-serif">Online Status: {isOnline ? ' 🟢' : '🔴'}</li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-serif">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-serif">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-serif">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-serif">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-serif">Cart</li>
          <button onClick={onLoginClick} className="px-4 text-zinc-900 hover:text-orange-400 hover:cursor-pointer hover:scale-110 font-serif">{btnText}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
