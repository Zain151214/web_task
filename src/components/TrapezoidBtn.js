import React from "react";
import { Link } from "react-router-dom";

const TrapezoidBtn = ({ route, title }) => {
  return (
    <>
      <div className="relative w-52">
        <Link to={route}>
          <button className="trapezoid_button w-full"></button>
          <span className="text-2xl sm:text-3xl absolute top-1 left-0 text-center w-full text-white">
            {title}
          </span>
        </Link>
      </div>
    </>
  );
};

export default TrapezoidBtn;
