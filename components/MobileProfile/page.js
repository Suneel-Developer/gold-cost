import React from "react";

const MobileProfile = () => {
  return (
    <div className="bg-[url('/images/mainBg.webp')] bg-no-repeat bg-cover my-4 rounded-2xl p-3 text-white">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-2 items-center "> 
          <img src="/images/profile.png" alt="Profile" className=" w-12 rounded-full" />
          <div>
            <h2>User Name</h2>
            <h3 className="text-sm font-medium">@12345</h3>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
                <span className="text-sm font-medium">Join on : 12-09-2021</span>
                <img src="/images/bell.png" alt="Notification Image" className="w-7 cursor-pointer" />
        </div>
      </div>

      <h3 className="text-base font-medium my-1">Last Donation : 1 $</h3>
      <h3 className="text-base font-medium my-1">Total Donation : 50 $</h3>
    </div>
  );
};

export default MobileProfile;
