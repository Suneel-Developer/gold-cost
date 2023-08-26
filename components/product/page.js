import Link from "next/link";
import React from "react";
import { BsChatRightTextFill } from "react-icons/bs";

const ProductPage = () => {
  return (
    <div>
      <div className="w-full bg-active_bg p-4 relative text-white rounded-lg ">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-medium">Community Inventory :</h1>
          <Link href="#" className="border border-white bg-active_bg px-7 py-2 rounded-lg">Add Your Product</Link>
        </div>
        <div className="bg-active_bg p-4 rounded-lg">
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
      <div className="w-full bg-active_bg p-4 relative text-white rounded-md  mt-2">
        <div className="flex justify-between text-lg mb-2">
          <h2 className="text-2xl font-medium mb-1">Products :</h2>
          <Link href="#">See All</Link>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4 px-2 border-l-2 border-[#CB7474]">
            <div className="flex gap-2 items-center">
            <img src="/images/notification.png" alt="Product user" className="w-16" />
            <div>
              <div className="flex justify-between text-lg">
                <Link href="#" className="text-xl font-medium">I have Rice</Link>
                <span>10:45 PM</span>
              </div>
              <p className="text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            </div>
            <Link href="#" className="text-2xl">
              <BsChatRightTextFill />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-4 px-2 border-l-2 border-white">
            <div className="flex gap-2 items-center">
            <img src="/images/notification.png" alt="Product user" className="w-16" />
            <div>
              <div className="flex justify-between text-lg">
                <Link href="#" className="text-xl font-medium">I have some Breads</Link>
                <span>10:45 PM</span>
              </div>
              <p className="text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            </div>
            <Link href="#" className="text-2xl">
              <BsChatRightTextFill />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-4 px-2 border-l-2 border-[#CB7474]">
            <div className="flex gap-2 items-center">
            <img src="/images/notification.png" alt="Product user" className="w-16" />
            <div>
              <div className="flex justify-between text-lg">
                <Link href="#" className="text-xl font-medium">I have some Breads</Link>
                <span>10:45 PM</span>
              </div>
              <p className="text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            </div>
            <Link href="#" className="text-2xl">
              <BsChatRightTextFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
