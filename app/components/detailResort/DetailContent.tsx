import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { RxRadiobutton } from "react-icons/rx";

export default function DetailContent() {
  return (
    <div className=" w-full">
      <div className="text-[25px] py-[30px]">Detail</div>
      <div className="pr-[30px]">
        <div className="pb-[10px]">
          Leave your guidebooks at home and dive into the local cultures that
          make each destination so special. We’ll connect you with our exclusive
          experiences. Each trip is carefully crafted to let enjoy your
          vacation.
        </div>
        <div>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.
        </div>
      </div>
      <div className="flex flex-row py-12 w-full ">
        <div className="text-[25px]">Price Includes</div>
        <div className="gird grid-rows-2 pl-[340px] ">
          <div className="flex flex-row items-center  mb-[10px]">
            <AiOutlineCheck className="mr-[10px]" />
            <div>Air fares</div>
          </div>
          <div className="flex flex-row items-center mb-[10px] ">
            <AiOutlineCheck className="mr-[10px]" />
            <div>3 Nights Hotel Accomodation</div>
          </div>
          <div className="flex flex-row items-center mb-[10px] ">
            <AiOutlineCheck className="mr-[10px]" />
            <div>Air fares</div>
          </div>
          <div className="flex flex-row items-center mb-[10px] ">
            <AiOutlineCheck className="mr-[10px]" />
            <div>Air fares</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-12 w-full ">
        <div className="text-[25px]">Price Excludes</div>
        <div className="gird grid-rows-2 pl-[340px] ">
          <div className="flex flex-row items-center  mb-[10px]">
            <AiOutlineClose className="mr-[10px]" />
            <div>Driver Service Fee</div>
          </div>
          <div className="flex flex-row items-center mb-[10px] ">
            <AiOutlineClose className="mr-[10px]" />
            <div>Guide Service Fee</div>
          </div>
          <div className="flex flex-row items-center mb-[10px] ">
            <AiOutlineClose className="mr-[10px]" />
            <div>Room Service Fees</div>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] bg-gray-300 mb-[20px] mr-[430px]"></div>
      <div className="text-[25px] ">What to Expect</div>
      <div className="pr-[30px]">
        <div className="pb-[10px]">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.
        </div>
      </div>
      <div className="py-5 ">
        <div className="flex flex-row items-center  mb-[10px]">
          <RxRadiobutton className="mr-[10px]" />
          <div>View the City Walls</div>
        </div>
        <div className="flex flex-row items-center mb-[10px] ">
          <RxRadiobutton className="mr-[10px]" />
          <div>Hiking in the forest</div>
        </div>
        <div className="flex flex-row items-center mb-[10px] ">
          <RxRadiobutton className="mr-[10px]" />
          <div>Discover the famous view point “The Lark”</div>
        </div>
        <div className="flex flex-row items-center mb-[10px] ">
          <RxRadiobutton className="mr-[10px]" />
          <div>Sunset on the cruise</div>
        </div>
      </div>
      <div className="h-[0.5px] bg-gray-300 mb-[20px] mr-[430px]"></div>
    </div>
  );
}
