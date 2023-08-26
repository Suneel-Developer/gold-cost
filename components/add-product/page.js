import React from "react";

const AddProduct = () => {
  return (
    <div className="w-full bg-active_bg p-4 relative text-white rounded-md flex flex-col ">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-medium mb-3">Food Community :</h1>
        <p className="text-base font-medium">
          Members have product or services for sell or exchange
        </p>
      </div>
      <form method="post" className="flex flex-col gap-2">
        <label
          htmlFor="productname"
          className="block text-lg font-medium tracking-wider"
        >
          Product Title :
        </label>
        <input
          type="text"
          placeholder="Enter Product  Title"
          className="w-full p-3 rounded-lg bg-active_bg text-base placeholder-white"
        />
        <label
          htmlFor="productname"
          className="block text-lg font-medium tracking-wider mt-4"
        >
          Product Description :
        </label>
        <textarea
          cols="30"
          rows="7"
          placeholder="Write Product Description"
          className="w-full p-3 rounded-lg bg-active_bg text-base resize-none outline-none placeholder-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
