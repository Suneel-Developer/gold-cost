import Slider from "@/components/Slider/page";
import Link from "next/link";
import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";

const Main = () => {
  const handleChange = ({ onHandle }) => {
    onHandle();
  };
  return (
    <>
      <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4  relative text-mobile_color lg:text-white rounded-md mt-3 flex flex-col ">
        <div className="md:hidden flex justify-between w-full gap-2 mb-2">
          <button className="bg-mobile_color text-white px-4 py-4 text-sm font-medium rounded-xl">
            Community Help Inventory
          </button>
          <button
            className="bg-mobile_color text-white px-5 py-4 text-sm font-medium rounded-xl"
            onClick={() => handleChange()}
          >
            Create Group
          </button>
        </div>
        <div className="hidden lg:flex justify-between items-center text-lg">
          <h1 className="text-3xl font-normal mb-3">Community Inventory :</h1>
          <Link href="" className="text-xl font-semibold">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base font-semibold">Food Community :</h1>
              <BiSolidChevronRight className="text-xl" />
            </div>
            <p className="text-xs font-light text-mobile_color  lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base font-semibold">Mobile Community :</h1>
              <BiSolidChevronRight className="text-xl" />
            </div>
            <p className="text-xs font-light text-mobile_color lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base font-semibold">Computer Community :</h1>
              <BiSolidChevronRight className="text-xl" />
            </div>
            <p className="text-xs font-light text-mobile_color lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-base font-semibold">Shoes Community :</h1>
              <BiSolidChevronRight className="text-xl" />
            </div>
            <p className="text-xs font-light text-mobile_color lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-2">
        <Slider />
      </div>
    </>
  );
};

export default Main;
