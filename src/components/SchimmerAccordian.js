
import React, { useState } from 'react';

const SchimmerAccordian = ({ count }) => {
  const items = new Array(count);
  items.fill(1);
  return (
    <div className="w-full max-w-md ml-4 mt-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="border h-8 border-gray-300 bg-gray-300 rounded mb-2"
        >
          <div
            className="flex px-4 py-2 cursor-pointer bg-light-gray"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SchimmerAccordian;
