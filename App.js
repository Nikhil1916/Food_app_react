import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
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
  );
};


const RestaurantContainer = () => (
    <div>
         <h3>Meghana Foods</h3>
    </div>
)

const searchStyle = {
    padding: "20px"
}

const Body = () => (
  <div className="body">
    <div className="search" style={searchStyle}>Search</div>
    <div className="res-container">
     <RestaurantContainer/>
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
