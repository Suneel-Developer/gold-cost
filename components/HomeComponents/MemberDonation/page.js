import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const MemberDonation = ({ onHandle }) => {
  const handleChange = () => {
    onHandle();
  };
  return (
    <div className="w-full bg-none lg:bg-active_bg p-0 md:p-4  text-mobile_color md:text-white rounded-lg  mt-2">
      <div className="w-[92%] m-auto top-16 p-3 absolute z-10 flex md:hidden text-white flex-col rounded-3xl border-white border  bg-mobile_color">
        <div className="w-full flex justify-between items-center gap-1">
          <h1 className="text-sm font-medium">
            Current Group : <span>1</span>
          </h1>
          <h1 className="text-sm font-medium">
            Next Payout : 1 $ <span className="text-xs">(weekly)</span>
          </h1>
        </div>
        <h1 className="text-sm font-medium py-3">Limit : 1 $</h1>
        <p className="text-[10px]  text-center">If you donate 0 to 1$ you will  be member of this group.</p>
      </div>
      <div className="md:hidden flex w-full mb-4 gap-3 mt-14">
        <button
          onClick={() => handleChange()}
          className="flex-1 border border-border p-1 text-mobile_color font-medium shadow-md rounded-3xl"
        >
          Custom Donation
        </button>
        <Link
          href="/members"
          className="flex-1 border text-center border-border p-1 text-mobile_color font-medium shadow-md rounded-3xl"
        >
          Add Member
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="md:flex hidden items-end gap-5 text-xl">Group 1 :</h1>
        <p className="text-sm flex ">
          You are member of “Group 1” you can donate 1$.
        </p>
      </div>

      <div>
        <label htmlFor="amount" className="block text-lg py-2">
          Amount :
        </label>
        <div className="flex gap-5 flex-col md:flex-row items-center justify-between">
          <input
            type="text"
            placeholder="1 USD"
            className="w-full md:w-[70%] bg-none md:bg-active_bg rounded-3xl md:rounded-lg p-3 text-lg border-border border md:border-0 "
          />
          <button
            className="w-[70%] md:w-[25%] bg-mobile_color md:bg-active_bg text-white px-10 py-2 text-lg rounded-3xl md:rounded-lg text-center border border-white"
            onClick={() => handleChange()}
          >
            Donate
          </button>
        </div>
        <p className="text-lg md:flex hidden my-3">
          Want to make a <span className="text-xl">“ Custom Donation’?</span>
        </p>

        <div>
          <div className="flex justify-between items-center gap-2 my-5 md:mb-2">
            <h1 className="text-xl">Members :</h1>
            <p className="text-lg">Details</p>
          </div>

          <div className="flex justify-between gap-2 md:gap-4 border md:border-0 border-border p-2 rounded-xl">
            <div className="w-full md-w-[60%] gap-3 flex flex-col">
              <div className="flex justify-between items-center">
                <h2 className="text-xl">1. James.</h2>
                <span>Paid</span>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-xl">2. Robert..</h2>
                <span>Paid</span>
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-xl">3. William..</h2>
                <span>Un-paid</span>
              </div>
            </div>
            <div className="w-[40%] hidden bg-active_bg rounded-lg md:flex justify-center items-center flex-col gap-4 p-4">
              <span className="w-10 h-10 rounded-full bg-mobile_color flex justify-center items-center text-lg">
                <Link href="/members">
                  <FaPlus />
                </Link>
              </span>
              <h2>Add Member</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDonation;
