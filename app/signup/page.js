"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  // states intail
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);

  // show passowrd
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // show re-inter password
  const toggleReEnterPasswordVisibility = () => {
    setShowReEnterPassword(!showReEnterPassword);
  };
  return (
    <div className="w-full h-screen md:bg-[url('/images/mainBg.webp')] bg-no-repeat bg-mobile_color	bg-cover flex justify-center items-center">
      <div className=" absolute right-0 top-0 opacity-40 ">
        <img src="/images/bg.webp" alt="Bg" className="w-full h-screen" />
      </div>
      <div className="z-10 md:border md:border-white rounded-[48px] md:bg-dark_bg w-[95%] lg:w-2/5	px-3 md:px-16 py-10 ">
        <div className="block md:flex justify-between items-center mb-5">
          <h1 className="font-kavoon text-logocolor text-4xl md:mb-0 mb-3 font-bold">
            Gold Coast
          </h1>
          <h2 className="font-kavoon text-white text-3xl font-bold">Signup</h2>
        </div>

        {/* signup form  */}
        <form action="#" method="post" className="flex flex-col border-2 border-white md:border-transparent md:rounded-none rounded-[48px] md:bg-transparent px-4 md:px-0 md:py-0 py-10  bg-dark_bg ">
          {/* email input  */}

          <div>
            <label
              htmlFor="email"
              className="text-white text-lg block mb-2 font-kelly-slab"
            >
              E- Mail :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Entre your Email here..."
              className="w-full p-3 px-5 bg-input_bg text-white text-lg font-kelly-slab rounded-3xl border-2 border-white mb-3"
            />
          </div>

          {/*  password input  */}

          <div>
            <label
              htmlFor="password"
              className="text-white text-lg block mb-2 font-kelly-slab"
            >
              Password :
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 px-5 bg-input_bg text-white text-lg font-kelly-slab rounded-3xl border-2 border-white mb-3"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-7 transform text-white text-lg -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>
          </div>

          {/* re-inter password input  */}
          <div>
            <label
              htmlFor="reEnterPassword"
              className="text-white text-lg block mb-2 font-kelly-slab"
            >
              Re-Enter Password :
            </label>
            <div className="relative">
              <input
                type={showReEnterPassword ? "text" : "password"}
                name="reEnterPassword"
                id="reEnterPassword"
                placeholder="Re-Enter your password"
                className="w-full p-3 px-5 bg-input_bg text-white text-lg font-kelly-slab rounded-3xl border-2 border-white mb-3"
              />
              <span
                onClick={toggleReEnterPasswordVisibility}
                className="absolute right-4 top-7 transform text-white text-lg -translate-y-1/2 cursor-pointer"
              >
                {showReEnterPassword ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>
          </div>

          <div className="flex gap-2 my-2 items-center">
            <input type="checkbox" className="w-4 h-4" />
            <label
              htmlFor="remember me"
              className="text-white font-kelly-slab "
            >
              Remember me
            </label>
          </div>

          {/* signup button  */}
          <div className="flex justify-center flex-col items-center gap-4 mt-6">
            <div className="flex justify-center gap-6 items-center">
              <p className="text-white font-kelly-slab text-sm md:text-lg">
                Already have an account?
              </p>
              <Link
                href="/login"
                className="text-white font-kavoon text-lg md:text-2xl font-bold"
              >
                Sign In
              </Link>
            </div>

            {/* now you can click on signup then navigate to dashboard when you make a login function then remove link */}
            <Link href="/login" className="w-9/12 flex justify-center">
              <button className="w-9/12	 p-3 bg-input_bg text-white text-xl font-bold font-kelly-slab rounded-3xl border-2 border-white mb-3">
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
