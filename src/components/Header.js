import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnText, setBtnText]= useState('Login');
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={onLoginClick} className="login-btn">{btnText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;