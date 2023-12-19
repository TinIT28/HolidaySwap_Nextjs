'use client';

import { differenceInDays, format } from 'date-fns';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import useCreateReviewModal from '@/app/hooks/useCreateReviewModal';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import ReactStars from 'react-stars';
import GetBookingHistoryById from '@/app/actions/getBookingHistoryById';
import { useSession } from 'next-auth/react';
import GetRatingByBookingId from '@/app/actions/getRatingByBookingId';
import ConversationApis from '@/app/actions/ConversationApis';
import { useRouter } from 'next/navigation';
import useLoginModal from '@/app/hooks/useLoginModal';

interface BookingDetailProps {
  bookingDetail: any;
  ownerUser: any;
  ownerResort: any;
  currentUser: any;
  bookingId: number;
  rating: any;
}

const BookingDetail: React.FC<BookingDetailProps> = ({
  bookingDetail,
  ownerUser,
  ownerResort,
  currentUser,
  bookingId,
  rating,
}) => {
  const [detail, setDetail] = useState(bookingDetail);
  const [ratingValue, setRatingValue] = useState(rating);
  const router = useRouter();
  const loginModal = useLoginModal();
  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };

  const createReviewModal = useCreateReviewModal();
  const isCreated = createReviewModal.isCreated;
  const { data: session } = useSession();

  useEffect(() => {
    const getData = async () => {
      const accessToken = session?.user?.access_token;
      const config = { headers: { Authorization: `Bearer ${accessToken}` } };
      if (isCreated === true) {
        const params = { bookingId };
        const newReview = await GetRatingByBookingId(params);
        if (newReview) {
          setRatingValue(newReview);
          createReviewModal.onCreatedReset();
        }
      }
    };
    getData();
  }, [isCreated]);

  const handleContactOwner = (ownerId: string) => {
    ConversationApis.getContactWithOwner(ownerId)
      .then((res) => {
        res?.conversationId && router.push(`/chat/${res.conversationId}`);
      })
      .catch((err) => {
        ConversationApis.createCurrentUserConversation(ownerId)
          .then((res) => {
            router.push(`/chat/${res.conversationId}`);
          })
          .catch((err) => {
            loginModal.onOpen();
            console.log(err);
          });
      });
  };

  return (
    <div className="flex flex-col ">
      {/* QR code */}
      <div className="flex my-2 flex-row w-full justify-center bg-gradient-to-r from-sky-200 to-indigo-300 rounded-md">
        <div className="py-6 flex flex-col items-center">
          <div className="text-black text-center text-lg">
            Give this code to the security staff to enter the apartment
          </div>
          <Image
            alt="QRcode"
            src={detail?.qrcode}
            width={200}
            height={200}
            className="object-contain z-10"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 pb-8 pt-4 gap-10 border-b border-slate-300">
        <div className="w-full h-full">
          {/* Title */}
          <div className="py-3">
            <div className="text-3xl font-bold">Your booking is confirmed!</div>
            <div className="text-lg text-slate-500 mt-4">
              You are going to <span className="font-bold">{detail?.resortName}</span>
            </div>
            <div className="text-sm text-slate-500 mt-2">
              {format(new Date(detail?.createdDate), "dd/MM/yyyy 'at' h:mm a")}
            </div>
          </div>

          {/* Information ownership */}
          <div className="flex flex-row w-full justify-between gap-3 py-3">
            <div className="flex flex-row items-center gap-3">
              <div>
                <Image
                  className="rounded-full cursor-pointer"
                  width={55}
                  height={55}
                  src={ownerUser?.content[0]?.avatar || '/images/placeholder.jpg'}
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col">
                <div>{ownerUser?.content[0]?.fullName || ownerUser?.content[0]?.username}</div>
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
            <div>
              <div
                onClick={() => handleContactOwner(ownerUser?.content[0]?.userId?.toString())}
                className="hover:bg-hover rounded-md  cursor-pointer px-4 py-2 bg-common text-white text-center"
              >
                Contact with owner
              </div>
            </div>
          </div>

          {/* Image apartment */}
          <div className="py-3 w-full h-80 relative rounded-lg">
            <Image src={detail?.propertyImage} fill alt="resort" className="absolute rounded-lg" />
          </div>

          {/* Information apartment */}
          <div className="py-3">
            <div className="text-xl">{detail?.propertyName}</div>
            <div className="text-slate-400">Description</div>
          </div>

          {!ratingValue && detail?.status === 'SUCCESS' && (
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
          )}
        </div>

        <div className="w-full h-full py-5">
          {/* Check-in Check-out */}
          <div className="py-3 border-b border-slate-300 flex flex-row items-center justify-between">
            <div className="flex flex-col text-lg text-slate-500">
              <div>{format(new Date(detail?.dateCheckIn), 'E')}, </div>
              <div>{format(new Date(detail?.dateCheckIn), 'MMM dd, yyyy')}</div>
              <div>Check-in After 3PM</div>
            </div>
            <div className="flex flex-col text-lg text-slate-500">
              <div>{format(new Date(detail?.dateCheckOut), 'E')}, </div>
              <div>{format(new Date(detail?.dateCheckOut), 'MMM dd, yyyy')}</div>
              <div>Check-out Before 12PM</div>
            </div>
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
      {ratingValue && (
        <div className="flex flex-col py-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={
                ratingValue?.ratingType === 'PUBLIC'
                  ? ratingValue?.user?.avatar || '/images/placeholder.jpg'
                  : '/images/placeholder.jpg'
              }
              width={50}
              height={50}
              alt="Avatar"
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="text-black text-base">
                {ratingValue?.ratingType === 'PRIVATE'
                  ? 'Anonymous users'
                  : ratingValue?.user?.fullName}
              </p>
              {/* <p className="text-slate-400 text-base">6 years on HolidaySwap</p> */}
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <ReactStars
              edit={false}
              count={5}
              size={15}
              color2="orange"
              value={ratingValue?.rating}
            />
            <div>·</div>
            {ratingValue && ratingValue.createDate && (
              <div className="text-sm text-black">
                {format(new Date(ratingValue?.createDate), "dd/MM/yyyy 'at' h:mm a")}
              </div>
            )}
          </div>

          <div className="text-base font-normal line-clamp-3">{ratingValue?.comment}</div>
        </div>
      )}
    </div>
  );
};

export default BookingDetail;
