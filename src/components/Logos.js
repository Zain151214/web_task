import React from "react";
import { Graphics } from "../assets";

const Logos = () => {
  const LOGOS = [
    { id: 1, img: Graphics.Logo_3 },
    { id: 2, img: Graphics.Logo_3 },
    { id: 3, img: Graphics.Logo_3 },
    { id: 4, img: Graphics.Logo_3 },
  ];

  return (
    <>
      <div className="flex justify-center items-center gap-2 sm:gap-8 mt-5">
        {LOGOS.map((item) => {
          return (
            <>
              <img
                key={item.id}
                src={item.img}
                alt="Logo"
                className="w-14 sm:w-28 md:w-36 lg:w-44 xl:w-52"
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Logos;
