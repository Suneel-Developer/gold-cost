import Link from "next/link";
import React from "react";
import { BsChatRightTextFill } from "react-icons/bs";

const ProductsPage = () => {
  return (
    <div className="w-full bg-active_bg p-4 relative text-white rounded-md  mt-2">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-medium">Food Community :</h1>
        <p className="text-sm">
          Members have product or services for sell or exchange
        </p>
      </div>
      <div className="flex items-center justify-between mb-4 px-2 border-l-2 border-[#CB7474]">
        <div className="flex gap-2 items-center">
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between text-lg">
              <Link href="#" className="text-xl font-medium">
                I have Rice
              </Link>
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
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between text-lg">
              <Link href="#" className="text-xl font-medium">
                I have some Breads
              </Link>
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
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between text-lg">
              <Link href="#" className="text-xl font-medium">
                I have some Breads
              </Link>
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
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between text-lg">
              <Link href="#" className="text-xl font-medium">
                I have some Breads
              </Link>
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
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between text-lg">
              <Link href="#" className="text-xl font-medium">
                I have some Breads
              </Link>
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
          <img
            src="/images/notification.png"
            alt="Product user"
            className="w-16"
          />
          <div>
            <div className="flex justify-between text-lg">
              <Link href="#" className="text-xl font-medium">
                I have some Breads
              </Link>
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
  );
};

export default ProductsPage;
