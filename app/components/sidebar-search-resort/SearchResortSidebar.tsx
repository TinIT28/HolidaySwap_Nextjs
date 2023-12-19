import React from "react";
import { BiSearch } from "react-icons/bi";
import DatePickerDemo from "./DatePicker";
import MonthPicker from "./MonthPicker";
import DurationPicker from "./DurationPicker";
import MinMaxPrice from "./MinMaxPrice";
import RatingPicker from "./RatingPicker";
import ResortStar from "./ResortStar";

export default function SearchResortSidebar() {
  return (
    <div className="border border-gray-300 rounded-t-md w-auto h-auto  px-7 py-6 mr-7 mt-8">
      <div className="flex flex-row items-center py-8 ">
        <BiSearch size={25} />
        <div className="flex flex-row items-center justify-between pl-3">
          <div className="text-common pl-[2px] font-bold text-[20px]">
            {" "}
            Search Resort
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pb-5 font-bold">Keyword</div>
        <div className="relative flex flex-row items-center">
          <input
            className="peer mb-10 p-2 font-light w-[258px] h-[57px] bg-white border border-[#C4C4C4] rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
            type="text"
            id="search"
          />
          <BiSearch
            size={25}
            className="absolute right-3 mb-3 transform -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>
      </div>
      {/* <div>
        <DurationPicker />
      </div> */}
      <div>
        <div className="font-bold">Check In</div>
        <DatePickerDemo />
      </div>

      <div className="mt-10">
        <div className="font-bold">Check Out</div>
        <DatePickerDemo />
      </div>

      {/* <div>
        <MonthPicker />
      </div> */}

      <div className="mt-10">
        <MinMaxPrice />
      </div>
      <div>
        <ResortStar />
      </div>
      <div>
        <RatingPicker />
      </div>
    </div>
  );
}
