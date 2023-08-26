import { FaBars } from "react-icons/fa";

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="flex gap-4  items-center border-b border-border z-10 bg-bg p-8 text-white">
      <div
        className="mobile-toggle lg:hidden text-white cursor-pointer text-2xl"
        onClick={toggleSidebar}
      >
        <FaBars />
      </div>
      <h1 className="block md:hidden text-xl font-bold">Gold Coast</h1>
    </div>
  );
};

export default Topbar;
