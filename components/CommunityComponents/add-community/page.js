import CreateGroup from "@/components/CreateGroup/page";
import React from "react";
import { FaPlus, FaAngleRight } from "react-icons/fa";

const AddCommunity = ({ onHandle }) => {
  const handleChange = () => {
    onHandle();
  };
  return (
    <div>
      <CreateGroup />
      <div className="w-[95%] m-auto top-24 p-3 px-5 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color">
        <div className="flex items-center gap-4">
          <FaPlus className="text-lg font-bold"  />
          <h2>Add a community</h2>
        </div>
        <FaAngleRight className="text-lg font-bold" />
      </div>
      <div className="w-full bg-none mt-10 md:mt-3 lg:bg-active_bg p-0 lg:p-4 relative text-mobile_color lg:text-white rounded-xl flex flex-col ">
        <h1 className="text-3xl font-medium hidden lg:flex mb-3">
          Community Inventory :
        </h1>
        <form method="post" className="flex flex-col gap-3 ">
          <label className="block lg:hidden text-lg font-bold ">
            Community Name :
          </label>
          <input
            type="text"
            placeholder="Enter Community name here..."
            className="w-full p-4 rounded-xl border border-border lg:border-0 bg-none lg:bg-active_bg text-lg "
          />
          <label className="block lg:hidden text-lg font-bold ">
            Community Description :
          </label>
          <textarea
            cols="30"
            rows="5"
            placeholder="Write Description"
            className="w-full p-4 rounded-xl border border-border lg:border-0 bg-none lg:bg-active_bg text-lg resize-none outline-none "
          />
          <button
            className="bg-mobile_color lg:bg-active_bg py-3 text-white px-16 my-3 border border-white w-auto m-auto rounded-xl text-lg font-medium"
            onClick={handleChange}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCommunity;
