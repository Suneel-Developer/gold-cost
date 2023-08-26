import Link from "next/link";
import React from "react";
import CreateGroup from "../CreateGroup/page";
import { BiSolidChevronRight } from "react-icons/bi";

const AllCommunityPage = () => {
  return (
    <div>
      <CreateGroup />
      <div className="w-full bg-active_bg p-4  relative text-white rounded-md mt-3 flex flex-col ">
        <div className="flex justify-between items-center text-lg">
          <h1 className="text-2xl font-medium mb-3">Community Inventory :</h1>
          <Link href="">See All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-active_bg p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold">Food Community :</h1>
              <BiSolidChevronRight className="text-lg" />
            </div>
            <p className=" text-sm text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-active_bg p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold">Mobile Community :</h1>
              <BiSolidChevronRight className="text-lg" />
            </div>
            <p className=" text-sm text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-active_bg p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold">Computer Community :</h1>
              <BiSolidChevronRight className="text-lg" />
            </div>
            <p className=" text-sm text-[#E9E9E9]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="bg-active_bg p-4 shadow-md cursor-pointer rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold">Shoes Community :</h1>
              <BiSolidChevronRight className="text-lg" />
            </div>
            <p className=" text-sm text-[#E9E9E9]">
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
