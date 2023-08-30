import React from "react";

const Groups = ({ onHandle }) => {
  const handleChange = () => {
    onHandle();
  };
  return (
    <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4  text-mobile_color  lg:text-white rounded-lg  mt-2">
      <div className="w-[92%] m-auto top-24 p-3 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color">
        <h1 className="text-sm font-medium">
          Current Group : <span>1</span>
        </h1>
        <h1 className="text-sm font-medium">
          Total Donations : <span>2500 $</span>
        </h1>
      </div>
      <p className="lg:hidden max-w-[90%] m-auto text-center font-normal mt-7  flex text-lg text-[#373737]">
        If you Donate some Amount, you will be moved to another Group
      </p>
      <h1 className="text-3xl font-normal hidden lg:flex mb-2">
        Create Group :
      </h1>

      <p className="text-sm font-bold flex md:hidden my-2">Group 1 :</p>
      <div className="flex justify-between items-center lg:border-0 border border-border gap-2 rounded-2xl px-2 mb-3">
        <div className="w-[75%] flex flex-col lg:flex-row bg-none lg:bg-active_bg  py-3 rounded-xl p-2 items-center">
          <h1 className="hidden lg:flex lg:w-[20%] text-xl font-extrabold">
            Group 1 :
          </h1>
          <p className="text-sm font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
        </div>
        <button
          className=" w-[30%] lg:w-[20%] bg-mobile_color lg:bg-active_bg text-white rounded-xl py-2 md:py-4 font-extrabold text-xl"
          onClick={() => handleChange()}
        >
          Start
        </button>
      </div>

      <p className="text-sm font-bold flex lg:hidden my-2">Group 2 :</p>
      <div className="flex justify-between items-center lg:border-0 border border-border gap-2 rounded-2xl px-2 mb-3">
        <div className="w-[75%] flex flex-col lg:flex-row bg-none lg:bg-active_bg  py-3 rounded-xl p-2 items-center">
          <h1 className="hidden lg:flex lg:w-[20%] text-xl font-extrabold">
            Group 2 :
          </h1>
          <p className="text-sm font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
        </div>
        <button
          className=" w-[30%] lg:w-[20%] bg-mobile_color lg:bg-active_bg text-white rounded-xl py-2 md:py-4 font-extrabold text-xl"
          onClick={() => handleChange()}
        >
          Start
        </button>
      </div>

      <p className="text-sm font-bold flex lg:hidden my-2">Group 3 :</p>
      <div className="flex justify-between items-center lg:border-0 border border-border gap-2 rounded-2xl px-2 mb-3">
        <div className="w-[75%] flex flex-col lg:flex-row bg-none lg:bg-active_bg  py-3 rounded-xl p-2 items-center">
          <h1 className="hidden lg:flex lg:w-[20%] text-xl font-extrabold">
            Group 3 :
          </h1>
          <p className="text-sm font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
        </div>
        <button
          className=" w-[30%] lg:w-[20%] bg-mobile_color lg:bg-active_bg text-white rounded-xl py-2 md:py-4 font-extrabold text-xl"
          onClick={() => handleChange()}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Groups;
