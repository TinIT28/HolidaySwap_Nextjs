"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BookingSuccess = () => {
    const router = useRouter();
  return (
    <div className="py-32 flex flex-row justify-center items-center">
      <div className="py-8 px-6 flex flex-col justify-center items-center bg-white w-7/12 rounded-xl shadow-lg">
        <div className="text-bold text-3xl py-4">Booking Completed!</div>
        <div className="text-xl py-4 text-gray-600">Thank you!</div>
        <div className="py-4">
          <div className="text-lg text-gray-600">
            Your booking detail has been sent to your email.
          </div>
          <div className="text-lg text-gray-600">
            You can check the payment status from your dashboard
          </div>
        </div>
        <div className="py-4">
          <button onClick={() => router.push("/dashboard")} className="px-8 py-6 bg-common hover:bg-hover rounded-lg text-white text-2xl font-bold">
            Go to my dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
