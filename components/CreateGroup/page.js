import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const CreateGroup = () => {
  return (
    <div className="hidden md:w-full  bg-active_bg p-4 gap-10 text-white rounded-md md:flex ">
      <div className="flex flex-col  w-[70%]">
        <h1 className="text-xl font-bold">Your Group</h1>
        <div className="p-5 ">
          <ul className="flex flex-col">
            <div className="flex justify-between mb-4">
              <li className="font-normal text-base flex gap-4">
                Group : <span>ABCDEF</span>
              </li>

              <li className="font-normal text-base flex gap-4">
                Donation : <span>20$</span>
              </li>
            </div>
            <div  className="flex justify-between">
              <li className="font-normal text-base flex gap-4">
                Donation Limit : <span>4000$</span>
              </li>
              <li className="font-normal text-base flex gap-4">
                Total Members : <span>4</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <a href="/creategroup" className="flex flex-col justify-center items-center w-[30%] p-4 px-8 rounded bg-[#5C55794D]">
        <button className="w-12 h-12 bg-bg flex justify-center items-center text-lg rounded-full">
          <AiOutlinePlus />
        </button>
        <h2 className="mt-2 font-light tracking-wider	text-lg text-center ">
          Create Group
        </h2>
      </a>
    </div>
  );
};

export default CreateGroup;
