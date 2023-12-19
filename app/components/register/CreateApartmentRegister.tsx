'use client';
import React from 'react';
import HeadingRegister from '../HeadingRegister';
import Link from 'next/link';
import useLoginModal from '@/app/hooks/useLoginModal';

export default function CreateApartmentRegister() {
  const loginModal = useLoginModal();

  return (
    <div>
      <HeadingRegister label="Add your apartment" width="w-1/12" />
      <div className="px-4 py-8 md:px-20 flex-col w-full bg-white">
        <div className="grid grid-cols-2">
          <div>
            <div className="font-bold text-[20px]">Welcome to HolidaySwap</div>
            <div className="text-common font-[18px]">
              Do you want to immediately add your apartment to the system?
            </div>
            <div className="flex flex-col items-center">
              <img className="w-60 h-60 " src="/images/check-mark.png" alt="" />
            </div>
          </div>
          <div>
            <div className="text-[65px]">
              Find new holiday to <span className="text-common">exchange</span> and enjoy
            </div>
            <div className="text-gray-600 w-[60%] py-10">
              Discover amzaing places at exclusive deals. Eat, Shop, Visit interesting places around
              the world.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <Link
            href="/createapartmentsteps"
            className="text-ceter bg-common text-white rounded-md px-5 py-2 hover:bg-blue-600"
          >
            Yes, of course
          </Link>
          <button
            onClick={loginModal.onOpen}
            className="text-ceter bg-blue-300 text-white rounded-md px-5 py-2 hover:bg-blue-500"
          >
            Later, login
          </button>
        </div>
      </div>
    </div>
  );
}
