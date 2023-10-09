import React from "react";
import Button from "./Button";
import Heading from "./Heading";
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

            <Heading
              heading={
                "THE Most recent Patterns, Conveyed Directly TO YOUR INBOX"
              }
            />
          </div>
        </div>

        <div className="flex justify-center sm:justify-between items-center flex-wrap">
          <div className="w-full md:w-2/4">
            <img src={Graphics.Accordian_Image} alt="img" />
          </div>
          <div className="w-full md:w-2/4">
            <Accordian items={ACCORDIAN_DATA} />
            <div className="flex w-full">
              <Button title={"Play Now"} />
              <Button title={"Watch Trailer"} watchBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordianSection;
