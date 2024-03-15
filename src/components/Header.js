import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [btnName, setBtnName] = useState('login');
    return (
      <div className="header-cont">
      <div className="header">
        <div className="logo-cont">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button className="login-btn" onClick={()=>{
              btnName == 'login' ? setBtnName('logout') : setBtnName('login')
            }}>{btnName}</button></li>
          </ul>
        </div>
      </div>
      </div>
    );
  };

  export default Header;