"use client";
import React from "react";
import Signup from "./signup/page";
import LetsStartPage from "../components/LetsStartPage/page";

const Home =() => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    handleResize(); // Call once to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
    {/* Conditional rendering based on screen size */}
    {isMobile ? <LetsStartPage /> : <Signup />}
  </div>
  );
}

export default Home;
