import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return (
      <div className="footer flex bg-black items-center justify-around h-80">
        <div className="footer-container flex items-center justify-between">
          <img
            className="h-32 w-32 mt-6"
            src={LOGO_URL}
          ></img>
           <p className="copyright-text text-white font-popins px-4">
        © 2024 Food Alix
        </p>
        </div>
       
        <div className="footer-items">
          <ul className="text-white font-popins px-4 ">
            <li id="footer-heading">Company</li>
            <li className="py-4">About</li>
            <li>Careers</li>
   
          </ul>
        </div>
        <div className="footer-items">
          <ul className="text-white font-popins px-4">
          <li id="footer-heading">Contact Us</li>
            <li className="pt-4">Help & Support</li>
            <li className="py-4">Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Footer;