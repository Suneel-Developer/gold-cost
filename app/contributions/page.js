import CreateGroup from "@/components/CreateGroup/page";
import DashboardLayout from "@/components/DashboardLayout/page";
import React from "react";

const Contributions = () => {
  return (
    <DashboardLayout>
      <CreateGroup />
      <div className="w-full bg-none  md:bg-active_bg p-0 md:p-4 gap-10 mt-3 relative text-mobile_text md:text-white rounded-md ">
        <h1 className="text-3xl mb-2">Contributions:</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:bg-active_bg bg-none p-0 md:p-3 rounded-lg">
            <h2 className="text-2xl mb-2 font-semibold">Group 1 :</h2>
            <div className="px-4 mb-2 border-l-2 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-medium">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 md:mb-4 mb-0 border-l-2 md:border-white border-bg">
              <h1 className="flex justify-between text-lg font-medium">
                Receive <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Receive 1 $ <span>11-02-2021</span>
              </h2>
            </div>
          </div>
          <div className="md:bg-active_bg bg-none p-0 md:p-3 rounded-lg">
            <h2 className="text-2xl mb-2 font-semibold">Group 2 :</h2>
            <div className="px-4 mb-2 border-l-2 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-medium">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 mb-2 border-l-2 md:border-white border-bg  ">
              <h1 className="flex justify-between text-lg font-medium">
                Receive <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium ">
                Receive 1 $ <span>11-02-2021</span>
              </h2>
            </div>
          </div>
          <div className="md:bg-active_bg bg-none p-0 md:p-3 rounded-lg">
            <h2 className="text-2xl mb-2 font-semibold">Group 3 :</h2>
            <div className="px-4 mb-2 border-l-2 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-medium">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 mb-2 border-l-2 md:border-white border-bg">
              <h1 className="flex justify-between text-lg font-medium">
                Receive <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Receive 1 $ <span>11-02-2021</span>
              </h2>
            </div>
          </div>
          <div className="md:bg-active_bg bg-none p-0 md:p-3 rounded-lg">
            <h2 className="text-2xl mb-2 font-semibold">Group 4 :</h2>
            <div className="px-4 mb-2 border-l-2 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-medium">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 mb-2 border-l-2 md:border-white border-bg">
              <h1 className="flex justify-between text-lg font-medium">
                Receive <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Receive 1 $ <span>11-02-2021</span>
              </h2>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Contributions;
