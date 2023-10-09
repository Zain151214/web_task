import React from "react";
import Video from "./Video";
import Logos from "./Logos";
import Heading from "./Heading";
import PlayCards from "./PlayCards";
import { Graphics } from "../assets";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        {/* Main Heading */}

        <div className="flex justify-center">
          <div className="w-3/4">
            <img
              src={Graphics.Flower}
              alt="flower"
              className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24"
            />

            <Heading heading={"Next Generation Get Your Desierd Rank Now"} />
          </div>
        </div>

        <Video />

        <Logos />

        {/* Play Now Cards */}
        <PlayCards />
      </div>
    </>
  );
};

export default HeroSection;
