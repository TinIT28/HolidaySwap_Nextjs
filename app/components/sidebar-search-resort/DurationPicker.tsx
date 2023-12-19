import React from "react";

export default function DurationPicker() {
  return (
    <div className="flex flex-col">
      <div className="pb-3">Duration</div>
      <div className="relative flex flex-row items-center">
        <select
          className="peer mb-10 pr-[188px] w-[258px] h-[48px] font-light bg-white border rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
          name=""
          id=""
        >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
    </div>
  );
}
