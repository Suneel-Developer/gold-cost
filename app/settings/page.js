"use client";
import CreateGroup from "@/components/CreateGroup/page";
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
      <div className="w-full bg-none  md:bg-active_bg p-0 md:p-4 gap-10 mt-3 relative text-mobile_text md:text-white rounded-md ">
        <h1 className="text-2xl mb-5">Settings : </h1>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="mb-4 md:bg-active_bg border  border-active_bg rounded-lg"
          >
            <button
              className="flex justify-between w-full py-2 px-4  text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl font-semibold">{item.question}</span>
              <span className="ml-2">{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4">
                <p>Check Select the Bubble to confirm your preference</p>
                <div className="flex py-3 gap-5">
                  <div className="flex gap-3 p-2 border md:border-0 shadow-md md:none rounded-lg justify-center">
                    <input type="radio" className="w-10 h-10 hidden md:block" name="opion1" />
                    <div className="flex flex-col gap-1">
                      <h1>Weekly</h1>
                      <p>You can make Donation once in a week</p>
                    </div>
                  </div>
                  <div className="flex gap-3 border-x-2 border-white p-2">
                    <input type="radio" className="w-10 h-10 hidden md:block" name="opion1" />
                    <div className="flex flex-col gap-1">
                      <h1>Bi- Weekly</h1>
                      <p>You can make Donation once in a week</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-2">
                    <input type="radio" className="w-10 h-10 hidden md:block" name="opion1" />
                    <div className="flex flex-col gap-1">
                      <h1>Monthly</h1>
                      <p>You can make Donation once in a week</p>
                      <button>Select</button>
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
