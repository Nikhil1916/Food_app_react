import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  return (
    <div className="border border-black">
      <div className="flex justify-between items-center">
        <div className="logo-cont">
          <img className="w-56" src={LOGO_URL} />
        </div>
        <div>
          <ul className="flex gap-6">
          <li className="flex items-center">
            <span>Online Status:</span>
              {
                isOnline ? (<span className="onlineS"></span>) : (<span className="offlineS"></span>)
              }
        
          </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li className="mr-6">
              <button
                className="login-btn"
                onClick={() => {
                  btnName == "login"
                    ? setBtnName("logout")
                    : setBtnName("login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
