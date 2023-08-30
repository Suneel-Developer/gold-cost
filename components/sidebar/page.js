"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// react icons
import { BiSolidChevronsLeft } from "react-icons/bi";
import { RiHomeFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlineUser, HiChartPie } from "react-icons/hi";
import { FaUsers, FaUsersCog } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

const MyComponent = ({ isOpen, hideSidebar }) => {
  const pathname = usePathname();
  return (
    <div
      className={`sidebar ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex flex-col items-center h-full ">
        <div className="flex items-center justify-between w-full mb-10 ">
          <h1 className="text-logocolor text-2xl md:text-3xl font-black font-kavoon">
            Gold Coast
          </h1>
          <button
            className="cursor-pointer text-lg lg:hidden"
            onClick={hideSidebar}
          >
            <BiSolidChevronsLeft />
          </button>
        </div>
        <ul className="flex flex-col space-y-2 w-full">
          {/* Home  */}
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center rounded duration-300 gap-6 ease-in-out mb-5 ${
                pathname.includes("dashboard") && "gap-0 -ml-3"
              }`}
            >
              <span
                className={`text-dark_text ${
                  pathname.includes("dashboard") &&
                  " text-white bg-mobile_color flex justify-center w-[60px] px-3 h-[55px] items-center  rounded-full z-10"
                }`}
              >
                <RiHomeFill className="text-2xl" />
              </span>
              <span
                className={`text-lg text-dark_text w-full font-medium tracking-wide ${
                  pathname.includes("dashboard") &&
                  "bg-active_bg p-2 text-white -ml-8 pl-5 "
                }`}
              >
                Home
              </span>
            </Link>
          </li>

          {/* Notification  */}

          <li>
            <Link
              href="/notification"
              className={`flex items-center rounded duration-300 gap-6 ease-in-out mb-5 ${
                pathname.includes("/notification") && "gap-0 -ml-3"
              }`}
            >
              <span
                className={`text-dark_text ${
                  pathname.includes("/notification") &&
                  " text-white bg-mobile_color flex justify-center w-[60px] px-3 h-[55px] items-center  rounded-full z-10"
                }`}
              >
                <MdOutlineNotificationsActive className="text-2xl" />
              </span>
              <span
                className={`text-lg text-dark_text w-full font-medium tracking-wide ${
                  pathname.includes("/notification") &&
                  "bg-active_bg p-2 text-white -ml-8 pl-5 "
                }`}
              >
                Notification
              </span>
            </Link>
          </li>

          {/* Profile  */}

          <li>
            <Link
              href="/profile"
              className={`flex items-center rounded duration-300 gap-6 ease-in-out mb-5 ${
                pathname.includes("/profile") && "gap-0 -ml-3"
              }`}
            >
              <span
                className={`text-dark_text ${
                  pathname.includes("/profile") &&
                  " text-white bg-mobile_color flex justify-center w-[60px] px-3 h-[55px] items-center  rounded-full z-10"
                }`}
              >
                <HiOutlineUser className="text-2xl" />
              </span>
              <span
                className={`text-lg text-dark_text w-full font-medium tracking-wide ${
                  pathname.includes("/profile") &&
                  "bg-active_bg p-2 text-white -ml-8 pl-5 "
                }`}
              >
                Profile
              </span>
            </Link>
          </li>

          {/* Members  */}

          <li>
            <Link
              href="/members"
              className={`flex items-center rounded duration-300 gap-6 ease-in-out mb-5 ${
                pathname.includes("/members") && "gap-0 -ml-3"
              }`}
            >
              <span
                className={`text-dark_text ${
                  pathname.includes("/members") &&
                  " text-white bg-mobile_color flex justify-center w-[60px] px-3 h-[55px] items-center  rounded-full z-10"
                }`}
              >
                <FaUsers className="text-2xl" />
              </span>
              <span
                className={`text-lg text-dark_text w-full font-medium tracking-wide ${
                  pathname.includes("/members") &&
                  "bg-active_bg p-2 text-white -ml-8 pl-5 "
                }`}
              >
                Members
              </span>
            </Link>
          </li>

          {/* View Contributions  */}

          <li>
            <Link
              href="/contributions"
              className={`flex items-center rounded duration-300 gap-6 ease-in-out mb-5 ${
                pathname.includes("/contributions") && "gap-0 -ml-3"
              }`}
            >
              <span
                className={`text-dark_text ${
                  pathname.includes("/contributions") &&
                  " text-white bg-mobile_color flex justify-center w-[60px] px-3 h-[55px] items-center  rounded-full z-10"
                }`}
              >
                <HiChartPie className="text-2xl" />
              </span>
              <span
                className={`text-lg text-dark_text w-full font-medium tracking-wide ${
                  pathname.includes("/contributions") &&
                  "bg-active_bg p-2 text-white -ml-8 pl-5 "
                }`}
              >
                View Contributions
              </span>
            </Link>
          </li>


          {/* Community  */}

          <li>
            <Link
              href="/community"
              className={`flex items-center rounded duration-300 gap-6 ease-in-out mb-5 ${
                pathname.includes("/community") && "gap-0 -ml-3"
              }`}
            >
              <span
                className={`text-dark_text ${
                  pathname.includes("/community") &&
                  " text-white bg-mobile_color flex justify-center w-[60px] px-3 h-[55px] items-center  rounded-full z-10"
                }`}
              >
                <FaUsersCog className="text-2xl" />
              </span>
              <span
                className={`text-lg text-dark_text w-full font-medium tracking-wide ${
                  pathname.includes("/community") &&
                  "bg-active_bg p-2 text-white -ml-8 pl-5 "
                }`}
              >
                Community
              </span>
            </Link>
          </li>

        </ul>

        <div className="mt-auto w-full pb-5">
          <ul>
            {/* Settings  */}

            <li>
            <Link
              href="/settings"
              className={`flex items-center rounded duration-300 gap-6 ease-in-out mb-5 ${
                pathname.includes("/settings") && "gap-0 -ml-3"
              }`}
            >
              <span
                className={`text-dark_text ${
                  pathname.includes("/settings") &&
                  " text-white bg-mobile_color flex justify-center w-[60px] px-3 h-[55px] items-center  rounded-full z-10"
                }`}
              >
                <AiOutlineSetting className="text-2xl" />
              </span>
              <span
                className={`text-lg text-dark_text w-full font-medium tracking-wide ${
                  pathname.includes("/settings") &&
                  "bg-active_bg p-2 text-white -ml-8 pl-5 "
                }`}
              >
                Settings
              </span>
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
