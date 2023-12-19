"use client";

import React from "react";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="text-center">
      <div className={`font-bold text-2xl text-black`}>{title}</div>
    </div>
  );
};

export default Heading;
