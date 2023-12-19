'use client';
import Container from '@/app/components/Container';
import { differenceInDays, format } from 'date-fns';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';

interface InformationBookingProps {
  booking: any;
  ownerUser: any;
  ownerResort: any;
}

const InformationBooking: React.FC<InformationBookingProps> = ({
  booking,
  ownerUser,
  ownerResort,
}) => {
  const [detail, setDetail] = useState(booking);
  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };
  return (
    <Container>
      <Fragment>
        <div className="w-full pt-10 pb-6 flex flex-row justify-center text-3xl font-bold">
          <div className="flex flex-row gap-1">
            <div>Booking</div> <div className="text-common">Information</div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="grid md:grid-cols-2 pb-8 border-b border-slate-300">
            <div className="w-full px-3 h-full">
              {/* Title */}
              <div className="py-3">
                <div className="text-3xl font-bold">Booking information is confirmed!</div>
                <div className="text-lg text-slate-500 mt-4">
                  You are going to <span className="font-bold">{detail?.resortName}</span>
                </div>
                <div className="text-base text-slate-500 mt-4">
                  Status{' '}
                  <span
                    className={`font-bold ${
                      detail?.status === 'SUCCESS' ? 'text-green-500' : 'text-orange-500'
                    }`}
                  >
                    {detail?.status}
                  </span>
                </div>
                {detail?.createdDate && (
                  <div className="text-sm text-slate-500 mt-2">
                    {format(new Date(detail?.createdDate), "dd/MM/yyyy 'at' h:mm a")}
                  </div>
                )}
              </div>

              {/* Information ownership */}
              <div className="flex flex-row w-full justify-between gap-3 py-3">
                <div className="flex flex-row items-center gap-3">
                  <div>
                    <Image
                      className="rounded-full cursor-pointer"
                      width={55}
                      height={55}
                      src={ownerUser?.avatar || '/images/placeholder.jpg'}
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>{ownerUser?.content[0]?.fullName}</div>
                    <div className="text-slate-500">
                      {ownerResort?.content[0]?.addressLine
                        .split(',')
                        .map((part: any) => part.trim())
                        .slice(-2)
                        .join(', ')}
                    </div>
                    {/* <div className="text-slate-500">On HolidaySwap since 2015</div> */}
                  </div>
                </div>
              </div>

              {/* Image apartment */}
              <div className="py-3 w-full h-80 relative rounded-lg">
                <Image
                  src={detail?.propertyImage}
                  fill
                  alt="resort"
                  className="absolute rounded-lg"
                />
              </div>

              {/* Information apartment */}
              <div className="py-3">
                <div className="text-xl">{detail?.propertyName}</div>
                <div className="text-slate-400">Description</div>
              </div>

              {/* {!ratingValue && detail?.status === 'SUCCESS' && (
            <div className="flex flex-row gap-3">
              <div className="py-3">
                <button
                  onClick={() =>
                    createReviewModal.onOpen(
                      detail?.availableTimeId,
                      currentUser?.userId,
                      bookingId
                    )
                  }
                  type="button"
                  className="p-3 rounded-md bg-common hover:bg-hover text-white text-lg"
                >
                  Review
                </button>
              </div>
            </div>
          )} */}
            </div>

            <div className="w-full h-full px-3 py-5">
              {/* Check-in Check-out */}
              <div className="py-3 border-b border-slate-300 flex flex-row items-center justify-between">
                {detail?.dateCheckIn && (
                  <div className="flex flex-col text-lg text-slate-500">
                    <div>{format(new Date(detail?.dateCheckIn), 'E')}, </div>
                    <div>{format(new Date(detail?.dateCheckIn), 'MMM dd, yyyy')}</div>
                    <div>Check-in After 3PM</div>
                  </div>
                )}

                {detail?.dateCheckOut && (
                  <div className="flex flex-col text-lg text-slate-500">
                    <div>{format(new Date(detail?.dateCheckOut), 'E')}, </div>
                    <div>{format(new Date(detail?.dateCheckOut), 'MMM dd, yyyy')}</div>
                    <div>Check-out Before 12PM</div>
                  </div>
                )}
              </div>

              {/* Guest */}
              <div className="py-3 flex flex-col text-slate-500 border-b border-slate-300">
                <div className="text-lg font-bold text-slate-600">Guests</div>
                <div>{detail?.userOfBooking.length}</div>
              </div>

              {/* Payment */}
              <div className="py-3 flex flex-col border-b border-slate-300">
                <div className="text-lg font-bold text-slate-600">Payment</div>
                <div className="flex flex-col gap-2 py-3">
                  <div className="flex flex-row justify-between items-center text-slate-500">
                    <div>
                      {detail?.price /
                        calculateNightDifference(detail?.dateCheckIn, detail?.dateCheckOut)}{' '}
                      point x {calculateNightDifference(detail?.dateCheckIn, detail?.dateCheckOut)}{' '}
                      nights
                    </div>
                    <div>{detail?.price}</div>
                  </div>
                </div>
              </div>

              {/* Total payment */}
              <div className="py-3 flex flex-row items-center justify-between border-b border-slate-300">
                <div>Total</div>
                <div>{detail?.price}</div>
              </div>

              {/* Information guest */}
              <div className="py-3">
                <div className="text-lg font-bold text-slate-600">Information Guest</div>
                <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-3">
                  {detail?.userOfBooking.map((item: any, index: number) => (
                    <div
                      key={item.id}
                      className="flex h-full flex-col justify-center gap-4 p-3 rounded-md bg-white shadow-lg"
                    >
                      <div>
                        <p className="text-[18px] font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden ">
                          {item.fullName}
                        </p>
                      </div>
                      <p className="font-normal text-gray-700 dark:text-gray-400  overflow-hidden">
                        {item.email}
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
                        {item.phoneNumber}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Container>
  );
};

export default InformationBooking;
