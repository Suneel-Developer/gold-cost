import React from "react";
import CreateGroup from "../../HomeComponents/CreateGroup/page";

const AddCommunity = ({onHandle}) => {

  const handleChange=()=> {
    onHandle()
  }
  return (
    <div>
      <CreateGroup />
      <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4 relative text-mobile_color lg:text-white rounded-md mt-3 flex flex-col ">
        <h1 className="text-2xl font-medium hidden lg:flex mb-3">Community Inventory :</h1>
        <form method="post" className="flex flex-col gap-3 ">
          <label className="block lg:hidden text-lg font-bold ">Community Name :</label>
          <input
            type="text"
            placeholder="Enter Community name here..."
            className="w-full p-3 rounded-lg border border-border lg:border-0 bg-none lg:bg-active_bg text-base"
          />
          <label className="block lg:hidden text-lg font-bold ">Community Description :</label>
          <textarea
            cols="30"
            rows="7"
            placeholder="Write Description"
            className="w-full p-3 rounded-lg border border-border lg:border-0 bg-none lg:bg-active_bg text-base resize-none outline-none"
          />
          <button className="bg-mobile_color lg:bg-active_bg py-2 text-white px-16 my-3 border border-white w-auto m-auto rounded-lg text-lg font-medium" onClick={handleChange}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCommunity;
