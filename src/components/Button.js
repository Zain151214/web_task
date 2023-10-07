import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, route }) => {
  return (
    <>
      <Link to={route}>
        <div className="p-3 w-20 md:w-24 lg:w-28 xl:w-32 text-center gradient">
          <h3 className="text-xs md:text-sm xl:text-base font-bold text-white">
            {title}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default Button;
