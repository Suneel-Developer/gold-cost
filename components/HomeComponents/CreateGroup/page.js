import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CreateGroup = ({onHandle}) => {

  const handleChange=()=> {
    onHandle()
  }
  return (
    <div className="hidden lg:w-full  bg-active_bg p-4 gap-10 text-white rounded-xl lg:flex ">
      <div className="flex flex-col  w-[70%]">
        <h1 className="text-3xl font-normal">Your Group</h1>
        <div className="p-5 ">
          <ul className="flex flex-col">
            <div className="flex justify-between mb-4">
              <li className="font-medium text-sm flex gap-4">
                Group : <span className="font-medium">ABCDEF</span>
              </li>

              <li className="font-medium	 text-sm flex gap-4">
                Donation : <span className="font-medium">20$</span>
              </li>
            </div>
            <div  className="flex justify-between">
              <li className="font-medium	 text-sm flex gap-4">
                Donation Limit : <span className="font-medium">4000$</span>
              </li>
              <li className="font-medium	 text-sm flex gap-4">
                Total Members : <span className="font-medium">4</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[30%] p-4 px-8 rounded-xl bg-[#5C55794D]">
        <button className="w-12 h-12 bg-bg flex justify-center items-center text-lg rounded-full border border-border" onClick={() => handleChange()}>
          <AiOutlinePlus className="text-xl font-extrabold" />
        </button>
        <h2 className="mt-2 font-normal tracking-wider text-base text-center ">
          Create Group
        </h2>
      </div>
    </div>
  );
};

export default CreateGroup;
