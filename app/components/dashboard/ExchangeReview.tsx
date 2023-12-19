"use client";
import ReviewModal from "../modal/ReviewModal";
import React, { useState } from "react";
import Link from "next/link";

export default function BookingReview() {
  const [showModal, setShowModal] = useState(false);

  const handleReviewClick = () => {
    setShowModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white pb-10   mt-6   rounded-md shadow-sm flex flex-col mb-10">
      <div className="w-full mt-5 px-[35px]">
        <div className="justify-end flex flex-row px-10">Done</div>
        <Link href="/detail-resort" className="flex flex-row">
          <img className="w-24 h-24  mr-3" src="/images/resort1.jpg" alt="" />
          <div>
            <div className="text-[20px] text-gray-800">
              InterContinental Danang Sun Peninsula Resort
            </div>
            <div className="text-[15px] text-gray-500">
              {" "}
              19 {"->"} 25/10/2023
            </div>
            <div className="text-[15px] text-gray-500">
              Son Tra Peninsula, Danang.{" "}
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full flex flex-row justify-end px-10">
        <div>Total: 1300$</div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 mt-5"></div>
      <div className="w-full flex flex-row justify-between mt-6 items-center">
        <div className="text-[12px] pl-3 text-gray-500 font-thin">
          rating your feelings during your holiday
        </div>
        <div>
          <button
            className="bg-[#5C98F2] w-44 h-10 rounded-md mr-4 text-white"
            onClick={handleReviewClick}
          >
            Review
          </button>
          <button className="bg-[#5C98F2] w-44 h-10 rounded-md mr-4 text-white">
            Book Again
          </button>
          <button className="bg-[#5C98F2] w-44 h-10 rounded-md mr-4 text-white">
            Chat with Owner
          </button>
        </div>
      </div>
      {showModal && <div>Modal</div>}
    </div>
  );
}
