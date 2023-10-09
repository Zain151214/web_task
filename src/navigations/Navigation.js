import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [width, setWidth] = useState(null);

  const hasWindow = typeof window !== "undefined";

  const getWindowsDimenshions = () => {
    setWidth(hasWindow ? window.innerWidth : null);
  };

  useEffect(() => {
    if (hasWindow) {
      getWindowsDimenshions();
      window.addEventListener("resize", getWindowsDimenshions);
    }
  });

  const isMobile = width < 640;
  return <>{isMobile ? <MobileNav /> : <Navbar />}</>;
};

export default Navigation;
