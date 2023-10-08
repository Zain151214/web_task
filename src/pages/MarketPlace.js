import React from "react";
import Navigation from "../navigations/Navigation";
import {
  AccordianSection,
  AwardSection,
  Footer,
  HeroSection,
  Testimonial,
} from "../components";

const MarketPlace = () => {
  return (
    <>
      <div className="bg-black">
        <div>
          {/* Navbar */}
          <Navigation />
        </div>

        <div className="pt-16 sm:pt-28 xl:pt-28">
          {/* Hero Section */}
          <HeroSection />
        </div>

        <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-24 py-14 flex flex-col gap-10">
          {/* Accordian Section */}
          <AccordianSection />

          {/* Award Winning Section */}
          <AwardSection />
        </div>

        <div>
          <Testimonial />
        </div>

        <div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
