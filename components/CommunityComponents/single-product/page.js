import React from "react";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

const SingleProductPage = ({ showChat, showExchangeCommodity }) => {
  const handelChat = () => {
    showChat();
  };
  const handleshowExchangeCommodity = () => {
    showExchangeCommodity();
  };
  return (
    <div className="w-full bg-none lg:bg-active_bg p-0 md:p-4 text-[#3D3D3D] lg:text-white rounded-md flex flex-col">
      <div
        className="w-[95%] m-auto top-24 p-3 px-5 absolute z-10 flex md:hidden items-center text-white justify-center gap-7 rounded-3xl border-white border  bg-mobile_color"
        onClick={handleshowExchangeCommodity}
      >
        <h2>Exchange Commodity</h2>
        <FaAngleRight className="text-lg font-bold" />
      </div>

      <div className="hidden md:flex items-center gap-4 ">
        <h1 className="text-2xl font-medium mb-3">Food Community :</h1>
        <p className="text-base font-medium">
          Members have product or services for sell or exchange
        </p>
      </div>

      <div className="flex items-center justify-between pl-0 md:pl-2 border-l-0 mt-7 md:mt-0 md:border-l-2 md:border-[#CB7474]">
        <div className="flex items-center gap-4">
          <img
            src="/images/notification.png"
            alt="User"
            className="w-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold">Richard</h2>
            <p>Member of the community</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <BsChatRightTextFill
            className="text-xl cursor-pointer"
            onClick={handelChat}
          />
          <button
            onClick={handleshowExchangeCommodity}
            className="border border-white bg-active_bg hidden md:block rounded-lg px-6 py-2 text-lg"
          >
            Exchange Commodity
          </button>
        </div>
      </div>

      <div className="mt-5 w-full flex gap-5 flex-col md:flex-row">
        <img
          src="/images/product.webp"
          alt="product"
          className="w-full md:w-1/2 h-60"
        />
        <div>
          <div className="flex justify-between items-center bg-active_bg rounded-lg p-2 mb-2">
            <div className="flex gap-5 items-center ">
              <h2 className="text-lg">Title :</h2>
              <h1 className="text-lg">I have Rice</h1>
            </div>
            <span className="text-sm">10:45 PM</span>
          </div>
          <p className="text-sm">
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
      <div className="w-full text-sm mt-5">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default SingleProductPage;
