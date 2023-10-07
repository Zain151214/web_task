import React from "react";
import { Graphics } from "../assets";
import { Button } from "../components";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="px-10 sm:px-10 md:px-12 lg:px-20 xl:px-24 py-10 flex justify-between items-center text-white bg-black fixed w-full z-50 text-xs md:text-sm xl:text-base">
        <Link to={"/"}>
          <img
            src={Graphics.Logo}
            alt="Logo"
            className="sm:w-20 md:w-24 lg:w-28 xl:w-32"
          />
        </Link>
        <ul>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "isActive"
                : "text-white sm:px-2 md:px-3 lg:px-4 xl:px-5"
            }
          >
            Marketplace
          </NavLink>
          <NavLink
            to={"/stats"}
            className={({ isActive }) =>
              isActive
                ? "isActive"
                : "text-white sm:px-2 md:px-3 lg:px-4 xl:px-5"
            }
          >
            Stats
          </NavLink>
          <NavLink
            to={"/collections"}
            className={({ isActive }) =>
              isActive
                ? "isActive"
                : "text-white sm:px-2 md:px-3 lg:px-4 xl:px-5"
            }
          >
            Collections
          </NavLink>
          <NavLink
            to={"/explore"}
            className={({ isActive }) =>
              isActive
                ? "isActive"
                : "text-white sm:px-2 md:px-3 lg:px-4 xl:px-5"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to={"/community"}
            className={({ isActive }) =>
              isActive
                ? "isActive"
                : "text-white sm:px-2 md:px-3 lg:px-4 xl:px-5"
            }
          >
            Community
          </NavLink>
        </ul>
        <Button title={"Register"} route={"/register"} />
      </div>
    </>
  );
};

export default Navbar;
