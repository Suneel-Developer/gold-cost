import CreateGroup from "@/components/CreateGroup/page";
import DashboardLayout from "@/components/DashboardLayout/page";
import React from "react";

const Notification = () => {
  return (
    <DashboardLayout>
      <CreateGroup />
      <div className="w-full bg-white md:bg-active_bg md:px-10 py-5 mt-0 md:mt-3 gap-10 relative text-dark_bg md:text-white rounded-md ">
        <h1 className="text-2xl font-bold mb-5">Notification :</h1>
        <div>
         
          <div className="w-full p-1 md:pl-5 flex justify-between items-center gap-5 my-7 ">
            <div className="flex items-center gap-3 px-2 md:px-5 border-l-2 border-logocolor ">
              <div className=" w-16 h-16 rounded-full">
                <img
                  src="/images/user.webp"
                  alt="user"
                  className=" w-full h-full"
                />
              </div>
              <div>
                <h1 className=" text-lg">You have received 4$</h1>
                <p className="text-sm">Amin send you 4$ in your bank account. you can check.</p>
              </div>
            </div>
            <span className="">10:45 PM</span>
          </div>
          <div className="w-full p-1 md:pl-5 flex justify-between items-center gap-5 my-7 ">
            <div className="flex items-center gap-3 px-2 md:px-5 border-l-2 border-[#CB7474] ">
              <div className=" w-16 h-16 rounded-full">
                <img
                  src="/images/user.webp"
                  alt="user"
                  className=" w-full h-full"
                />
              </div>
              <div>
                <h1 className=" text-lg">You have received 4$</h1>
                <p className="text-sm">Amin send you 4$ in your bank account. you can check.</p>
              </div>
            </div>
            <span className="">10:45 PM</span>
          </div>
          <div className="w-full p-1 md:pl-5 flex justify-between items-center gap-5 my-7 ">
            <div className="flex items-center gap-3 px-2 md:px-5 border-l-2 border-logocolor ">
              <div className=" w-16 h-16 rounded-full">
                <img
                  src="/images/user.webp"
                  alt="user"
                  className=" w-full h-full"
                />
              </div>
              <div>
                <h1 className=" text-lg">You have received 4$</h1>
                <p className="text-sm">Amin send you 4$ in your bank account. you can check.</p>
              </div>
            </div>
            <span className="">10:45 PM</span>
          </div>
          <div className="w-full p-1 md:pl-5 flex justify-between items-center gap-5 mt-7 ">
            <div className="flex items-center gap-3 px-2 md:px-5 border-l-2 border-[#CB7474] ">
              <div className=" w-16 h-16 rounded-full">
                <img
                  src="/images/user.webp"
                  alt="user"
                  className=" w-full h-full"
                />
              </div>
              <div>
                <h1 className=" text-lg">You have received 4$</h1>
                <p className="text-sm">Amin send you 4$ in your bank account. you can check.</p>
              </div>
            </div>
            <span className="">10:45 PM</span>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notification;
