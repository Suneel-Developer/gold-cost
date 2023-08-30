import React from "react";

const LeastGroup = ({ onHandle }) => {
  const handleChange = () => {
    onHandle();
  };
  return (
    <div>
      <div className="w-[92%] m-auto top-24 p-3 absolute z-10 flex md:hidden items-center text-white justify-between rounded-3xl border-white border  bg-mobile_color">
        <h1 className="text-sm font-medium">
          Current Group : <span>1</span>
        </h1>
        <h1 className="text-sm font-medium">
          Total Donations : <span>2500 $</span>
        </h1>
      </div>
      <div className="w-full bg-mobile_color lg:bg-active_bg p-0 md:p-4 text-white rounded-lg  mt-7 md:mt-2">
        <h1 className="text-2xl font-normal mb-2 md:flex hidden">
          Create Group
        </h1>
        <div className="w-full md:w-[80%] m-auto p-2 ">
          <div className="bg-none md:bg-active_bg p-2 md:p-4 rounded-lg gap-3">
            <div className="flex justify-between items-center">
              <h2 className="text-sm md:text-base font-normal">
                Total Donation : <span>0 $</span>
              </h2>
              <h2 className="text-sm md:text-base font-normal">
                Required Donation : <span>1 $</span>
              </h2>
            </div>
            <div className="md:flex block justify-between items-center mt-2 gap-3">
              <h2 className="flex justify-between md:justify-start text-sm md:text-base mb-2 font-normal">
                Current Group : <span>Least</span>
              </h2>
              <h2 className="flex justify-between md:justify-start text-sm md:text-base font-normal">
                Next Group : <span>Abcdef</span>
              </h2>
            </div>
          </div>

          <div className="bg-none md:bg-active_bg p-2 md:p-4 rounded-lg gap-3 mt-2">
            <h1 className="flex items-end gap-5 text-xl font-medium">
              Preference :
              <p className="text-xs font-medium md:flex hidden ">
                Check Select the Bubble to confirm your preference
              </p>
            </h1>

            <div className="mt-5 flex md:flex-row flex-col gap-2">
              <div className="flex md:items-start items-center gap-3">
                <input
                  type="radio"
                  name="option"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <div className="w-full md:w-[50%] flex flex-col md:justify-center md:text-center text-left">
                  <h2 className="text-lg md:text-xl font-medium">Weekly</h2>
                  <p className="text-sm">
                    You can make Donation once in a week
                  </p>
                </div>
              </div>
              <div className="flex md:items-start items-center gap-3">
                <input
                  type="radio"
                  name="option"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <div className="w-full md:w-[50%] flex flex-col md:justify-center md:text-center text-left">
                  <h2 className="text-lg md:text-xl font-medium">
                    Bi - Weekly
                  </h2>
                  <p className="text-sm">
                    You can make Donation once in a week
                  </p>
                </div>
              </div>
              <div className="flex md:items-start items-center gap-3">
                <input
                  type="radio"
                  name="option"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <div className="w-full md:w-[50%] flex flex-col md:justify-center md:text-center text-left">
                  <h2 className="text-lg md:text-xl font-normal">Monthly</h2>
                  <p className="text-sm">
                    You can make Donation once in a week
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-5 mt-5">
              <button className="rounded-3xl w-40 py-2 text-xl md:text-lg bg-active_bg border border-white">
                Cancel
              </button>
              <button
                className="rounded-3xl w-40  py-2 text-xl md:text-lg  border border-white"
                onClick={() => handleChange()}
              >
                Move
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeastGroup;
