import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";

const MobileNavigation = () => {
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (index) => {
    setClickedIcon(index);
  };

  return (
    <div className="bg-mobile_color z-10 p-4 block sm:hidden fixed bottom-0 left-0 w-full">
     <h1>Navigation</h1>
    </div>
  );
};

export default MobileNavigation;
