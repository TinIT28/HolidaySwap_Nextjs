'use client';

import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import BookingReview from '../dashboard/BookingReview';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { differenceInDays, format } from 'date-fns';

interface CurrentBookingProps {
  historyBooking: any;
}

const CurrentBooking: React.FC<CurrentBookingProps> = ({ historyBooking }) => {
  const [historyBookingList, setHistoryBookingList] = useState<any[]>([]);
  const router = useRouter();

  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };

  useEffect(() => {
    if (historyBooking) {
      setHistoryBookingList(historyBooking.slice(0, 3));
    }
  }, [historyBooking]);

  return (
    <div className="hidden md:block md:w-auto md:h-auto md:py-10">
      <div className="flex flex-row justify-between items-center">
        <div className="text-common text-[20px] font-bold pb-8">Current Booking</div>
        <div
          className="text-gray-400 hover:underline hover:cursor-pointer"
          onClick={() => router.push('/dashboard/myBooking')}
        >
          View All Booking
        </div>
      </div>
      {/* {historyBookingList &&
        historyBookingList.map((item: any, index: number) => (
   
        ))} */}

      {historyBookingList.length > 0 ? (
        historyBookingList.reverse().map((item: any, index: number) => (
          <div
            onClick={() => router.push(`/dashboard/myBooking/${item.bookingId}`)}
            key={item.bookingId}
            className="grid grid-cols-12 h-[150px] bg-white rounded-lg shadow-lg justify-between hover:cursor-pointer mb-5 "
          >
            <div className="col-span-9">
              <div className="grid grid-cols-9 h-full gap-5">
                <div className="col-span-3 w-full h-full relative rounded-lg">
                  <Image
                    src={item.propertyImage}
                    fill
                    alt="image"
                    className="w-full object-cover rounded-bl-md rounded-tl-md"
                  />
                </div>
                <div className="col-span-6 flex flex-col">
                  <div className="py-2">
                    <div className="text-xs text-gray-700">{item.resortName}</div>
                    <div className="text-lg font-bold ">{item.propertyName}</div>
                  </div>
                  <div className="text-base text-gray-700">
                    {format(new Date(item.checkInDate), 'dd, MMM yyyy')} -{' '}
                    {format(new Date(item.checkOutDate), 'dd, MMM yyyy')}
                  </div>
                  <div className="text-base text-gray-700">
                    Number of nights:{' '}
                    {calculateNightDifference(item.checkInDate, item.checkOutDate)}
                  </div>
                  <div className="text-base text-gray-700">
                    Total: <span className="text-black">{item.price} point</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 flex flex-row justify-center items-center">
              <div
                className={`text-lg ${
                  item.status === 'SUCCESS' ? 'text-green-600' : 'text-orange-600'
                }`}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className=" text-[20px]  ">No trips booked... yet!</div>
            <div>
              It's time to dust off your luggage and start preparing for your next adventure
            </div>
          </div>
          <div
            className="border border-gray-400 my-4 rounded-md px-5 py-3 cursor-pointer hover:bg-gray-200"
            onClick={() => router.push('/apartment')}
          >
            Start searching
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentBooking;
