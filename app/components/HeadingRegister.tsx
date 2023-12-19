'use client';

import React, { Fragment } from 'react';

interface HeadingRegsiterProps {
  label: string;
  width: string;
  className?: string;
}

const HeadingRegister: React.FC<HeadingRegsiterProps> = ({ label, width, className }) => {
  return (
    <Fragment>
      <div className={`bg-[#F5F5F7] flex items-center justify-center ${className}`}>
        <div className="text-xl md:text-5xl pt-[150px] px-5 text-center md:pt-[150px] pb-[80px]">
          {label}
        </div>
      </div>
    </Fragment>
  );
};

export default HeadingRegister;
