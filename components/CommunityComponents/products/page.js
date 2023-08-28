import Link from "next/link";
import React from "react";
import { BsChatRightTextFill } from "react-icons/bs";

const ProductsPage = ({ showChat, showSingleProduct }) => {
  const handelChat = () => {
    showChat();
  };

  const handleSingleProduct = () => {
    showSingleProduct();
  };

  return (
    <div className="w-full bg-none lg:bg-active_bg p-0  lg:p-4 relative text-mobile_color lg:text-white rounded-md  mt-2">
      <div className="hidden lg:flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-medium">Food Community :</h1>
        <p className="text-sm">
          Members have product or services for sell or exchange
        </p>
      </div>
      <div className="flex items-center justify-between gap-3 mb-4 px-2 border-l-2 border-[#CB7474]">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={handleSingleProduct}
        >
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-10 lg:w-16"
          />
          <div>
            <div className="flex justify-between text-sm lg:text-lg">
              <h1 className="text-lg lg:text-xl font-bold">I have Rice</h1>
              <span>10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <button onClick={handelChat}>
          <BsChatRightTextFill className="text-lg md:text-2xl" />
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 mb-4 px-2 border-l-2 border-mobile_color lg:border-white">
        <div
          className="flex gap-2 cursor-pointer"
          onClick={handleSingleProduct}
        >
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-10 lg:w-16"
          />
          <div>
            <div className="flex justify-between text-sm lg:text-lg">
              <h1 className="text-lg lg:text-xl font-bold">
                I have some Breads
              </h1>
              <span>10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <button onClick={handelChat}>
          <BsChatRightTextFill className="text-lg md:text-2xl" />
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 mb-4 px-2 border-l-2 border-[#CB7474]">
        <div
          className="flex gap-2 cursor-pointer"
          onClick={handleSingleProduct}
        >
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-10 lg:w-16"
          />
          <div>
            <div className="flex justify-between text-sm lg:text-lg">
              <h1 className="text-lg lg:text-xl font-bold">I have Rice</h1>
              <span>10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <button onClick={handelChat}>
          <BsChatRightTextFill className="text-lg md:text-2xl" />
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 mb-4 px-2 border-l-2 border-mobile_color lg:border-white">
        <div className="flex gap-2 cursor-pointer" onClick={handleSingleProduct}>
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-10 lg:w-16"
          />
          <div>
            <div className="flex justify-between text-sm lg:text-lg">
              <h1 className="text-lg lg:text-xl font-bold">
                I have some Breads
              </h1>
              <span>10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <button onClick={handelChat}>
          <BsChatRightTextFill className="text-lg md:text-2xl" />
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 mb-4 px-2 border-l-2 border-[#CB7474]">
        <div className="flex gap-2 cursor-pointer" onClick={handleSingleProduct}>
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-10 lg:w-16"
          />
          <div>
            <div className="flex justify-between text-sm lg:text-lg">
              <h1 className="text-lg lg:text-xl font-bold">
                I have Rice
              </h1>
              <span>10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <button onClick={handelChat}>
          <BsChatRightTextFill className="text-lg md:text-2xl" />
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 mb-4 px-2 border-l-2 border-mobile_color lg:border-white">
        <div className="flex gap-2 cursor-pointer" onClick={handleSingleProduct}>
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-10 lg:w-16"
          />
          <div>
            <div className="flex justify-between text-sm lg:text-lg">
              <h1 className="text-lg lg:text-xl font-bold">
                I have some Breads
              </h1>
              <span>10:45 PM</span>
            </div>
            <p className="text-xs md:text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <button onClick={handelChat}>
          <BsChatRightTextFill className="text-lg md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
