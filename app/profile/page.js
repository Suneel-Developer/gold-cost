import React from "react";
import DashboardLayout from "@/components/DashboardLayout/page";
import { BiPlusMedical } from "react-icons/bi";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="w-full bg-none  lg:bg-active_bg p-2 md:p-4 gap-10 mt-16 relative border border-border lg:border-0 text-mobile_text lg:text-white rounded-xl">
        <div className="absolute right-10 -top-14  bg-[#D9D9D9] border-border border-4 rounded-full flex justify-center text-center items-center w-28 h-28">
          <input type="file" id="file" className="hidden" />
          <label
            for="file"
            className="text-border cursor-pointer flex flex-col items-center justify-center text-center p-7 gap-2 text-sm font-extrabold"
          >
            <BiPlusMedical className=" text-lg font-extrabold  text-border" />
            Upload Image
          </label>
        </div>
        <h1 className="mb-3 hidden md:flex text-4xl font-medium ">Profile:</h1>
        <div className="block md:flex gap-5 mb-5 mt-10 md:mt-0  ">
          <div className="w-full md:w-[50%]">
            <label className="block mb-1 text-lg font-medium">Full Name:</label>
            <input
              type="text"
              placeholder="Ener full name"
              className="bg-none md:bg-active_bg border border-border lg:border-0 w-full p-3 text-lg text-white rounded-lg"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <label className="block mb-1 text-lg ">Email:</label>
            <input
              type="email"
              placeholder="Ener your E-Mail here..."
              className="bg-none md:bg-active_bg border border-border lg:border-0 w-full p-3 text-lg text-white rounded-lg"
            />
          </div>
        </div>

        <div className="block md:flex gap-5 mb-5  ">
          <div className="w-full md:w-[50%]">
            <label className="block mb-1 text-lg">Country :</label>
            <input
              type="text"
              placeholder="United State"
              className="bg-none md:bg-active_bg border border-border lg:border-0 w-full p-3 text-lg text-white rounded-lg"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <label className="block mb-1 text-lg">City :</label>
            <input
              type="text"
              placeholder="Select your city"
              className="bg-none md:bg-active_bg border border-border lg:border-0 w-full p-3 text-lg text-white rounded-lg"
            />
          </div>
        </div>
        <div className="block md:flex gap-5 mb-5  ">
          <div className="w-full md:w-[50%]">
            <label className="block mb-1 text-lg">Address :</label>
            <input
              type="text"
              placeholder="Enter your address here"
              className="bg-none md:bg-active_bg border border-border lg:border-0 w-full p-3 text-lg text-white rounded-lg"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <label className="block mb-1 text-lg">Mobile No :</label>
            <input
              type="number"
              placeholder="+1 234 567 890"
              className="bg-none md:bg-active_bg border border-border lg:border-0 w-full p-3 text-lg text-white rounded-lg"
            />
          </div>
        </div>

        <div className="hidden lg:flex w-full justify-center items-center gap-10 mt-16">
          <button className="bg-[#D7D6D94D] border border-white px-16 py-2 rounded-xl text-lg">
            Cancel
          </button>
          <button className="bg-bg border border-white px-16 py-2 rounded-xl text-lg">
            Save
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
