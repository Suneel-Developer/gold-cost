"use client"
import React, { useState } from "react";
import { RiHomeFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import Link from 'next/link'

const MobileNavigation = () => {

  const Menus = [
    { icon: <RiHomeFill />, href: "/dashboard" },
    { icon: <MdOutlineNotificationsActive />, href: "/contributions" },
    { icon: <AiOutlineSetting />, href: "/settings" },
    { icon: <HiOutlineUser />, href: "/profile" },
  ]

  const [active, setActive] = useState(0)


  return (
    <div className=' bg-mobile_color  max-h-[70px] w-full fixed bottom-0 left-0 right-0 z-10 '>
      <ul className=' flex justify-around relative  '>

        {
          Menus.map((menu, i) => (
            <li key={i} className=' p-6 relative'>
              <Link href={menu.href} className=' flex text-center ' onClick={() =>  setActive(i)}>
                <span className={`text-white text-center text-2xl cursor-pointer   ${i === active && '-mt-[3.4rem] text-white bg-mobile_color border-4 flex justify-center items-center h-14 w-14 border-white text-xl rounded-full shadow-[0px 2px 10px 0px rgba(255, 255, 255, 0.25) inset]'}`}>
                  {menu.icon}
                </span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MobileNavigation;
