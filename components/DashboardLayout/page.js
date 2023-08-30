"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar/page";
import Topbar from "../Header/page";
import ProfileBar from "../profilebar/page";
import MobileNavigation from "../MobileNavigation/page";

const DashboardLayout = ({ children }) => {
  // Sidebar closed by default on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileBarOpen, setIsProfileBarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleProfileBar = () => {
    setIsProfileBarOpen(!isProfileBarOpen);
  };

  const hideProfileBar = () => {
    setIsProfileBarOpen(false);
  };
  return (
    <div className="relative w-full h-screen bg-none  lg:bg-[url('/images/mainBg.webp')] bg-no-repeat bg-cover">
      <div className=" absolute right-0 top-0 z-0 lg:block hidden ">
        <img src="/images/bg.webp" alt="Bg" className="w-full  h-screen opacity-10" />
      </div>
      <Sidebar isOpen={isSidebarOpen} hideSidebar={hideSidebar} />
      <div className={`relative main-content flex flex-col flex-1 overflow-y-auto sm:pb-0 pb-24 z-10`}>
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="content p-2 md:p-7">
          {children}
        </div>
      </div>

      {/* <MobileNavigation /> */}
      <div className="sm:hidden z-10 flex justify-center items-center">
      <MobileNavigation />
    </div>

      <ProfileBar isOpen={isProfileBarOpen} hideProfileBar={hideProfileBar} />
    </div>
  );
};

export default DashboardLayout;
