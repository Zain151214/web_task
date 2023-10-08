import React from "react";
import Accordian from "./Accordian";
import { Graphics } from "../assets";
import { ACCORDIAN_DATA } from "../utils/mock";

const AccordianSection = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div className="w-full flex flex-col items-center gap-5">
            <img src={Graphics.Crown} alt="Crown" className="w-20" />

            <h1 className="text-center text-white text-xl sm:text-[2rem] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem] xl:text-[5rem] xl:leading-[5rem] uppercase">
              THE Most recent Patterns, Conveyed Directly TO YOUR INBOX.
            </h1>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <div className="w-full md:w-2/4">
            <img src={Graphics.Accordian_Image} alt="img" />
          </div>
          <div className="w-full md:w-2/4">
            <Accordian items={ACCORDIAN_DATA} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordianSection;
