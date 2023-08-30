import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const LetsStartPage = () => {
  return (
    <div className="bg-mobile_color h-screen bg-[url('/images/bg.webp')] bg-no-repeat bg-cover flex-col p-3 flex ">
      <div className="w-full h-[500px]  bg-no-repeat bg-cover relative">
        <img src="/images/startimage.png" alt="" className="w-full h-full " />
        <h1 className="text-center -mt-20 text-logocolor font-kavoon text-4xl font-bold">Gold Coast</h1>
      </div>
      <Link
        href="/signup"
        className="border bg-mobile_color flex items-center gap-3 border-border rounded-xl text-white px-2 m-auto "
      >
        <img src="/images/arrow.png" alt="arrow" className="w-14 h-14 rounded-full" />
        <h2 className="font-kavoon text-white text-xl font-bold">Go to Signup</h2>
      </Link>
    </div>
  );
};

export default LetsStartPage;
