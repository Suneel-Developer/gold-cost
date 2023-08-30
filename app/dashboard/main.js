import React from "react";
import Link from "next/link";
import MobileProfile from "@/components/MobileProfile/page";
import Slider from "@/components/Slider/page";
import { BiSolidChevronRight } from "react-icons/bi";

const Main = ({onHandle}) => {
  const handleChange=()=> {
    onHandle()
  }
  return (
    <>
      <div className="sm:hidden flex flex-col">
        <MobileProfile />
        <div className=" flex  w-full gap-5 mb-2">
          <Link
            href="/contributions"
            className="bg-mobile_color flex-1 text-white text-center px-4 py-4 text-sm font-medium rounded-xl"
          >
            View Contributions
          </Link>
          <Link
            href="/members"
            className="bg-mobile_color flex-1 text-center text-white px-5 py-4 text-sm font-medium rounded-xl"
          >
            Members
          </Link>
        </div>

        <div>
          <h1 className="text-xl font-bold py-3">Your Present Group:</h1>
          <div className="p-2 border-border border rounded-xl mb-4">
            <div className="flex w-full items-center">
              <h1 className="text-base font-bold flex-1">Group : <span className="text-sm font-normal">ABCDEF</span></h1>
              <h1 className="text-base font-bold flex-1">Donation Limit : <span className="text-sm font-normal">4000$</span></h1>
            </div>
            <div className="flex w-full items-center">
              <h1 className="text-base font-bold flex-1">Donation : <span className="text-sm font-normal">20$</span></h1>
              <h1 className="text-base font-bold flex-1">Total Members : <span className="text-sm font-normal">4</span></h1>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 mb-2">
          <button className="bg-mobile_color flex-1 px-1 text-white  py-5 text-sm font-medium rounded-xl">
            Community Help Inventory
          </button>
          <button
            className="bg-mobile_color text-white flex-1 py-5 text-sm font-medium rounded-xl"
            onClick={() => handleChange()}
          >
            Create Group
          </button>
        </div>
      </div>
      <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4  relative text-mobile_color lg:text-white rounded-md mt-3 hidden sm:flex flex-col ">
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

      <div className="flex items-center justify-center mt-2 relative">
        <Slider />
      </div>
    </>
  );
};

export default Main;
