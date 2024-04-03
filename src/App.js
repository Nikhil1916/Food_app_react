// RAFCE to make componet shortcut for vs code 

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider , } from  "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import SchimmerCard from "./components/SchimmerCard";
// import Grocery from "./components/Grocery";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(()=> import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* */}
      {/* */}
      <Outlet />
    </div>  
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
