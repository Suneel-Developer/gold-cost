"use client"
import React, {useState} from "react";
import Link from "next/link";
import DonationPopup from "@/components/HomeComponents/DonatePopup";

const Donate = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDonateClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="w-full">
      <div className="w-[95%] m-auto top-16 p-3 absolute z-10 flex md:hidden text-white flex-col rounded-3xl border-white border  bg-mobile_color">
        <div className="w-full flex justify-between items-center gap-1">
          <h1 className="text-sm font-medium">
            Current Group : <span>1</span>
          </h1>
          <h1 className="text-sm font-medium">
            Next Payout : 1 $ <span className="text-xs">(weekly)</span>
          </h1>
        </div>
        <h1 className="text-sm font-medium py-3">Limit : 1 $</h1>
        <p className="text-[10px]  text-center">
          If you donate 0 to 1$ you will be member of this group.
        </p>
      </div>
    <div className="bg-none lg:bg-active_bg p-0 md:p-4 rounded-lg mt-12 md:mt-2 text-mobile_color lg:text-white relative ">
      <h1 className="text-3xl font-normal">Donation :</h1>

      <form className="mt-3 bg-none lg:bg-active_bg p-0 md:p-4 rounded-lg">
        <div>
          <label className="block text-lg font-semibold tracking-wide pb-1">Donor Name :</label>
          <div className=" flex gap-5 items-center">
            <input
              type="text"
              placeholder="Richard"
              className="bg-none lg:bg-active_bg rounded-lg p-2 text-lg w-full lg::w-[70%] border border-border lg:border-0"
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
            className="bg-none lg:bg-active_bg rounded-lg p-2 text-lg w-full lg:w-[76%] border border-border lg:border-0"
          />
        </div>

        <h1 className="text-lg my-3 font-bold">Pay Through :</h1>
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
        <button className="border border-border font-bold bg-active_bg rounded-3xl px-10 py-2">Cancel</button>
        <button onClick={handleDonateClick} className="bg-mobile_color text-white rounded-3xl font-bold px-10 py-2">Next</button>
      </div>
    </div>

    </div>
  );
};

export default Donate;
