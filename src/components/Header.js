import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const isOnline = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data);
  console.log(isOnline +" header re remder");
  return (
    <div className="border bg-slate-200 shadow-md">
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
            <li className="mr-6 font-bold">
                {data?.loggedInUserName}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
