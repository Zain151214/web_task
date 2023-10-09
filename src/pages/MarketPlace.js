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
        {/* Navbar */}
        <Navigation />

        <div className="pt-16 sm:pt-28 xl:pt-28">
          <HeroSection />
        </div>

        <div className="px-3 sm:px-10 md:px-12 lg:px-20 xl:px-24 py-14 flex flex-col gap-10">
          <AccordianSection />

          <AwardSection />
        </div>

        <Testimonial />

        <Footer />
      </div>
    </>
  );
};

export default MarketPlace;
