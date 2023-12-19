import React from "react";
import { GoMultiSelect } from "react-icons/go";
import AgePicker from "./AgePicker";
import ProvincePicker from "./ProvincePicker";
import DestinationPicker from "./DestinationPicker";
import { AiOutlineMinus } from "react-icons/ai";

export default function SearchResortSidebarBottom() {
  return (
    <div className="flex flex-col border border-gray-300 rounded-b-md w-auto h-auto  px-7 py-6 mr-7">
      <div className="flex flex-row items-center pb-10">
        <GoMultiSelect size={25} />
        <div className=" text-[20px] pl-2 text-blue-500 font-bold">
          Type Filter
        </div>
      </div>
      {/* <div>
        <AgePicker />
      </div> */}
      <div>
        <ProvincePicker />
      </div>

      <div>
        <button className="bg-[#5C98F2] font-bold text-white rounded-xl px-24  py-3  hover:bg-blue-500">
          Search
        </button>
      </div>
    </div>
  );
}
