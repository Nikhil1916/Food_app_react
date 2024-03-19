// RAFCE to make componet shortcut for vs code 

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider } from  "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error/>
  },

  {
    path: "/about",
    element: <About />
  },

  {
    path: "/contact",
    element: <Contact/>
  },

  // {
  //   path: "*",
  //   element: <h1>Not Found</h1>
  // }
])

root.render(<RouterProvider router={appRouter} />);
