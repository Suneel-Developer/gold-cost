"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

// react icons
import { BiSolidChevronsLeft } from "react-icons/bi";
import { RiHomeFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { HiOutlineUser, HiChartPie } from "react-icons/hi";
import { FaUsers,FaUsersCog  } from "react-icons/fa";
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
          <h1 className="text-logocolor text-xl md:text-3xl font-black font-kavoon">
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
              className={`flex items-center gap-6 rounded duration-300 ease-in-out mb-5 ${
                pathname.includes("dashboard") && "bg-active_bg p-2 text-white"
              }`}
            >
              <RiHomeFill className="w-7 h-7" />
              <span className="text-lg pt-1 text-dark_text font-medium tracking-wide">
                Home
              </span>
            </Link>
          </li>

          {/* Notification  */}
          <li>
            <Link
              href="/notification"
              className={`flex items-center gap-6 rounded duration-300 ease-in-out mb-5 ${
                pathname.includes("notification") && "bg-active_bg p-2 text-white"
              }`}
            >
              <MdOutlineNotificationsActive className="w-7 h-7" />
              <span className="text-lg pt-1 text-dark_text font-medium tracking-wide	">
                Notification
              </span>
            </Link>
          </li>

          {/* Profile  */}
          <li>
            <Link
              href="/profile"
              className={`flex items-center gap-6 rounded duration-300 ease-in-out mb-5 ${
                pathname.includes("profile") && "bg-active_bg p-2 text-white"
              }`}
            >
              <HiOutlineUser className="w-7 h-7" />
              <span className="text-lg pt-1 text-dark_text font-medium tracking-wide	">
                Profile
              </span>
            </Link>
          </li>

          {/* Members  */}
          <li>
            <Link
              href="/members"
              className={`flex items-center gap-6 rounded duration-300 ease-in-out mb-5 ${
                pathname.includes("members") && "bg-active_bg p-2 text-white"
              }`}
            >
              <FaUsers className="w-7 h-7" />
              <span className="text-lg pt-1 text-dark_text font-medium tracking-wide	">
                Members
              </span>
            </Link>
          </li>

          {/* View Contributions  */}
          <li>
            <Link
              href="/contributions"
              className={`flex items-center gap-6 rounded duration-300 ease-in-out mb-5 ${
                pathname.includes("contributions") && "bg-active_bg p-2 text-white"
              }`}
            >
              <HiChartPie className="w-7 h-7" />
              <span className="text-lg pt-1 text-dark_text font-medium tracking-wide	">
                View Contributions
              </span>
            </Link>
          </li>

          {/* Community  */}
          <li>
            <Link
              href="/community"
              className={`flex items-center gap-6 rounded duration-300 ease-in-out mb-5 ${
                pathname.includes("community") && "bg-active_bg p-2 text-white"
              }`}
            >
              <FaUsersCog className="w-7 h-7" />
              <span className="text-lg pt-1 text-dark_text font-medium tracking-wide	">
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
                className={`flex items-center gap-6 rounded duration-300 ease-in-out mb-5 ${
                  pathname.includes("settings") && "bg-active_bg p-2 text-white"
                }`}
              >
                <AiOutlineSetting className="w-8 h-8" />
                <span className="text-xl pt-1 text-dark_text font-medium tracking-wide	">
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
