import React from "react";
import {PiDownloadSimple} from "react-icons/pi"
import { FaPlus, FaAngleRight } from "react-icons/fa";


const AddProduct = ({showAddCommunity}) => {

  const handleshowAddCommunity = ()=>{
    showAddCommunity()
  }
  return (
    <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4 mt-3  text-mobile_color lg:text-white rounded-md flex flex-col ">
      <div className="w-[95%] m-auto top-24 p-3 px-5 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color" onClick={handleshowAddCommunity}>
        <div className="flex items-center gap-4">
          <FaPlus className="text-lg font-bold"  />
          <h2>Add a community</h2>
        </div>
        <FaAngleRight className="text-lg font-bold" />
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <h1 className="text-2xl font-medium mb-3">Food Community :</h1>
        <p className="text-base font-medium">
          Members have product or services for sell or exchange
        </p>
      </div>
      <form method="post" className="flex flex-col gap-2">

      <div className="w-[150px] m-auto text-border block md:hidden bg-[#F4F4F4] mt-7 md:mt-0  rounded-md">
          <input type="file" id="file" className="hidden" />
          <label
            for="file"
            className="text-border cursor-pointer flex items-center justify-center text-center p-3 gap-3"
          >
            <PiDownloadSimple className=" text-lg font-extrabold  " />
            Select Image
          </label>
        </div>

        <label
          htmlFor="productname"
          className="block text-lg font-medium tracking-wider"
        >
          Product Title :
        </label>
        <input
          type="text"
          placeholder="Enter Product  Title"
          className="w-full p-3 rounded-lg border border-border lg:border-0 bg-none lg:bg-active_bg text-base placeholder-mobile_color lg:placeholder-white"
        />
        <label
          htmlFor="productname"
          className="block text-lg font-medium tracking-wider mt-4"
        >
          Product Description :
        </label>
        <textarea
          cols="30"
          rows="7"
          placeholder="Write Product Description"
          className="w-full p-3 rounded-lg border outline-none border-border lg:border-0 bg-none lg:bg-active_bg text-base placeholder-mobile_color lg:placeholder-white"
        />
      </form>

      <div className="flex lg:hidden justify-center items-center mt-5">
        <button className="bg-mobile_color text-white rounded-lg text-lg px-16 py-2">Add</button>
      </div>
    </div>
  );
};

export default AddProduct;
