import React from "react";
import ItemsList from "./RestaurantMenuList";

const RestaurantCategory = ({ _, index , toggle, setShowIndex , showIndex}) => {
  return (
    <div className="cursor-pointer w-6/12 mx-auto" key={index}>
      {_?.itemCards?.length > 0 ? (
        <div className="accordion" key={index}>
          <div className="accordion-item shadow-lg my-4">
            <div onClick={()=> {
              if (index == showIndex) {
                setShowIndex(null);
              } else {
                setShowIndex(index);
              } 
            }} className="bg-gray-50 p-4 flex justify-between items-center"
            >
              <h2 className="accordion-title font-bold">
                {_.title} ({_?.itemCards?.length})
              </h2>
              <span className="font-bold">^</span>
            </div>
            <div
              className={
                toggle
                  ? "accordion-content bg-gray-50 p-4 flex flex-col gap-2 font-normal "
                  : "hidden"
              }
            >
              <ItemsList itemCards={_.itemCards} />
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
