import React from "react";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaPlus, FaAngleRight } from "react-icons/fa";


const ProductsPage = ({ showChat, showSingleProduct, showAddProduct }) => {
  const handelChat = () => {
    showChat();
  };

  const handleSingleProduct = () => {
    showSingleProduct();
  };


  const handleAddProduct = () => {
    showAddProduct();
  };


  return (
    <div>
    <div className="w-full bg-none lg:bg-active_bg p-0  lg:p-4  text-mobile_color lg:text-white rounded-md  mt-2">
      
    <div className="w-[95%] m-auto top-24 p-3 px-5 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color" onClick={handleAddProduct}>
        <div className="flex items-center gap-4">
          <FaPlus className="text-lg font-bold"  />
          <h2>Add your product</h2>
        </div>
        <FaAngleRight className="text-lg font-bold" />
      </div>
      
      <div className="hidden lg:flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-medium">Food Community :</h1>
        <p className="text-sm">
          Members have product or services for sell or exchange
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 mt-10 md:mt-0 mb-4 px-2 border-l-4 border-[#CB7474]">
        <div className="w-[90%] flex gap-2 items-center">
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between">
              <h2 className="text-sm md:text-lg font-bold cursor-pointer" onClick={handleSingleProduct}>I have Rice</h2>
              <span className="text sm font-medium">10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <BsChatRightTextFill
          className="text-2xl cursor-pointer"
          onClick={handelChat}
        />
      </div>
      <div className="flex items-center justify-between gap-4 mb-4 px-2 border-l-4 border-mobile_color lg:border-white">
        <div className="w-[90%] flex gap-2 items-center">
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between">
              <h2 className="text-sm md:text-lg font-bold">
                I have some Breads
              </h2>
              <span className="text sm font-medium">10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <BsChatRightTextFill
          className="text-2xl cursor-pointer"
          onClick={handelChat}
        />
      </div>
      <div className="flex items-center justify-between gap-4 mb-4 px-2 border-l-4 border-[#CB7474]">
        <div className="w-[90%] flex gap-2 items-center">
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between">
              <h2 className="text-sm md:text-lg font-bold">I have Rice</h2>
              <span className="text sm font-medium">10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <BsChatRightTextFill
          className="text-2xl cursor-pointer"
          onClick={handelChat}
        />
      </div>
      <div className="flex items-center justify-between gap-4 mb-4 px-2 border-l-4 border-mobile_color lg:border-white">
        <div className="w-[90%] flex gap-2 items-center">
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between">
              <h2 className="text-sm md:text-lg font-bold">
                I have some Breads
              </h2>
              <span className="text sm font-medium">10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <BsChatRightTextFill
          className="text-2xl cursor-pointer"
          onClick={handelChat}
        />
      </div>
      <div className="flex items-center justify-between gap-4 mb-4 px-2 border-l-4 border-[#CB7474]">
        <div className="w-[90%] flex gap-2 items-center">
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between">
              <h2 className="text-sm md:text-lg font-bold">I have Rice</h2>
              <span className="text sm font-medium">10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <BsChatRightTextFill
          className="text-2xl cursor-pointer"
          onClick={handelChat}
        />
      </div>
      <div className="flex items-center justify-between gap-4 mb-4 px-2 border-l-4 border-mobile_color lg:border-white">
        <div className="w-[90%] flex gap-2 items-center">
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between">
              <h2 className="text-sm md:text-lg font-bold">
                I have some Breads
              </h2>
              <span className="text sm font-medium">10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <BsChatRightTextFill
          className="text-2xl cursor-pointer"
          onClick={handelChat}
        />
      </div>
    </div>
    </div>
  );
};

export default ProductsPage;
