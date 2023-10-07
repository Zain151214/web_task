import React from "react";
import TrapezoidBtn from "./TrapezoidBtn";
import { Graphics } from "../assets";
import PlayCards from "./PlayCards";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        {/* Main Heading */}
        <div>
          <img src={Graphics.Flower} alt="flower" />
          <h1 className="text-center text-white text-lg sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
            Next Generation Get Your Desierd Rank Now
          </h1>
        </div>

        {/* Video */}
        <div className="flex flex-col justify-center items-center">
          <iframe
            className="xl:w-2/4 xl:h-96"
            src="https://www.youtube.com/embed/uV13Myyoee0?si=EDF2uzWNalwxEAsM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <TrapezoidBtn title={"Register Now"} />
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-2 sm:gap-8">
          {[1, 2, 3, 4].map((item) => {
            return (
              <>
                <img
                  key={item.index}
                  src={Graphics.Logo_3}
                  alt="Logo"
                  className="w-14 sm:w-28 md:w-36 lg:w-44 xl:w-52"
                />
              </>
            );
          })}
        </div>

        {/* Play Now Cards */}
        <PlayCards />
      </div>
    </>
  );
};

export default HeroSection;
