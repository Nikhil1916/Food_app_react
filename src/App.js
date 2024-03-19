// RAFCE to make componet shortcut for vs code 

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider , } from  "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/** */}
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

    ],
    errorElement: <Error/>
  },


  // {
  //   path: "*",
  //   element: <h1>Not Found</h1>
  // }
])

root.render(<RouterProvider router={appRouter} />);
