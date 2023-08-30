import Link from "next/link";
import React from "react";

const CustomDonation = ({ onHandle }) => {
  const handleChange = () => {
    onHandle();
  };
  return (
    <div className="w-full">
      <div className="w-[95%] m-auto top-16 p-3 absolute z-10 flex md:hidden text-white flex-col rounded-3xl border-white border  bg-mobile_color">
        <div className="w-full flex justify-between items-center gap-1">
          <h1 className="text-sm font-medium">
            Current Group : <span>1</span>
          </h1>
          <h1 className="text-sm font-medium">
            Next Payout : 1 $ <span className="text-xs">(weekly)</span>
          </h1>
        </div>
        <h1 className="text-sm font-medium py-3">Limit : 1 $</h1>
        <p className="text-[10px]  text-center">
          If you donate 0 to 1$ you will be member of this group.
        </p>
      </div>
      <div className="bg-mobile_color lg:bg-active_bg p-4 rounded-lg mt-12 md:mt-2 text-white">
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
              className="border border-border rounded-3xl md:rounded-lg px-10 py-2 text-lg"
            >
              Cancel
            </Link>
            <button
              className="border border-border rounded-3xl md:rounded-lg px-10 py-2 text-lg bg-active_bg"
              onClick={() => handleChange()}
            >
              Move
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomDonation;
