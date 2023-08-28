import Link from "next/link";
import React from "react";

const CustomDonation = ({onHandle}) => {
  const handleChange=()=> {
    onHandle()
  }
  return (
    <div className="bg-mobile_color lg:bg-active_bg p-4 rounded-lg mt-2 text-white">
      <h1 className="text-2xl tracking-wider mb-2">Custom Donation :</h1>
      <form>
        <div>
          <label
            htmlFor="group main"
            className="block pb-2 text-lg font-medium"
          >
            Group Name :
          </label>
          <input
            type="text"
            placeholder="Enter Group name"
            className="w-full p-4 rounded-lg bg-active_bg"
          />
        </div>

        <div className="my-3">
          <label
            htmlFor="group main"
            className="block pb-2 text-lg font-medium"
          >
            Amount Limit :
          </label>
          <textarea
            type="text"
            placeholder="Enter Group name"
            className="w-full p-4 rounded-lg bg-active_bg resize-none"
          />
        </div>

        <p className="text-lg my-3">
          If you make a “Custom Donation” you will move to a new custom group
        </p>

        <div className="flex justify-center items-center gap-5 mt-5">
          <Link
            href="#"
            className="border border-border rounded-lg px-10 py-2 text-lg"
          >
            Cancel
          </Link>
          <button className="border border-border rounded-lg px-10 py-2 text-lg bg-active_bg" onClick={()=> handleChange()}>
            Move
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomDonation;
