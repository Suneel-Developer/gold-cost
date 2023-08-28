import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";

const MobileNavigation = () => {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (index) => {
    setClickedIcon(index);
  };

  return (
    <div className="bg-mobile_color z-10 p-4 block sm:hidden fixed bottom-0 left-0 w-full">
      <div className="flex gap-10 justify-around items-center p-2 bg-[#211E41] w-full">
        {[0, 1, 2, 3].map((index) => (
          <a
            href="#"
            key={index}
            className={`text-[26px] rounded-[50%] bg-[#211E41] p-2 text-white icon ${
              clickedIcon === index ? "icon-clicked -mt-10 bg-white border-2 border-border" : ""
            }`}
            onClick={() => handleIconClick(index)}
          >
            <AiFillHome />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
