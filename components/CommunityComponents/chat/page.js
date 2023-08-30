import React from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";


const ChatPage = ({showExchangeCommodity}) => {

  const handleshowExchangeCommodity = () => {
    showExchangeCommodity();
  };
  return (
    <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4 text-mobile_color lg:text-white rounded-md flex flex-col justify-between h-full ">
      <div
        className="w-[95%] m-auto top-24 p-3 px-5 absolute z-10 flex md:hidden items-center text-white justify-center gap-7 rounded-3xl border-white border  bg-mobile_color"
        onClick={handleshowExchangeCommodity}
      >
        <h2>Exchange Commodity</h2>
        <FaAngleRight className="text-lg font-bold" />
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <h1 className="text-2xl font-medium mb-3">Food Community :</h1>
        <p className="text-base font-medium">
          Members have product or services for sell or exchange
        </p>
      </div>
      <div>
        <div className="flex items-center max-w-lg gap-2 px-2 mt-7 md:mt-0 border-l-2 border-[#CB7474]">
          <img
            src="/images/user.webp"
            alt="chat user image"
            className="w-18 h-16 rounded-full"
          />
          <div>
            <p className="text-xs md:text-sm bg-[#EAEAEA] lg:bg-white rounded-lg p-1 text-bg mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy
            </p>
            <span className="flex justify-end text-sm">10:45 PM</span>
          </div>
        </div>
        <div className="flex justify-end items-end mt-2">
          <div className="flex items-center justify-end max-w-lg gap-2 px-2 border-r-2 border-[#CB7474]">
            <div>
              <p className="text-xs md:text-sm bg-[#46417D] rounded-lg p-2 text-white mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy
              </p>
              <span className="text-sm">10:45 PM</span>
            </div>
            <img
              src="/images/user.webp"
              alt="chat user image"
              className="w-18 h-16 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center max-w-lg gap-2 mt-2 px-2 border-l-2 border-[#CB7474]">
          <img
            src="/images/user.webp"
            alt="chat user image"
            className="w-18 h-16 rounded-full"
          />
          <div>
            <p className="text-xs md:text-sm bg-[#EAEAEA] lg:bg-white rounded-lg p-1 text-bg mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy
            </p>
            <span className="flex justify-end text-sm">10:45 PM</span>
          </div>
        </div>

        <div className="flex justify-end items-end mt-2">
          <div className="flex items-center justify-end max-w-lg gap-2 px-2 border-r-2 border-[#CB7474]">
            <div>
              <p className="text-xs md:text-sm bg-[#46417D] rounded-lg p-2 text-white mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy
              </p>
              <span className="text-sm">10:45 PM</span>
            </div>
            <img
              src="/images/user.webp"
              alt="chat user image"
              className="w-18 h-16 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-24 ">
        <div className="bg-none md:bg-active_bg border border-border md:border-white rounded-xl w-full p-3 flex justify-between items-center">
          <input
            type="text"
            className="w-full"
            placeholder="Type message here..."
          />
          <MdOutlineKeyboardVoice className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
