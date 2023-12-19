import React from "react";
import { BsSendFill } from "react-icons/bs";

export default function ChatContent() {
  return (
    <div className="w-[764px] h-[620px] bg-blue-100 flex flex-col  ">
      <div className="flex-grow overflow-y-auto">
        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-row items-center px-2 mb-40">
            <img
              src="./images/resort1.jpg"
              className="w-10 h-10 rounded-full mr-2"
              alt=""
            />
            <div className="flex flex-col">
              <div className="bg-white rounded-lg px-2 py-2">
                Chào bạn, tôi muốn trao đổi một căn nhà
              </div>
              <div className="text-gray-800 text-sm">Thứ 4, 20:22</div>
            </div>
          </div>
          <div className="flex flex-row items-center px-2 ">
            <div className="bg-white rounded-lg px-2 py-2">
              Vâng!, chào bạn bạn muốn trao đổi gì
            </div>
            <img
              src="./images/resort1.jpg"
              className="w-10 h-10 rounded-full ml-2"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-row items-center px-2 mb-40">
            <img
              src="./images/resort1.jpg"
              className="w-10 h-10 rounded-full mr-2"
              alt=""
            />
            <div className="flex flex-col">
              <div className="bg-white rounded-lg px-2 py-2">
                Chào bạn, tôi muốn trao đổi một căn nhà
              </div>
              <div className="text-gray-800 text-sm">Thứ 4, 20:22</div>
            </div>
          </div>
          <div className="flex flex-row items-center px-2 ">
            <div className="bg-white rounded-lg px-2 py-2">
              Vâng!, chào bạn bạn muốn trao đổi gì
            </div>
            <img
              src="./images/resort1.jpg"
              className="w-10 h-10 rounded-full ml-2"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-row items-center px-2 mb-40">
            <img
              src="./images/resort1.jpg"
              className="w-10 h-10 rounded-full mr-2"
              alt=""
            />
            <div className="flex flex-col">
              <div className="bg-white rounded-lg px-2 py-2">
                Chào bạn, tôi muốn trao đổi một căn nhà
              </div>
              <div className="text-gray-800 text-sm">Thứ 4, 20:22</div>
            </div>
          </div>
          <div className="flex flex-row items-center px-2 ">
            <div className="bg-white rounded-lg px-2 py-2">
              Vâng!, chào bạn bạn muốn trao đổi gì
            </div>
            <img
              src="./images/resort1.jpg"
              className="w-10 h-10 rounded-full ml-2"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row items-center px-2 mb-10">
          <img
            src="./images/resort1.jpg"
            className="w-10 h-10 rounded-full mr-2"
            alt=""
          />
          <div className="flex flex-col ">
            <div className="bg-white rounded-lg px-2 py-2">
              Chào bạn, tôi muốn trao đổi một căn nhà
            </div>
            <div className="text-gray-800 text-sm">Thứ 4, 20:22</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center  rounded-lg px-3 py-2  mb-3">
        <label className="sr-only" htmlFor="message">
          Soạn tin nhắn
        </label>
        <input
          type="text"
          id="message"
          placeholder="Soạn tin nhắn"
          className="w-full h-10 px-1 border border-gray-500 rounded-lg"
        />
        <button className="text-gray-400 hover:text-red-300 px-3 py-1 rounded-lg">
          <BsSendFill size={30} color="#5C98F2" />
        </button>
      </div>
    </div>
  );
}
