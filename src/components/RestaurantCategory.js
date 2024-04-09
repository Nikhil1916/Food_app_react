import React, { useState } from "react";
import RestaurantMenuList from "./RestaurantMenuList";

RestaurantCategory = ({ _, i }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-6/12 mx-auto" key={i}>
      {_?.itemCards?.length > 0 ? (
        <div className="accordion" key={i}>
          <div className="accordion-item shadow-lg my-4">
            <div
              onClick={() => {
                console.log(_);
                _.is_active = !_.is_active;
                setToggle(!toggle);
              }}
              className="bg-gray-50 p-4 flex justify-between items-center"
            >
              <h2 className="accordion-title font-bold">
                {_.title} ({_?.itemCards?.length})
              </h2>
              <span className="font-bold">^</span>
            </div>
            <div
              className={
                _.is_active
                  ? "accordion-content bg-gray-50 p-4 flex flex-col gap-2 font-normal "
                  : "hidden"
              }
            >
              <RestaurantMenuList itemCards={_.itemCards} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantCategory;
