"use client";
import CreateGroup from "@/components/CreateGroup/page";
import DashboardLayout from "@/components/DashboardLayout/page";
import React, { useState } from "react";

const Members = () => {
  const faqData = [
    {
      question: "1. James.",
      answer: "09 : 37 PM",
    },
    {
      question: "2. Robert",
      answer: "09 : 37 PM",
    },
    {
      question: "3. William",
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
        <div className="w-[95%] top-24 p-3 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color">
          <h1 className="text-sm font-medium">
            Current Group : <span>1</span>
          </h1>
          <h1 className="text-sm font-medium">
            Total Donations : <span>2500 $</span>
          </h1>
        </div>
      <div className="w-full bg-none  lg:bg-active_bg p-0 lg:p-4 gap-10 mt-10 md:mt-3 text-mobile_text lg:text-white rounded-md ">
        <h1 className="text-2xl hidden md:flex  mb-5">Members </h1>
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
              <div className="flex px-2 md:px-7 flex-col md:flex-row py-3">
                <div className="w-full md:w-[50%] px-2 mb-3 md:mb-0 border-l-2  border-[#CB7474]">
                  <h1 className="px-4 flex items-center md:justify-start  justify-between gap-5 text-lg">
                    Donation: <span className="text-sm">{item.answer}</span>
                  </h1>
                  <h1 className="px-4 flex items-center md:justify-start  justify-between gap-5 text-lg">
                    Donate 1 $ <span className="text-sm">{item.answer}</span>
                  </h1>
                </div>
                <div className="w-full md:w-[50%] px-2 mb-3 md:mb-0 border-l-2  border-[#CB7474]">
                  <h1 className="px-4 flex items-center md:justify-start  justify-between gap-5 text-lg">
                    Receive <span className="text-sm">{item.answer}</span>
                  </h1>
                  <h1 className="px-4 flex items-center md:justify-start  justify-between gap-5 text-lg">
                    Receive 1 $ <span className="text-sm">{item.answer}</span>
                  </h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Members;
