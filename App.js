import React from "react";
import ReactDOM from "react-dom/client";
import { restaurant } from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));


const Header = () => {
  return (
    <div className="header-cont">
    <div className="header">
      <div className="logo-cont">
        <img
          className="logo"
          src="https://assets.materialup.com/uploads/08467c74-4744-4eac-817f-598b2f2fd680/preview.png"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    </div>
  );
};


const RestaurantContainer = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (<div className="rest-card">
    <img className="rest-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
  </div>)
}

const searchStyle = {
    padding: "20px"
}

const Body = () => (
  <div className="body">
    <div className="search" style={searchStyle}>
      <input type="text" placeholder="Search" className="input-text" />
    </div>
    <div className="res-container">
    {
      restaurant.map((r)=>{
        return <RestaurantContainer resData={r} />
      })
    }
    </div>
  </div>
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
