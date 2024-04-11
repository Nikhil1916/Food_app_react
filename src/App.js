// RAFCE to make componet shortcut for vs code 

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider , } from  "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import SchimmerCard from "./components/SchimmerCard";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(()=> import("./components/Grocery"));
const AppLayout = () => {

// authentication

  useEffect(()=>{
    // make a api call and send username and password
    const data = {
      name:"Nikhil"
    }
    setUserInfo(data);
  },[])
  const [userInfo, setUserInfo] = useState()

  return (
    <UserContext.Provider value={
      {
        loggedInUserName: userInfo?.name
      }
    }>
    <div className="app">
      <Header />
      {/* */}
      {/* */}
      <Outlet />
    </div>  
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />
      },
    
      {
        path: "/contact",
        element: <Contact/>
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<SchimmerCard count={10} />}><Grocery/></Suspense>
      }

    ],
    errorElement: <Error/>
  },


  // {
  //   path: "*",
  //   element: <h1>Not Found</h1>
  // }
])

root.render(<RouterProvider router={appRouter} />);
