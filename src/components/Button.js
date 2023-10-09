import React from "react";
import { Graphics } from "../assets";
import { Link } from "react-router-dom";

const Button = ({ title, route, watchBtn }) => {
  return (
    <>
      <Link to={route}>
        <div className="relative">
          <img
            src={watchBtn ? Graphics.Btn_Black : Graphics.Btn_Orange}
            alt="btn"
          />
          <h3
            className={`text-xs md:text-sm xl:text-base font-bold text-white absolute top-3 md:top-2 w-full text-center ${
              watchBtn && "left-3"
            }`}
          >
            {title}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default Button;
