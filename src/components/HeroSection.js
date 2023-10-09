import React from "react";
import PlayCards from "./PlayCards";
import { Graphics } from "../assets";
import TrapezoidBtn from "./TrapezoidBtn";

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
            <h1 className="font_bebas text-center text-white text-3xl sm:text-[3.3rem] sm:leading-[3rem] md:text-[4.3rem] md:leading-[4rem] lg:text-[5.3rem] lg:leading-[5rem] xl:text-[6.3rem] xl:leading-[6rem] uppercase">
              Next Generation Get Your Desierd Rank Now
            </h1>
          </div>
        </div>

        {/* Video */}
        <div className="flex flex-col justify-center items-center relative">
          <div className=" absolute top-10 md:top-16 lg:top-24">
            <img src={Graphics.Black_Logo_Strip} alt="Logos" />
          </div>
          <div>
            <img src={Graphics.White_Logo_Strip} alt="Logos" />
          </div>
          <div className="xl:w-[30rem] h-40 md:h-80 absolute z-10 flex flex-col items-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vKBGMgcXVZE?si=0_UW15X7fWm59gRP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <TrapezoidBtn title={"Register Now"} />
          </div>
        </div>

        {/* Logos */}
        <div className="flex justify-center items-center gap-2 sm:gap-8 mt-5">
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
