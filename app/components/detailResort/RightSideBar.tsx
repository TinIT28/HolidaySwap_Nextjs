import React from "react";
import TabRightSideBar from "./TabRightSideBar";
import { AiOutlineLike } from "react-icons/ai";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { IoMdStarOutline } from "react-icons/io";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

export default function RightSideBar() {
  return (
    <div className="flex flex-col">
      <div className="w-[387px] h-auto bg-white shadow-xl rounded-lg mb-[40px] ">
        <div className="ml-[40px] py-[20px] text-[20px]">
          Booking With Confidence
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center py-[10px]">
            <AiOutlineLike
              size={25}
              color="#A09FF2"
              className="ml-[40px] mr-[20px] "
            />
            No-hassle best price guarantee
          </div>
          <div className="flex flex-row items-center py-[10px]">
            <BiPhoneCall
              size={25}
              color="#A09FF2"
              className="ml-[40px] mr-[20px] "
            />
            Customer care available 24/7
          </div>
          <div className="flex flex-row items-center py-[10px]">
            <IoMdStarOutline
              size={25}
              color="#A09FF2"
              className="ml-[40px] mr-[20px] "
            />
            Hand-picked Tours & Activities
          </div>
          <div className="flex flex-row items-center py-[10px]">
            <IoPeopleCircleSharp
              size={25}
              color="#A09FF2"
              className="ml-[40px] mr-[20px] "
            />
            Free Travel Insureance
          </div>
        </div>
      </div>
      <div className="w-[387px] h-auto bg-white border border-black rounded-lg flex flex-col justify-center mb-[40px]">
        <div className="ml-[40px] text-[30px] py-3">Need help?</div>
        <div className="ml-[40px]">
          <div className="flex flex-row items-center py-[40px]">
            <FiPhoneCall size={25} className="mr-[10px]" />
            085659778
          </div>
          <div className="flex flex-row items-center pb-[10px]">
            <BiMailSend size={25} className="mr-[10px]" />
            Holidayswap@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
