import React from "react";

const CustomDonation = () => {
  return (
    <div className="w-full bg-active_bg p-4 text-white rounded-md flex flex-col mt-5 ">
      <h1>Custom Donation :</h1>
      <div>
        <div>
          <label htmlFor="groupname">Group name</label>
          <input type="text" placeholder="Enter Group name" />
        </div>
        <div>
          <label htmlFor="groupname">Amount Limit :</label>
          <input type="text" placeholder="Enter Group name" />
        </div>
      </div>
      <p>If you make a “Custom Donation” you will move to a new custom group</p>
      <div>
        <button>Cancel</button>
        <a href="/donation">Move</a>
      </div>
    </div>
  );
};

export default CustomDonation;
