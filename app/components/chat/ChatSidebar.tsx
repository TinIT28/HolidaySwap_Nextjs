import React from "react";
import { BsListUl, BsSearch } from "react-icons/bs";

export default function ChatSidebar() {
  return (
    <div className="w-[292px] h-[620px] bg-gray-200">
      <div className="flex flex-row  items-center">
        <input
          className="px-2 py-1 border border-gray-300 bg-gray-100 rounded-sm mb-3 ml-3"
          type="text"
        />
        <BsSearch size={23} className="mb-2 ml-2" />
      </div>

      <div className="flex flex-row items-center ml-3 px-2 py-2 bg-blue-100 rounded-tl-md rounded-bl-md mb-6">
        <div>
          <img
            src="./images/resort1.jpg"
            className="rounded-full w-10 h-10 mr-1  "
            alt=""
          />
        </div>
        <div>
          <div>Bùi Thức</div>
          <div className="text-[13px] overflow-ellipsis overflow-hidden whitespace-nowrap w-28">
            Thanh Pho Ho Chi Minh
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mx-3 px-2 py-1  rounded-md mb-6">
        <div>
          <img
            src="./images/resort1.jpg"
            className="rounded-full w-10 h-10 mr-1  "
            alt=""
          />
        </div>
        <div>
          <div>Bùi Thức</div>
          <div className="text-[13px] overflow-ellipsis overflow-hidden whitespace-nowrap w-28">
            Thanh Pho Ho Chi Minh
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mx-3 px-2 py-1  rounded-md mb-6">
        <div>
          <img
            src="./images/resort1.jpg"
            className="rounded-full w-10 h-10 mr-1  "
            alt=""
          />
        </div>
        <div>
          <div>Bùi Thức</div>
          <div className="text-[13px] overflow-ellipsis overflow-hidden whitespace-nowrap w-28">
            Thanh Pho Ho Chi Minh
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mx-3 px-2 py-1  rounded-md mb-6">
        <div>
          <img
            src="./images/resort1.jpg"
            className="rounded-full w-10 h-10 mr-1  "
            alt=""
          />
        </div>
        <div>
          <div>Bùi Thức</div>
          <div className="text-[13px] overflow-ellipsis overflow-hidden whitespace-nowrap w-28">
            Thanh Pho Ho Chi Minh
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mx-3 px-2 py-1  rounded-md mb-6">
        <div>
          <img
            src="./images/resort1.jpg"
            className="rounded-full w-10 h-10 mr-1  "
            alt=""
          />
        </div>
        <div>
          <div>Bùi Thức</div>
          <div className="text-[13px] overflow-ellipsis overflow-hidden whitespace-nowrap w-28">
            Thanh Pho Ho Chi Minh
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mx-3 px-2 py-1  rounded-md mb-6">
        <div>
          <img
            src="./images/resort1.jpg"
            className="rounded-full w-10 h-10 mr-1  "
            alt=""
          />
        </div>
        <div>
          <div>Bùi Thức</div>
          <div className="text-[13px] overflow-ellipsis overflow-hidden whitespace-nowrap w-28">
            Thanh Pho Ho Chi Minh
          </div>
        </div>
      </div>
    </div>
  );
}
