import DashboardLayout from "@/components/DashboardLayout/page";
import React from "react";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="w-full bg-active_bg p-4 gap-10 relative text-white rounded-md ">
        <div className="absolute right-4 top-0 bg-white">
          <input type="file"  />
        </div>
        <h1 className="mb-3 text-xl ">Profile:</h1>
        <div className="flex gap-5 mb-5  ">
          <div className="w-[50%]">
            <label className="block mb-1 text-lg">Name:</label>
            <input type="text" placeholder="Ener full name" className="bg-active_bg w-full p-3 text-lg text-white rounded-lg" />
          </div>
          <div className="w-[50%]">
            <label className="block mb-1 text-lg">Email:</label>
            <input type="email" placeholder="Ener your E-Mail here..." className="bg-active_bg w-full p-3 text-lg text-white rounded-lg" />
          </div>
        </div>

        <div className="flex gap-5 mb-5  ">
          <div className="w-[50%]">
            <label className="block mb-1 text-lg">Country :</label>
            <input type="text" placeholder="United State" className="bg-active_bg w-full p-3 text-lg text-white rounded-lg" />
          </div>
          <div className="w-[50%]">
            <label className="block mb-1 text-lg">City :</label>
            <input type="text" placeholder="Select your city" className="bg-active_bg w-full p-3 text-lg text-white rounded-lg" />
          </div>
        </div>
        <div className="flex gap-5 mb-5  ">
          <div className="w-[50%]">
            <label className="block mb-1 text-lg">Address :</label>
            <input type="text" placeholder="Enter your address here" className="bg-active_bg w-full p-3 text-lg text-white rounded-lg" />
          </div>
          <div className="w-[50%]">
            <label className="block mb-1 text-lg">Mobile No :</label>
            <input type="number" placeholder="+1 234 567 890" className="bg-active_bg w-full p-3 text-lg text-white rounded-lg" />
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-10 mt-16">
          <button className="bg-[#D7D6D94D] border border-white px-16 py-2 rounded text-lg">Cancel</button>
          <button className="bg-bg border border-white px-16 py-2 rounded text-lg">Move</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
