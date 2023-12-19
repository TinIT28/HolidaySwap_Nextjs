'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface HeadingDashboardProps {
  routerDashboard: string;
  pageCurrentContent: string;
  pageCurrentRouter: string;
}

const HeadingDashboard: React.FC<HeadingDashboardProps> = ({
  routerDashboard,
  pageCurrentContent,
  pageCurrentRouter,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-1 items-center">
      <span
        onClick={() => router.push(routerDashboard)}
        className="hover:underline hover:cursor-pointer"
      >
        Dashboard
      </span>{' '}
      <IoIosArrowForward size={20} />{' '}
      <span
        onClick={() => router.push(pageCurrentRouter)}
        className="text-common hover:cursor-pointer hover:underline"
      >
        {pageCurrentContent}
      </span>
    </div>
  );
};

export default HeadingDashboard;
