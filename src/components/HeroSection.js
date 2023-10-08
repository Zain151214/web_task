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
          <div className="w-2/3">
            <img
              src={Graphics.Flower}
              alt="flower"
              className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24"
            />
            <h1 className="text-center text-white text-xl sm:text-[2rem] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem] xl:text-[5rem] xl:leading-[5rem] ">
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
              src="https://www.youtube.com/embed/uV13Myyoee0?si=EDF2uzWNalwxEAsM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
