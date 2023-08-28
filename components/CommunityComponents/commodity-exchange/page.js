import React from "react";

const CommodityExchangePage = () => {
  return (
    <div className="w-full bg-none lg:bg-active_bg p-0 lg:p-4 relative text-mobile_color lg:text-white rounded-md flex flex-col">
      <h1 className="text-2xl hidden lg:flex	font-normal	mb-2">Commodity Exchange :</h1>

      <form>
        <div className="block md:flex w-full gap-3">
          <div className="w-full md:1/2 gap-1 mb-3">
            <label htmlFor="EscrowType" className="block text-lg font-medium">
              Escrow Type*
            </label>
            <select className="w-full border border-border bg-none lg:bg-active_bg rounded-lg p-3 outline-none">
              <option value="select">Select</option>
              <option value="select">Type 01</option>
              <option value="select">Type 01</option>
            </select>
          </div>
          <div className="w-full md:1/2 gap-1 mb-3">
            <label htmlFor="EscrowType" className="block text-lg font-medium">
              Escrow Type*
            </label>
            <select className="w-full border border-border bg-none lg:bg-active_bg rounded-lg p-3 outline-none">
              <option value="select">Select</option>
              <option value="select">Type 01</option>
              <option value="select">Type 01</option>
            </select>
          </div>
        </div>

        <div className="block md:flex w-full gap-3">
          <div className="w-full md:1/2 gap-1 mb-3">
            <label htmlFor="EscrowType" className="block text-lg font-medium">
              Timeout Date and Time :
            </label>
            <select className="w-full border border-border bg-none lg:bg-active_bg rounded-lg p-3 outline-none">
              <option value="select">Select</option>
              <option value="select">Type 01</option>
              <option value="select">Type 01</option>
            </select>
          </div>
          <div className="w-full md:1/2 gap-1 mb-3">
            <label htmlFor="EscrowType" className="block text-lg font-medium">
              Amount :
            </label>
            <select className="w-full border border-border bg-none lg:bg-active_bg rounded-lg p-3 outline-none">
              <option value="select">Select</option>
              <option value="select">Type 01</option>
              <option value="select">Type 01</option>
            </select>
          </div>
        </div>

        <div className="w-full gap-1 mb-3">
          <label htmlFor="EscrowType" className="block text-lg font-medium">
            Receiver Address*
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            className="w-full border border-border bg-none lg:bg-active_bg rounded-lg p-3 outline-none"
          />
        </div>

        <div className="w-full gap-1 mb-3">
          <label htmlFor="EscrowType" className="block text-lg font-medium">
            Contract Description
            <span className="text-light text-sm">( Optional ) :</span>
          </label>
          <textarea
            rows={3}
            type="text"
            placeholder="Enter Description"
            className="w-full border border-border bg-none lg:bg-active_bg rounded-lg p-3 outline-none resize-none"
          />
        </div>

        <div className="flex gap-2 items-center">
          <input type="checkbox" className="w-6 h-6 rounded-xl" />
          <label className="text-lg font-medium">Ship through Escrow</label>
        </div>

        <button className="flex justify-center items-center m-auto border border-border bg-active_bg py-2 px-10 text-lg font-medium rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default CommodityExchangePage;
