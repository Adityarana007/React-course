import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnText, setBtnText]= useState('Login');
  const isOnline = useOnlineStatus();
  console.log('isOnline_status', isOnline)
  // useEffect
  useEffect(() => {
    // console.log('Header useEffect called')
  },[btnText])
  const onLoginClick = () =>{
    btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {isOnline ? '  🟢': '🔴'}</li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link to={"/grocery"}>Grocery</Link></li>
            <li>Cart</li>
            <button onClick={onLoginClick} className="login-btn">{btnText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;