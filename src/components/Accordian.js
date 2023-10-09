import { Graphics } from "../assets";
import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleIndex = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <>
            <div className="mb-5 font_nunito">
              <div
                key={index}
                onClick={() => {
                  handleIndex(index);
                }}
                className={`${
                  index === activeIndex
                    ? "bg-[#182225] border border-white"
                    : "bg-black"
                } border-b w-full p-4 text-white cursor-pointer font_nunito`}
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={
                      index === activeIndex
                        ? Graphics.Arrow_Down
                        : Graphics.Arrow_Up
                    }
                    alt="Arrow"
                    className="w-5 h-5"
                  />
                  {item.title}
                </div>
              </div>

              {index === activeIndex && (
                <>
                  <div className="px-4 py-2 text-white">
                    <p>{item.content}</p>
                  </div>
                </>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Accordian;
