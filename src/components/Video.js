import React from "react";
import { Graphics } from "../assets";
import TrapezoidBtn from "./TrapezoidBtn";

const Video = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative">
        <div className=" absolute top-10 md:top-16 lg:top-24">
          <img src={Graphics.Black_Logo_Strip} alt="Logos" />
        </div>

        <div>
          <img src={Graphics.White_Logo_Strip} alt="Logos" />
        </div>

        <div className="sm:w-[25rem] md:w-[28rem] lg:w-[30rem] xl:w-[35rem] h-40 md:h-80 absolute z-10 flex flex-col items-center">
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
    </>
  );
};

export default Video;
