import React from "react";
import Link from "next/link";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaPlus, FaAngleRight } from "react-icons/fa";


const ProductPage = ({ handleSeeAll, showChat, showAddProduct }) => {
  const handleChange = () => {
    handleSeeAll();
  };

  const handelChat = () => {
    showChat();
  };

  const handleAddProduct = () => {
    showAddProduct();
  };

  return (
    <div>
      <div className="w-[95%] m-auto top-24 p-3 px-5 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border bg-mobile_color"  onClick={handleAddProduct}>
        <div className="flex items-center gap-4">
          <FaPlus className="text-lg font-bold"  />
          <h2>Add your product</h2>
        </div>
        <FaAngleRight className="text-lg font-bold" />
      </div>
      <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4 mt-10 md:mt-0  relative text-mobile_color lg:text-white rounded-lg ">
        <div className="hidden lg:flex justify-between items-center mb-2">
          <h1 className="text-2xl font-medium">Community Inventory :</h1>
          <button
            className="border border-border bg-active_bg px-7 py-2 rounded-lg"
            onClick={handleAddProduct}
          >
            Add Your Product
          </button>
        </div>
        <div className="bg-[#FAFAFA] md:bg-active_bg p-2 md:p-4 rounded-lg">
          <h2 className="text-2xl font-medium mb-1">Food Community :</h2>
          <p className="text-sm font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
      <div className="w-full bg-none lg:bg-active_bg p-0  lg:p-4 relative text-mobile_color lg:text-white rounded-md  mt-2">
        <div className="flex justify-between text-lg mb-2">
          <h2 className="text-2xl font-medium mb-1">Products :</h2>
          <Link href="#" onClick={handleChange}>
            See All
          </Link>
        </div>
        <div>
        <div className="flex items-center justify-between gap-4 mb-4 px-2 border-l-4 border-[#CB7474]">
            <div className="w-[90%] flex gap-2 items-center">
              <img
                src="/images/notification.png"
                alt="Product user"
                className="w-16"
              />
              <div>
                <div className="flex justify-between">
                  <h2 className="text-sm md:text-lg font-bold">
                    I have Rice
                  </h2>
                  <span className="text sm font-medium">10:45 PM</span>
                </div>
                <p className="text-xs md:text-base font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <BsChatRightTextFill className="text-2xl cursor-pointer" onClick={handelChat} />
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <BsChatRightTextFill className="text-2xl cursor-pointer" onClick={handelChat} />
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
                  <h2 className="text-sm md:text-lg font-bold">
                    I have some Breads
                  </h2>
                  <span className="text sm font-medium">10:45 PM</span>
                </div>
                <p className="text-xs md:text-base font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <BsChatRightTextFill className="text-2xl cursor-pointer" onClick={handelChat} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
