import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return (
      <div className="footer flex bg-black items-center justify-around">
        <div className="footer-container flex items-center justify-between">
          <img
            className="h-32 w-32 mt-6"
            src={LOGO_URL}
          ></img>
           <p className="copyright-text text-white font-serif px-4">
        © 2024 Food Alix
        </p>
        </div>
       
        <div className="footer-items">
          <ul className="text-white font-serif px-4">
            <li id="footer-heading">Company</li>
            <li>About</li>
            <li>Careers</li>
   
          </ul>
        </div>
        <div className="footer-items">
          <ul className="text-white font-serif px-4">
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