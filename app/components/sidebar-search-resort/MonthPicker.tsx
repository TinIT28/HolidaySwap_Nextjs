import React from "react";

export default function MonthPicker() {
  return (
    <div className="flex flex-col ">
      <div className="pb-3 pt-10">Month</div>
      <select
        name=""
        id=""
        className="peer mb-10 pr-[8px] w-[258px] h-[48px] font-light bg-white border rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <option value="">Any</option>
        <option value="">January 2024</option>
        <option value="">February 2024</option>
        <option value="">March 2024</option>
        <option value="">April 2024</option>
        <option value="">May 2024</option>
        <option value="">June 2024</option>
        <option value="">July 2024</option>
        <option value="">August 2024</option>
        <option value="">September 2024</option>
        <option value="">October 2024</option>
        <option value="">November 2024</option>
        <option value="">December 2024</option>
      </select>
    </div>
  );
}
