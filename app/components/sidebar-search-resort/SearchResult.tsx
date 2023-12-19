import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";

export default function SearchResult() {
  return (
    <div className="mt-8 flex flex-col w-full ml-6 mb-10">
      <div className="font-bold text-[20px] pb-7 text-blue-500">
        5 Resorts Found
      </div>
      <div className="grid grid-cols-2 gap-10 w-ful mb-10 ">
        <div className="flex flex-col ">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort1.jpg"
              alt="destination"
              height={800}
              width={500}
              className=" h-[300px] object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[428px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px] md:W-[20px]">
            <div className="text-[20px]">Resort Rich chart Phan Thiet</div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <div className="flex flex-row items-center pt-3 pb-5">
              <BsClock />
              <span className="pl-1">5 Hours</span>
            </div>
            <div className="flex flex-row">
              <div>From</div>
              <div className="text-xl text-blue-300 pl-5">$700</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort2.jpg"
              alt="destination"
              height={800}
              width={500}
              className=" h-[300px] object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[428px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px] md:W-[20px]">
            <div className="text-[20px]">Resort Terra Mi-A Phan Thiet</div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <span className="pl-1">(2 Review)</span>
            </div>
            <div className="flex flex-row items-center pt-3 pb-5">
              <BsClock />
              <span className="pl-1">3 Hours</span>
            </div>
            <div className="flex flex-row">
              <div>From</div>
              <div className="text-xl text-blue-300 pl-5">$200</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 w-ful ">
        <div className="flex flex-col ">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort3.jpg"
              alt="destination"
              height={800}
              width={500}
              className=" h-[300px] object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[428px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px] md:W-[20px]">
            <div className="text-[20px]">Resort Tp.Long Phu Yen</div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <span className="pl-1">(4 Review)</span>
            </div>
            <div className="flex flex-row items-center pt-3 pb-5">
              <BsClock />
              <span className="pl-1">5 Hours</span>
            </div>
            <div className="flex flex-row">
              <div>From</div>
              <div className="text-xl text-blue-300 pl-5">$500</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort4.jpg"
              alt="destination"
              height={800}
              width={500}
              className=" h-[300px] object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[428px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px] md:W-[20px]">
            <div className="text-[20px]">Resort Hai Au Binh Dinh</div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <div className="flex flex-row items-center pt-3 pb-5">
              <BsClock />
              <span className="pl-1">5 Hours</span>
            </div>
            <div className="flex flex-row">
              <div>From</div>
              <div className="text-xl text-blue-300 pl-5">$1700</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 w-ful mt-10 ">
        <div className="flex flex-col ">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort5.jpg"
              alt="destination"
              height={800}
              width={500}
              className=" h-[300px] object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[428px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px] md:W-[20px]">
            <div className="text-[20px]">Resort Paster Mi-A Dak Lak</div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <div className="flex flex-row items-center pt-3 pb-5">
              <BsClock />
              <span className="pl-1">5 Hours</span>
            </div>
            <div className="flex flex-row">
              <div>From</div>
              <div className="text-xl text-blue-300 pl-5">$700</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
