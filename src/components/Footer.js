import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
          <img
            className="logo-footer"
            src={LOGO_URL}
          ></img>
           <p className="copyright-text">
        © 2024 Food Alix
        </p>
        </div>
       
        <div className="footer-items">
          <ul>
            <li id="footer-heading">Company</li>
            <li>About</li>
            <li>Careers</li>
   
          </ul>
        </div>
        <div className="footer-items">
          <ul>
          <li id="footer-heading">Contact Us</li>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Footer;