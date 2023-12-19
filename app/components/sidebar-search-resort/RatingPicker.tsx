"use client";
import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function RatingPicker() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="flex flex-col">
      <div className="pb-3 font-bold">Rating</div>
      <div className="flex flex-row mb-10">
        {[0, 1, 2, 3, 4].map((starIndex) =>
          rating >= starIndex + 1 ? (
            <AiFillStar
              size={25}
              key={starIndex}
              onClick={() => handleStarClick(starIndex)}
              color="orange"
            />
          ) : (
            <AiOutlineStar
              size={25}
              key={starIndex}
              onClick={() => handleStarClick(starIndex)}
            />
          )
        )}
      </div>
    </div>
  );
}
