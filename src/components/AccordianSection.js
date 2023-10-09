import React from "react";
import Button from "./Button";
import Accordian from "./Accordian";
import { Graphics } from "../assets";
import { ACCORDIAN_DATA } from "../utils/mock";

const AccordianSection = () => {
  return (
    <>
      <div className="my-10">
        <div className="flex justify-center items-center">
          <div className="w-full flex flex-col items-center gap-5">
            <img src={Graphics.Crown} alt="Crown" className="w-20" />

            <h1 className="font_bebas text-center text-white text-3xl sm:text-[3.3rem] sm:leading-[3rem] md:text-[4.3rem] md:leading-[4rem] lg:text-[5.3rem] lg:leading-[5rem] xl:text-[6.3rem] xl:leading-[6rem] uppercase">
              THE Most recent Patterns, Conveyed Directly TO YOUR INBOX
            </h1>
          </div>
        </div>

        <div className="flex justify-center sm:justify-between items-center flex-wrap">
          <div className="w-full md:w-2/4">
            <img src={Graphics.Accordian_Image} alt="img" />
          </div>
          <div className="w-full md:w-2/4">
            <Accordian items={ACCORDIAN_DATA} />
            <div className="flex w-full">
              <div>
                <Button title={"Play Now"} />
              </div>
              <div>
                <Button title={"Watch Trailer"} watchBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordianSection;
