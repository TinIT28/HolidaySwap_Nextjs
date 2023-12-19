"use client";

import BookingApartment from "@/app/components/apartment/BookingApartment";
import CaroselApartment from "@/app/components/apartment/CaroselApartment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BiSolidCarGarage, BiSolidDryer } from "react-icons/bi";
import { BsSafe } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaSwimmingPool } from "react-icons/fa";
import {
  FaBuildingUser,
  FaShower,
  FaSprayCanSparkles,
  FaWifi,
} from "react-icons/fa6";
import { GiAtSea, GiRotaryPhone } from "react-icons/gi";
import { HiWifi } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { IoBedOutline, IoRestaurantOutline } from "react-icons/io5";
import { LuAirVent } from "react-icons/lu";
import {
  MdOutlineLocalLaundryService,
  MdOutlineTheaters,
} from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";

interface DetailPropertyProps {
  property?: any;
}

const DetailProperty: React.FC<DetailPropertyProps> = ({ property }) => {
  return (
    <div className="px-[70px] pt-[50px]">
      <div className="">
        <div className="flex-col">
          <div className="pt-20 pb-6 text-[40px]">
            {property?.propertyTypeName}
          </div>
          <div className="flex flex-row items-center">
            <AiTwotoneStar color="#FFA11A" />
            <AiTwotoneStar color="#FFA11A" />
            <AiTwotoneStar color="#FFA11A" />
            <AiTwotoneStar color="#FFA11A" />
            <span className="pl-2">(1 Reviews)</span>
          </div>
          <div className="flex flex-row items-center w-[850px] justify-between pb-[30px]">
            <div className="flex flex-row items-center pt-8 pb-5">
              <IoBedOutline size={20} color="" className="mr-[10px]" />
              <span className="pl-1 text-gray-500 text-[17px]">
                1 Kings Beds
              </span>
            </div>
            <div className="flex flex-row items-center pt-8 pb-5">
              <IoIosPeople size={20} color="" className="mr-[10px]" />
              <span className="pl-1 text-gray-500 text-[17px]">
                Max Guests : 5
              </span>
            </div>
            <div className="flex flex-row items-center pt-8 pb-5">
              <FaWifi size={20} color="" className="mr-[10px]" />
              <span className="pl-1 text-gray-500 text-[17px]">
                Wifi Available
              </span>
            </div>
            <div className="flex flex-row items-center pt-8 pb-5">
              <GiAtSea size={20} color="" className="mr-[10px]" />
              <span className="pl-1 text-gray-500 text-[17px]">Sea View</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-between items-center">
        <Image
          src="/images/luxuryApartment/1.jpg"
          alt="destination"
          height={800}
          width={350}
          className="w-[900px] h-[455px] "
        />
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3 pl-[12px]">
            <Image
              src="/images/luxuryApartment/2.jpg"
              alt="destination"
              height={800}
              width={350}
              className="w-[200px] h-[219px] "
            />
            <Image
              src="/images/luxuryApartment/3.jpg"
              alt="destination"
              height={800}
              width={350}
              className="w-[200px] h-[219px] "
            />
          </div>
          <div className="grid grid-cols-2 gap-3 pl-[12px]">
            <Image
              src="/images/luxuryApartment/4.jpg"
              alt="destination"
              height={800}
              width={350}
              className="w-[200px] h-[219px] "
            />
            <Image
              src="/images/luxuryApartment/5.jpg"
              alt="destination"
              height={800}
              width={350}
              className="w-[200px] h-[219px] "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[900px]">
          <div className=" pt-10">
            <div className="flex flex-row text-[20px]">
              <div>From</div>
              <span>$90.0</span>
            </div>
            <div className="text-gray-500">per night</div>
          </div>
          <div className="w-full h-[1px] bg-gray-500 my-10"></div>
          <div className="mb-10">
            <div className="mb-4 text-gray-500">
              {property?.propertyTypeDescription}
            </div>
          </div>
        </div>
        <div className="my-8">
          <BookingApartment />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 my-10"></div>
      <div className="pb-10">Apartment Amenities</div>
      <div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <PiTelevision color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Tv</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <HiWifi color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Free Wifi</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <BsSafe color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Safe</div>
          </div>
        </div>
        <div className="flex flex-row gap-5 my-[20px]">
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <FaShower color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">shower head</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <LuAirVent color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Air Conditioning</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <MdOutlineTheaters color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Heater</div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <GiRotaryPhone color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Phone </div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <BiSolidDryer color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Dryer</div>
          </div>
        </div>
      </div>
      <div className="py-10">Resort Amenities</div>
      <div className="pb-10">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <CgGym color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Gym</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <BiSolidCarGarage color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Parking</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <FaSprayCanSparkles color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Spa</div>
          </div>
        </div>
        <div className="flex flex-row gap-5 my-[20px]">
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <IoRestaurantOutline color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Restaurant</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <RiCustomerService2Line
              color="#888888"
              size={40}
              className="mr-5"
            />
            <div className="text-[20px]">Resort Service</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <FaSwimmingPool color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">Swimming Pool</div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <FaBuildingUser color="#888888" size={40} className="mr-5" />
            <div className="text-[20px]">24 Hour Concierge</div>
          </div>
          <div className="flex flex-row items-center w-[290px] h-[82px] border border-gray-300 rounded-md px-5">
            <MdOutlineLocalLaundryService
              color="#888888"
              size={40}
              className="mr-5"
            />
            <div className="text-[20px]">In-house Laundry</div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full h-[1px] bg-gray-500 my-10"></div>
      <div className="pb-5">Hotel Rules</div>
      <div>
        <ul>
          <li>- Smoking not allowed</li>
          <li>- Pets not allowed</li>
          <li>- Swimming pool closed from 8.00pm - 6.00am</li>
        </ul>
      </div>
      <div className="w-full my-10">
        <CaroselApartment />
      </div>{" "}
      <div className="w-full h-[1px] bg-gray-500 my-10"></div>
      <div className="flex flex-row w-full justify-center">
        <div className="my-10 text-[30px]">More Apartment</div>
      </div>
      <div className="flex flex-row items-center w-full justify-between">
        <Link
          href="typeapartment/deluxetype"
          className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
        >
          <div className="flex flex-row justify-end  ">
            <div className="overflow-hidden object-cover">
              <img
                className="object-coveh-[250px]r  relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
                src="/images/resort2.jpg"
                alt=""
              />
            </div>
            <div className="bg-common rounded-lg absolute w-auto h-auto px-3 mt-5 mr-5 py-1 text-white">
              17% Off
            </div>
          </div>
          <div className="bg-black  items-center w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
            <div>From: </div>
            <div>
              <span className="ml-1 line-through text-gray-400 text-[15px] mr-2 ">
                {" "}
                $90
              </span>
              <span>$75</span>
            </div>
          </div>
          <div className="py-5 px-5">
            <div className="py-5 text-[25px]">Standard Deluxe</div>
            <div className="text-gray-500 pb-5">
              Our Suites has been honored with the prestigious Five-Star Award
              by Forbes.
            </div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <Link
              className="hover:border-b hover:border-gray-700 mb-5"
              href="typeapartment/deluxetype"
            >
              Book Now
            </Link>
          </div>
        </Link>
        <Link
          href="/typeapartment/gransuitetype"
          className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
        >
          <div className="overflow-hidden object-cover">
            <img
              className="object-cover w-full h-[250px] relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
              src="/images/resort5.jpg"
              alt=""
            />
          </div>
          <div className="bg-black w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
            <div>From: </div>
            <span className="ml-1"> $90</span>
          </div>
          <div className="py-5 px-5">
            <div className="py-5 text-[25px]">Grand Suite Room</div>
            <div className="text-gray-500 pb-5">
              Our Suites has been honored with the prestigious Five-Star Award
              by Forbes.
            </div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <Link
              className="hover:border-b hover:border-gray-700 mb-5"
              href="/typeapartment/gransuitetype"
            >
              Book Now
            </Link>
          </div>
        </Link>

        <Link
          href="/typeapartment/standardtype"
          className="bg-white w-[400px] h-auto shadow-sm rounded-md relative"
        >
          <div className="overflow-hidden object-cover">
            <img
              className="object-cover w-full h-[250px] relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
              src="/images/resort6.jpg"
              alt=""
            />
          </div>
          <div className="bg-black w-auto h-auto text-white absolute -mt-[70px] -mr-[200px] px-8 flex flex-row py-3">
            <div>From: </div>
            <span className="ml-1"> $90</span>
          </div>
          <div className="py-5 px-5">
            <div className="py-5 text-[25px]">Standard Room</div>
            <div className="text-gray-500 pb-5">
              Our Suites has been honored with the prestigious Five-Star Award
              by Forbes.
            </div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <Link
              className="hover:border-b hover:border-gray-700 mb-5"
              href="/typeapartment/standardtype"
            >
              Book Now
            </Link>
          </div>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-gray-500 my-10"></div>
      <div>
        <div className="flex flex-row items-center">
          <div>1</div> <span className="px-2">Review</span>{" "}
          <span className="flex flex-row ">
            <AiTwotoneStar color="orange" />
            <AiTwotoneStar color="orange" />
            <AiTwotoneStar color="orange" />
            <AiTwotoneStar color="orange" />
            <AiTwotoneStar color="orange" />
          </span>
        </div>
      </div>{" "}
      <div className="w-full h-[1px] bg-gray-500 my-10"></div>
      <div>
        <div className="flex flex-row items-center">
          <img
            className="w-20 h-20 rounded-full"
            src="/images/resort1.jpg"
            alt=""
          />
          <div className="text-[25px] px-10">Thức Bùi</div>
          <div className="flex flex-col">
            <div className="text-[25px]">Nice Apartment</div>
            <div className="flex flex-row">
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
              <AiTwotoneStar color="orange" />
            </div>
            <div className="text-[25px]">August 9, 2023</div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full h-[1px] bg-gray-500 my-10"></div>
    </div>
  );
};

export default DetailProperty;
