import Link from "next/link";
import React from "react";
import CreateGroup from "../CreateGroup/page";

const AddCommunity = () => {
  return (
    <div>
      <CreateGroup />
      <div className="w-full bg-active_bg p-4 relative text-white rounded-md mt-3 flex flex-col ">
        <h1 className="text-2xl font-medium mb-3">Community Inventory :</h1>
        <form method="post" className="flex flex-col gap-3 ">
          <input
            type="text"
            placeholder="Enter Community name here..."
            className="w-full p-3 rounded-lg bg-active_bg text-base"
          />
          <textarea
            cols="30"
            rows="7"
            placeholder="Write Description"
            className="w-full p-3 rounded-lg bg-active_bg text-base resize-none outline-none"
          />
          <button className="bg-active_bg py-2 px-10 my-3 border border-white w-auto m-auto rounded-lg text-lg font-medium">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCommunity;
