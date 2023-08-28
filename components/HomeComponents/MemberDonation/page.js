import React from "react";
import { FaPlus } from "react-icons/fa";

const MemberDonation = ({onHandle}) => {
  const handleChange=()=> {
    onHandle()
  }
  return (
    <div className="w-full bg-mobile_color lg:bg-active_bg p-4 relative text-white rounded-lg  mt-2">
      <h1 className="flex items-end gap-5 text-xl">
        Group 1 :
        <p className="text-sm md:flex hidden ">
          You are member of “Group 1” you can donate 1$.
        </p>
      </h1>

      <div>
        <label htmlFor="amount" className="block text-lg py-2">
          Amount :
        </label>
        <div className="flex gap-5 flex-col md:flex-row items-center justify-between">
          <input
            type="text"
            placeholder="1 USD"
            className="w-full md:w-[70%] bg-active_bg rounded-lg p-3 text-lg "
          />
          <button className="w-[70%] md:w-[25%] bg-active_bg px-10 py-2 text-lg rounded-3xl md:rounded-lg text-center border border-white" onClick={()=> handleChange()}>
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

          <div className="flex justify-between gap-5">
            <div className="w-full md-w-[60%]">
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
                <span className="w-10 h-10 rounded-full bg-mobile_color flex justify-center items-center text-lg"><FaPlus /></span>
                <h2>Add Member</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDonation;
