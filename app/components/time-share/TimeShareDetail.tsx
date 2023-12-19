import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import TimeShareDetailContent from "./TimeShareDetailContent";

export default function TimeShareDetail() {
  return (
    <div className="">
      <div className="flex-col">
        <div className="  text-[40px]">Africa – Amazing African Safari</div>
        <div className="flex flex-row items-center">
          <AiTwotoneStar color="#FFA11A" />
          <AiTwotoneStar color="#FFA11A" />
          <AiTwotoneStar color="#FFA11A" />
          <AiTwotoneStar color="#FFA11A" />
          <span className="pl-2">(1 Reviews)</span>
        </div>
        <div className="flex flex-row items-center w-[850px] justify-between ">
          <div className="flex flex-row items-center pt-8 pb-5">
            <BsClock size={20} color="" className="mr-[10px]" />
            <span className="pl-1 text-gray-500 text-[17px]">5 Hours</span>
          </div>
          <div className="flex flex-row items-center pt-8 pb-5">
            <IoIosPeople size={20} color="" className="mr-[10px]" />
            <span className="pl-1 text-gray-500 text-[17px]">
              Max Guests : 200
            </span>
          </div>
          <div className="flex flex-row items-center pt-8 pb-5">
            <FaWifi size={20} color="" className="mr-[10px]" />
            <span className="pl-1 text-gray-500 text-[17px]">
              Wifi Available
            </span>
          </div>
          <div className="flex flex-row items-center pt-8 pb-5">
            <BsCalendarDate size={20} color="" className="mr-[10px]" />
            <span className="pl-1 text-gray-500 text-[17px]">Jan - July</span>
          </div>
        </div>
        <div>
          <TimeShareDetailContent />
        </div>
      </div>
    </div>
  );
}
