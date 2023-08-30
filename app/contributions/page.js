import CreateGroup from "@/components/HomeComponents/CreateGroup/page";
import DashboardLayout from "@/components/DashboardLayout/page";
import React from "react";

const Contributions = () => {
  return (
    <DashboardLayout>
      {/* <CreateGroup /> */}
      <div className="w-full bg-none  lg:bg-active_bg p-0 md:p-4 gap-10 mt-3  text-mobile_text lg:text-white rounded-md ">

      <div className="w-[92%] m-auto top-24 p-3 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color">
        <h1 className="text-sm font-medium">Current Group : <span>1</span></h1>
        <h1 className="text-sm font-medium">Total Donations : <span>2500 $</span></h1>
      </div>
        <h1 className="text-3xl hidden lg:flex mb-2">Contributions:</h1>

        <div className="grid gap-4 md:grid-cols-2 mt-10 md:mt-0">
        <div className="lg:bg-active_bg bg-none border-b border-border lg:border-transparent p-0 md:p-3 rounded-none lg:rounded-lg">
            <h2 className="text-2xl mb-2 font-medium">Group 1 :</h2>
            <div className="px-4 mb-2 border-l-4 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-bold">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 mb-2 border-l-4 lg:border-white border-bg  ">
              <h1 className="flex justify-between text-lg font-bold">
                Receive <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium ">
                Receive 1 $ <span>11-02-2021</span>
              </h2>
            </div>
          </div>

          <div className="lg:bg-active_bg bg-none border-b border-border lg:border-transparent p-0 md:p-3 rounded-none lg:rounded-lg">
            <h2 className="text-2xl mb-2 font-medium">Group 2 :</h2>
            <div className="px-4 mb-2 border-l-4 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-bold">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 mb-2 border-l-4 lg:border-white border-bg  ">
              <h1 className="flex justify-between text-lg font-bold">
                Receive <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium ">
                Receive 1 $ <span>11-02-2021</span>
              </h2>
            </div>
          </div>

          <div className="lg:bg-active_bg bg-none border-b border-border lg:border-transparent p-0 md:p-3 rounded-none lg:rounded-lg">
            <h2 className="text-2xl mb-2 font-medium">Group 3 :</h2>
            <div className="px-4 mb-2 border-l-4 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-bold">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 mb-2 border-l-4 lg:border-white border-bg">
              <h1 className="flex justify-between text-lg font-bold">
                Receive <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Receive 1 $ <span>11-02-2021</span>
              </h2>
            </div>
          </div>

          <div className="lg:bg-active_bg bg-none border-b border-border lg:border-transparent p-0 md:p-3 rounded-none lg:rounded-lg">
            <h2 className="text-2xl mb-2 font-medium">Group 4 :</h2>
            <div className="px-4 mb-2 border-l-4 border-[#CB7474]">
              <h1 className="flex justify-between text-lg font-bold">
                Donation <span className="text-sm">09 : 37 PM</span>
              </h1>
              <h2 className="flex justify-between text-sm font-medium">
                Donate 1 $ <span>11-02-2021</span>
              </h2>
            </div>
            <div className="px-4 mb-2 border-l-4 lg:border-white border-bg">
              <h1 className="flex justify-between text-lg font-bold">
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
