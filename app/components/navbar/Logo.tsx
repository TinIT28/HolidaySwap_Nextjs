"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

const Logo = () => {
  const router = useRouter();
  return (
    <Link href={"/"} className="flex cursor-pointer">
      <div className="text-2xl font-extrabold">Holiday</div>
      <div className="text-2xl font-extrabold text-common">Swap</div>
    </Link>
  );
};

export default Logo;
