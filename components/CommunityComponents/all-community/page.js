import Link from "next/link";
import React from "react";
import CreateGroup from "../../HomeComponents/CreateGroup/page";
import { FaPlus, FaAngleRight } from "react-icons/fa";

const AllCommunityPage = ({onHandle, showAddCommunity}) => {

  const handleChange=()=> {
    onHandle()
  }
  const handleshowAddCommunity=()=> {
    showAddCommunity()
  }
  return (
    <div>
      <CreateGroup />

      <div className="w-[95%] m-auto top-24 p-3 px-5 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color" onClick={handleshowAddCommunity}>
        <div className="flex items-center gap-4">
          <FaPlus className="text-lg font-bold"  />
          <h2>Add a community</h2>
        </div>
        <FaAngleRight className="text-lg font-bold" />
      </div>
      <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4  relative text-mobile_color lg:text-white rounded-md mt-10 md:mt-3 flex flex-col ">
        <div className="hidden lg:flex justify-between items-center text-lg">
          <h1 className="text-2xl font-medium mb-3">Community Inventory :</h1>
          <Link href="" onClick={handleChange}>See All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold" onClick={handleChange}>Food Community :</h1>
              <FaAngleRight className="text-xl" onClick={handleChange} />
            </div>
            <p className=" text-sm text-mobile_color lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold">Mobile Community :</h1>
              <FaAngleRight className="text-xl" />
            </div>
            <p className=" text-sm text-mobile_color lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold">Computer Community :</h1>
              <FaAngleRight className="text-xl" />
            </div>
            <p className=" text-sm text-mobile_color lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-none lg:bg-active_bg border border-border lg:border-0 p-4 cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-extrabold">Shoes Community :</h1>
              <FaAngleRight className="text-xl" />
            </div>
            <p className=" text-sm text-mobile_color lg:text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCommunityPage;
