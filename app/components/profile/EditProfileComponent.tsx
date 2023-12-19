import React from 'react';

export default function EditProfileComponent() {
  return (
    <div className="border-l border-gray-300 px-10 h-full">
      <div className="text-gray-500">
        Dashboard {'>'} <span className="text-common">Edit Profile</span>
      </div>
      <div className=" flex flex-col ">
        <div className="flex flex-row">
          <div>
            <img className="rounded-full w-16 h-16 mr-10" src="./images/resort1.jpg" alt="" />
          </div>
          <div>
            <button className="bg-[#5C98F2] py-3 px-2 rounded-lg text-white ">
              Change Profile Picture
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col w-auto h-auto justify-between px-10">
            <div className="">First Name*</div>
            <div className="">Last Name*</div>
            <div className=""> Gender</div>
            <div className=""> Birth Date</div>
            <div className=""> Email</div>
            <div className=""> Phone</div>
            <div className=""> Phone</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <input type="text" className="  border border-gray-500 " />
              <input type="text" className="  border border-gray-500 " />
              <select className="px-2 py-2 " name="" id="">
                <option value="">-</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
              <div className="flex flex-row  gap-6">
                <input type="text" className="border border-gray-500 " />

                <input type="text" className="border border-gray-500 " />

                <input type="text" className="border border-gray-500 " />
              </div>
              <input type="text" className=" border border-gray-500" />
              <input type="text" className=" border border-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
