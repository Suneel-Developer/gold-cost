import React from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";

const ChatPage = () => {
  return (
    <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4 relative text-mobile_color lg:text-white rounded-md flex flex-col justify-between h-full ">
      <div className="hidden lg:flex items-center gap-4">
        <h1 className="text-2xl font-medium mb-3">Food Community :</h1>
        <p className="text-base font-medium">
          Members have product or services for sell or exchange
        </p>
      </div>
      <div>
        <div className="flex items-center max-w-lg gap-2 px-2 border-l-2 border-[#CB7474]">
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
        <div className="bg-active_bg border border-white rounded-xl w-full p-3 flex justify-between items-center">
          <input type="text" className="w-full"placeholder="Type message here..." />
          <MdOutlineKeyboardVoice className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
