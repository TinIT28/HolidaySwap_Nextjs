import React from "react";

export default function Loading() {
  return (
    <section className="py-24 min-h-screen max-w-[2520px] flex items-center justify-center">
      <div
        className="w-20 h-20 rounded-full animate-spin
                    border-4 border-solid border-common border-t-transparent"
      ></div>
    </section>
  );
}
