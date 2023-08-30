import CreateGroup from "@/components/HomeComponents/CreateGroup/page";
import DashboardLayout from "@/components/DashboardLayout/page";
import React from "react";

const Notification = ({onHandle}) => {

  const handleChange=()=> {
    onHandle()
  }

  return (
    <DashboardLayout>
      
      <div className="w-full bg-white lg:bg-active_bg lg:px-10 py-5 mt-0 lg:mt-3 gap-10 text-dark_bg lg:text-white rounded-md ">
      <div className="w-[95%] m-auto top-24 p-3 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color">
        <h1 className="text-sm font-medium">Current Group : <span>1</span></h1>
        <h1 className="text-sm font-medium">Total Donations : <span>2500 $</span></h1>
      </div>
        <h1 className="text-2xl hidden md:flex font-bold mb-5">Notification :</h1>
        <div>
         
          <div className="w-full p-1 lg:pl-5 flex justify-between items-center gap-5 my-7 ">
            <div className="flex items-center gap-1 md:gap-3 px-2 lg:px-5 border-l-4 border-logocolor ">
              <div className="w-16 h-16 rounded-full">
                <img
                  src="/images/user.webp"
                  alt="user"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-sm font-semibold">You have received 4$</h1>
                <p className="text-xs md:text-sm font-medium">Amin send you 4$ in your bank account. you can check.</p>
              </div>
            </div>
            <span className="text-xs font-normal">10:45 PM</span>
          </div>
          <div className="w-full p-1 lg:pl-5 flex justify-between items-center gap-5 my-7 ">
            <div className="flex items-center gap-1 md:gap-3 px-2 md:px-5 border-l-4 border-[#CB7474] ">
              <div className=" w-16 h-16 rounded-full">
                <img
                  src="/images/user.webp"
                  alt="user"
                  className=" w-full h-full"
                />
              </div>
              <div>
              <h1 className="text-sm font-semibold">You have received 4$</h1>
                <p className="text-xs md:text-sm font-medium">Amin send you 4$ in your bank account. you can check.</p>
              </div>
            </div>
            <span className="text-xs font-normal">10:45 PM</span>
          </div>
          <div className="w-full p-1 lg:pl-5 flex justify-between items-center gap-5 my-7 ">
            <div className="flex items-center gap-1 md:gap-3 px-2 md:px-5 border-l-4 border-logocolor ">
              <div className=" w-16 h-16 rounded-full">
                <img
                  src="/images/user.webp"
                  alt="user"
                  className=" w-full h-full"
                />
              </div>
              <div>
              <h1 className="text-sm font-semibold">You have received 4$</h1>
                <p className="text-xs md:text-sm font-medium">Amin send you 4$ in your bank account. you can check.</p>
              </div>
            </div>
            <span className="text-xs font-normal">10:45 PM</span>
          </div>


        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notification;
