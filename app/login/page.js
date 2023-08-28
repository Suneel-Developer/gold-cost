"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full h-screen md:bg-[url('/images/mainBg.webp')] bg-no-repeat	bg-cover bg-mobile_color flex justify-center items-center">
      <div className=" absolute right-0 top-0 opacity-40 ">
        <img src="/images/bg.webp" alt="Bg" className="w-full h-screen" />
      </div>
      {/* form container  */}
      <div className="z-10 md:border md:border-white rounded-[48px] md:bg-dark_bg w-[95%] lg:w-2/5	px-3 md:px-16 py-10 ">
        <div className="block md:flex justify-between items-center mb-5">
          <h1 className="font-kavoon text-logocolor text-4xl md:mb-0 mb-3 font-bold">
            Gold Coast
          </h1>
          <h2 className="font-kavoon text-white text-3xl font-bold">Sign In</h2>
        </div>

        {/* login form  */}
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
              placeholder="Entre your Email here..."
              className="w-full p-3 px-5 bg-input_bg text-white text-lg font-kelly-slab rounded-3xl border-2 border-white mb-3"
            />
          </div>

          {/* password input  */}
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

          {/* remember input  */}
          <div className="flex gap-2 my-2 items-center">
            <input type="checkbox" className="w-4 h-4" />
            <label
              htmlFor="remember me"
              className="text-white font-kelly-slab "
            >
              Remember me
            </label>
          </div>

          {/* sign in button  */}
          <div className="flex justify-center flex-col items-center gap-2 mt-6">
            {/* now you can click on signin then navigate to dashboard when you make a login function then remove link */}
            <Link href="/dashboard" className="w-9/12 flex justify-center">
              <button className="w-9/12	 p-3 bg-input_bg text-white text-xl font-bold font-kelly-slab rounded-3xl border-2 border-white">
                Sign In
              </button>
            </Link>
            <Link
              href="/forgotpassword"
              className="text-white font-kavoon text-lg text-center"
            >
              Forgot Password ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
