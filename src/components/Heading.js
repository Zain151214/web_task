import React from "react";

const Heading = ({ heading }) => {
  return (
    <>
      <h1 className="font_bebas text-center text-white text-3xl sm:text-[3.3rem] sm:leading-[3rem] md:text-[4.3rem] md:leading-[4rem] lg:text-[5.3rem] lg:leading-[5rem] xl:text-[6.3rem] xl:leading-[6rem] uppercase">
        {heading}
      </h1>
    </>
  );
};

export default Heading;
