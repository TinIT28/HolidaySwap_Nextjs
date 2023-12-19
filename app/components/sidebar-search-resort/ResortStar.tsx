import React from "react";

export default function ResortStar() {
  return (
    <div className="mb-10">
      <div className="font-bold mb-2">Resort Star</div>
      <div>
        <div className="flex flex-row items-center w-full mb-2">
          <input className="w-4 h-4 rounded-lg" type="checkbox" name="" id="" />
          <div className="ml-3 text-gray-700"> 1 Star</div>
        </div>
        <div className="flex flex-row items-center w-full mb-2">
          <input className="w-4 h-4 rounded-lg" type="checkbox" name="" id="" />
          <div className="ml-3 text-gray-700"> 2 Star</div>
        </div>
        <div className="flex flex-row items-center w-full mb-2">
          <input className="w-4 h-4 rounded-lg" type="checkbox" name="" id="" />
          <div className="ml-3 text-gray-700"> 3 Star</div>
        </div>
        <div className="flex flex-row items-center w-full mb-2">
          <input className="w-4 h-4 rounded-lg" type="checkbox" name="" id="" />
          <div className="ml-3 text-gray-700"> 4 Star</div>
        </div>
        <div className="flex flex-row items-center w-full">
          <input className="w-4 h-4 rounded-lg" type="checkbox" name="" id="" />
          <div className="ml-3 text-gray-700"> 5 Star</div>
        </div>
      </div>
    </div>
  );
}
