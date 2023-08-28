"use client"
import DonationPopup from "@/components/HomeComponents/DonatePopup";
import Link from "next/link";
import React, {useState} from "react";

const Donate = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDonateClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="bg-mobile_color lg:bg-active_bg p-4 rounded-lg mt-2 text-white relative ">
      <h1 className="text-3xl font-normal">Donation :</h1>

      <form className="mt-3 bg-mobile_color lg:bg-active_bg p-4 rounded-lg text-white">
        <div>
          <label className="block text-lg font-semibold tracking-wide pb-1">Donor Name :</label>
          <div className=" flex gap-5 items-center">
            <input
              type="text"
              placeholder="Richard"
              className="bg-active_bg rounded-lg p-2 text-lg w-full lg::w-[70%]"
            />
            <Link
              href="#"
              onClick={handleDonateClick}
              className="bg-active_bg border-border rounded-lg text-lg lg:flex hidden px-10 py-2 w-[25%] justify-center"
            >
              Donate
            </Link>
            {showPopup && <DonationPopup onClose={closePopup} />}
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-lg font-semibold tracking-wide pb-1">Amount :</label>
          <input
            type="text"
            placeholder="100 USD"
            className="bg-active_bg rounded-lg p-2 text-lg w-full lg:w-[76%]"
          />
        </div>

        <h1 className="text-lg my-3">Pay Through :</h1>
        <div className="w-full lg:w-[50%] m-auto">
          <div className="flex gap-8 md:gap-12 items-center">
            <div className="flex items-center gap-2 md:gap-4 mt-3">
              <input
                type="radio"
                name="radio"
                className="w-4 md:w-6 h-4 md:h-6"
              />
              <img
                src="/images/credit-card.png"
                alt="credit card"
                className="w-8 md:w-10"
              />
              <span>Debit Card</span>
            </div>

            <div className="flex items-center gap-2 md:gap-4 mt-3 ">
              <input
                type="radio"
                name="radio"
                className="w-4 md:w-6 h-4 md:h-6"
              />
              <img
                src="/images/visa.png"
                alt="visa card"
                className="w-8 md:w-10"
              />
              <span>Visa Card</span>
            </div>
          </div>

          <div className="flex gap-6 md:gap-10 items-center">
            <div className="flex items-center gap-2 md:gap-4 mt-3">
              <input
                type="radio"
                name="radio"
                className="w-4 md:w-6 h-4 md:h-6"
              />
              <img
                src="/images/card.png"
                alt="Master card"
                className="w-8 md:w-10"
              />
              <span>Master Card</span>
            </div>

            <div className="flex items-center gap-2 md:gap-4 mt-3">
              <input
                type="radio"
                name="radio"
                className="w-4 md:w-6 h-4 md:h-6"
              />
              <img
                src="/images/paypal.png"
                alt="credit card"
                className="w-8 md:w-10"
              />
              <span>Paypal Card</span>
            </div>
          </div>
        </div>
      </form>

      <div className="md:hidden justify-center items-center mt-10 gap-5 flex">
        <button className="border border-border rounded-lg px-10 py-2">Cancel</button>
        <button onClick={handleDonateClick} className="bg-active_bg rounded-lg px-10 py-2">Next</button>
      </div>
    </div>
  );
};

export default Donate;
