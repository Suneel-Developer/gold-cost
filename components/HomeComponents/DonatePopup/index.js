"use client"
import { useState } from 'react';

const DonationPopup = ({ onClose }) => {
  const [donationSuccess, setDonationSuccess] = useState(false);

  const handleNext = () => {
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-[#0000008f] top-0 left-0 right-0 bottom-0 h-screen bg-opacity-50">
      <div className="md:bg-mobile_color bg-white flex justify-center items-center flex-col md:text-white text-dark_bg p-8 py-24 border border-white rounded-3xl w-[90%] md:w-[30%]">
            <h1 className='text-2xl md:text-4xl mb-2 text-black md:text-white font-bold'>"Congratulations!"</h1>
            <p className='text-lg md:text-2xl font-bold text-center'> You have donated $1 successfully.</p>
            <div className="mt-5 flex md:hidden justify-end">
              
              <button
                onClick={handleCancel}
                className="ml-2 bg-active_bg text-bg px-4 py-2 rounded-lg mr-3"
              >
                Cancel
              </button>
              <a href='/dashboard'
                onClick={handleNext}
                className="bg-mobile_color text-white px-10 py-2 rounded-lg"
              >
                Home
              </a>
            </div>
      </div>
    </div>
  );
};

export default DonationPopup;
