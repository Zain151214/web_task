import React from "react";
import { Graphics } from "../assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  // Dynamic Year
  const year = new Date().getFullYear();

  return (
    <>
      <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-24 py-10 bg-black">
        <div className=" flex justify-between items-center flex-wrap">
          <Link to={"/"}>
            <img src={Graphics.Logo} alt="Logo" className="w-24 md:w-28" />
          </Link>

          <div className="order-2 sm:order-1 w-full sm:w-auto flex justify-center items-center my-5 sm:my-0">
            <ul className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <NavLink to={"/"} className="text-[12px] md:text-base text-white">
                Marketplace
              </NavLink>
              <NavLink
                to={"/stats"}
                className="text-[12px] md:text-base text-white"
              >
                Stats
              </NavLink>
              <NavLink
                to={"/collections"}
                className="text-[12px] md:text-base text-white"
              >
                Collections
              </NavLink>
              <NavLink
                to={"/explore"}
                className="text-[12px] md:text-base text-white"
              >
                Explore
              </NavLink>
              <NavLink
                to={"/community"}
                className="text-[12px] md:text-base text-white"
              >
                Community
              </NavLink>
            </ul>
          </div>

          <div className="flex gap-5 order-1 sm:order-2">
            <Link to={"https://linkedin.com/"} target="_blank">
              <img src={Graphics.Linkedin} alt="Linkedin" />
            </Link>
            <Link to={"https://www.facebook.com/"} target="_blank">
              <img src={Graphics.Facebook} alt="Facebook" />
            </Link>
            <Link to={"https://twitter.com/"} target="_blank">
              <img src={Graphics.Twitter} alt="Twitter" />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank">
              <img src={Graphics.Instagram} alt="Instagram" />
            </Link>
          </div>
        </div>

        <div className="bg-[#1E293B] h-[1px] my-8" />

        <div className=" text-white text-[10px] md:text-[14px] flex justify-center items-center">
          © Copyright {year}, All Rights Reserved by Play Games
        </div>
      </div>
    </>
  );
};

export default Footer;
