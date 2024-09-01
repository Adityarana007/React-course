import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom'
const Header = () => {
  const [btnText, setBtnText]= useState('Login');

  console.log('Header component renders')

  // useEffect
  useEffect(() => {
    console.log('Header useEffect called')
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
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li>Cart</li>
            <button onClick={onLoginClick} className="login-btn">{btnText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;