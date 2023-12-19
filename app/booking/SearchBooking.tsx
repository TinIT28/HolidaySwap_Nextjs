"use client";

import React, { Fragment, useEffect, useState } from "react";
import { BiCoin } from "react-icons/bi";
import Calendar from "../components/input/Calendar";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineUser,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { BsCalendar4Week } from "react-icons/bs";
import axios from "axios";
import { format, differenceInDays } from "date-fns";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  key: "selection",
};

interface SearchBookingProps {
  handleDateRange: (date: any) => void;
}

const SearchBooking: React.FC<SearchBookingProps> = ({ handleDateRange }) => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [visiblePoint, setVisiblePoint] = useState(false);
  const [minPoint, setMinPoint] = useState<number | any>(0);
  const [maxPoint, setMaxPoint] = useState<number | any>(20);
  const [room, setRoom] = useState<any>();

  const handleVisibleCalendar = () => {
    if (visiblePoint) {
      setVisiblePoint(false);
      setVisibleCalendar(!visibleCalendar);
    } else {
      setVisibleCalendar(!visibleCalendar);
    }
  };

  const handleVisiblePoint = () => {
    if (visibleCalendar) {
      setVisibleCalendar(false);
      setVisiblePoint(!visiblePoint);
    } else {
      setVisiblePoint(!visiblePoint);
    }
  };

  useEffect(() => {
    const fectchData = () => {
      axios
        .get(
          `https://holiday-swap.click/api/v1/rooms?checkIn=${dateRange.startDate.toISOString()}&checkOut=${dateRange.endDate.toISOString()}&min=${minPoint}&max=${maxPoint}&pageNo=0&pageSize=10&sortBy=roomId`
        )
        .then((response) => {
          setRoom(response.data);
        })
        .catch(() => {});
    };
    fectchData();
  }, [dateRange, minPoint, maxPoint]);

  console.log("Check room", dateRange);

  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };

  return (
    <Fragment>
      <div className="md:w-full">
        <div className="bg-white p-4 flex flex-col rounded-md">
          <div className="grid grid-cols-3 border-b border-dotted border-gray-500 py-4">
            <div className="col-span-1">
              <Image
                src="/images/resort1.jpg"
                width={300}
                height={350}
                alt="image"
                className="rounded-md object-contain"
              />
            </div>
            <div className="col-span-2 px-4 flex flex-col">
              <div className="flex flex-row items-center">
                <p className="text-xl font-bold pl-4">Dusitd2 Samyan Bangkok</p>
                <div className="flex flex-row">
                  <AiFillStar color="yellow" size={15} />
                  <AiFillStar color="yellow" size={15} />
                  <AiFillStar color="yellow" size={15} />
                  <AiFillStar color="yellow" size={15} />
                </div>
              </div>

              <div className="grid grid-cols-5 pt-5">
                <div className="flex flex-row items-center">
                  <AiOutlineUser size={20} />
                  <p className="text-sm font-normal">2 adults</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiOutlineUser size={20} />
                  <p className="text-sm font-normal">2 adults</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiOutlineUser size={20} />
                  <p className="text-sm font-normal">2 adults</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiOutlineUser size={20} />
                  <p className="text-sm font-normal">2 adults</p>
                </div>

                <div className="flex flex-row items-center">
                  <AiOutlineUser size={20} />
                  <p className="text-sm font-normal">2 adults</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 py-4">
            <div
              onClick={handleVisibleCalendar}
              className="flex flex-row items-center justify-between px-4"
            >
              <div className="flex flex-row justify-center items-center">
                <BsCalendar4Week size={20} />
                <p className="px-2">
                  {format(new Date(dateRange.startDate), "EEE, MMM d")} -
                  {format(new Date(dateRange.endDate), "EEE, MMM d")}
                </p>
                <span className="text-sm font-light text-gray-400">
                  {calculateNightDifference(
                    dateRange.startDate,
                    dateRange.endDate
                  ) === 1
                    ? `${calculateNightDifference(
                        dateRange.startDate,
                        dateRange.endDate
                      )} night`
                    : `${calculateNightDifference(
                        dateRange.startDate,
                        dateRange.endDate
                      )} nights`}
                </span>
              </div>

              <div>
                {visibleCalendar ? (
                  <AiFillCaretUp size={20} />
                ) : (
                  <AiFillCaretDown size={20} />
                )}
              </div>
            </div>

            <div
              onClick={handleVisiblePoint}
              className="flex flex-row items-center justify-between px-4"
            >
              <div className="flex flex-row justify-center items-center">
                <BiCoin size={20} />
                <p className="px-2">Min - Max</p>
              </div>

              <div>
                {visiblePoint ? (
                  <AiFillCaretUp size={20} />
                ) : (
                  <AiFillCaretDown size={20} />
                )}
              </div>
            </div>
          </div>
        </div>
        {visibleCalendar ? (
          <Calendar
            className="w-full text-lg z-10"
            value={dateRange}
            onChange={(value: any) => {
              setDateRange(value.selection);
              handleDateRange(value.selection);
            }}
          />
        ) : (
          ""
        )}

        {visiblePoint ? (
          <div className="bg-white py-6 rounded-md w-full flex flex-col px-5">
            <div className=" grid grid-cols-2 gap-5">
              <div className="w-full flex flex-col">
                <label className="py-3">Min</label>
                <input
                  type="number"
                  value={minPoint}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMinPoint(e.target.value)
                  }
                  className="peer p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:border-black"
                />
              </div>

              <div className="w-full flex flex-col">
                <label className="py-3">Max</label>
                <input
                  type="number"
                  value={maxPoint}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMaxPoint(e.target.value)
                  }
                  className="peer p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:border-black"
                />
              </div>
            </div>

            <button
              type="button"
              className="bg-common rounded-md p-3 text-white font-bold my-4 hover:bg-blue-500"
            >
              Update
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default SearchBooking;
