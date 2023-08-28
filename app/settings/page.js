"use client";
import CreateGroup from "@/components/HomeComponents/CreateGroup/page";
import DashboardLayout from "@/components/DashboardLayout/page";
import React, { useState } from "react";

const Settings = () => {
  const faqData = [
    {
      question: "Profile",
      answer: "09 : 37 PM",
    },
    {
      question: "Members",
      answer: "09 : 37 PM",
    },
    {
      question: "Preferences :",
      answer: "09 : 37 PM",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <DashboardLayout>
      <CreateGroup />
      <div className="w-full bg-none  lg:bg-active_bg p-0 lg:p-4 gap-10 mt-3 relative text-mobile_text lg:text-white rounded-md ">
        <h1 className="text-4xl font-normal mb-5">Settings : </h1>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="mb-4 lg:bg-active_bg border  border-active_bg rounded-lg"
          >
            <button
              className="flex justify-between w-full py-2 px-4  text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl font-semibold">{item.question}</span>
              <span className="ml-2">{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-1 md:px-4">
                <p className="hidden lg:flex">Check Select the Bubble to confirm your preference</p>
                <div className="flex py-3 gap-1 md:gap-5">
                  
                  <div className="flex gap-3 p-1 md:p-2   border border-border lg:border-0 md:text-left text-center md:none rounded-lg justify-center">
                    <input type="radio" className="w-10 h-10 hidden md:block" name="opion1" />
                    <div className="flex flex-col gap-1">
                      <h1 className="bg-mobile_color md:bg-transparent lg:text-white  md:text-black text-white  rounded-2xl text-sm md:text-lg p-1">Weekly</h1>
                      <p className="text-xs md:text-sm">You can make Donation once in a week</p>
                    <button className="md:hidden flex bg-[#E6E6E6] text-center w-full text-sm  rounded-2xl p-1 mt-2 justify-center items-center">Select</button>
                    </div>

                  </div>
                  <div className="flex gap-3 p-1 md:p-2   border border-border lg:border-0 md:text-left text-center md:none rounded-lg justify-center">
                    <input type="radio" className="w-10 h-10 hidden md:block" name="opion1" />
                    <div className="flex flex-col gap-1">
                      <h1 className="bg-mobile_color md:bg-transparent lg:text-white  md:text-black text-white  rounded-2xl text-sm md:text-lg p-1">Bi-Weekly</h1>
                      <p className="text-xs md:text-sm">You can make Donation once in a week</p>
                    <button className="md:hidden flex bg-[#E6E6E6] text-center w-full text-sm rounded-2xl p-1 mt-2 justify-center items-center">Select</button>
                    </div>

                  </div>
                  <div className="flex gap-3 p-1 md:p-2   border border-border lg:border-0 md:text-left text-center md:none rounded-lg justify-center">
                    <input type="radio" className="w-10 h-10 hidden md:block" name="opion1" />
                    <div className="flex flex-col gap-1">
                      <h1 className="bg-mobile_color md:bg-transparent lg:text-white  md:text-black text-white  rounded-2xl text-sm md:text-lg p-1">Monthly</h1>
                      <p className="text-xs md:text-sm">You can make Donation once in a week</p>
                    <button className="md:hidden flex bg-mobile_color text-center w-full text-sm text-white rounded-2xl p-1 mt-2 justify-center items-center">Select</button>
                    </div>

                  </div>
                  
                 
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
