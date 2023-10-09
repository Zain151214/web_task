import React from "react";
import { Graphics } from "../assets";

const Logos = () => {
  return (
    <>
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
    </>
  );
};

export default Logos;
