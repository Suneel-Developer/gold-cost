import { AiOutlinePlus } from "react-icons/ai";

const ProfileBar = ({ isOpen }) => {
  return (
    <div
      className={`profilebar  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } lg:translate-x-0`}
    >
      <h2 className="py-[18px]  w-full text-center text-xl tracking-wide border-b border-border">
        Profile
      </h2>
      <div className="my-10 relative">
        <img
          src="/images/user.webp"
          alt="profile image"
          className="w-[196px] h-[196px]"
        />
        <div className=" absolute bottom-2 right-0 bg-white w-12 h-12 cursor-pointer rounded-full p-2">
          <img src="/images/profileEdit.webp" alt="Profile edit" />
        </div>
      </div>

      <ul className="w-full px-6">
        <li className="w-full bg-light_bg rounded text-white px-4 py-3 mb-3 font-light text-lg">
          User Name
        </li>
        <li className="w-full flex justify-between bg-light_bg text-white font-light	 rounded px-4 py-3 mb-3  text-lg">
          Last Donation : <span>100 $</span>
        </li>
        <li className="w-full flex justify-between bg-light_bg text-white rounded px-4 py-3 mb-3 font-light text-lg">
          Total Donation : <span>1000 $</span>
        </li>

        <li className="w-full flex flex-col items-center mt-16 bg-light_bg text-white rounded px-4 py-3 mb-3 font-normal text-lg">
          <button className="w-12 h-12 bg-bg flex justify-center items-center text-lg rounded-full">
            <AiOutlinePlus />
          </button>
          <h2 className="mt-2 font-light tracking-wider	text-lg text-center ">
            Create Community
          </h2>
        </li>
      </ul>

      <div></div>
    </div>
  );
};

export default ProfileBar;
