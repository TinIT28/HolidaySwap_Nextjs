"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonLoginHeaderProps {
  onClick: () => void;
}

const ButtonLoginHeader: React.FC<ButtonLoginHeaderProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="px-5 py-2 bg-common hover:bg-sky-500 text-base text-white font-bold rounded-lg"
    >
      Login
    </button>
  );
};

export default ButtonLoginHeader;
