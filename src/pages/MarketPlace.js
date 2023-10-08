import React from "react";
import Navigation from "../navigations/Navigation";
import { Footer, HeroSection } from "../components";

const MarketPlace = () => {
  return (
    <>
      <div className="bg-black">
        <div>
          {/* Navbar */}
          <Navigation />
        </div>

        <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-24 pt-16 sm:pt-28 xl:pt-28"></div>
        {/* Hero Section */}
        <HeroSection />

        <div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
