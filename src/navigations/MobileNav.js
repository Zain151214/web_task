import { Graphics } from "../assets";
import { Button } from "../components";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <>
      <div className="px-4 py-5 fixed z-50 w-full flex justify-between items-center bg-black">
        <div className="flex justify-between items-center w-full">
          <Link to={"/"}>
            <img src={Graphics.Mobile_Logo} alt="Logo" />
          </Link>

          <div className="flex items-center gap-5">
            <img
              src={Graphics.Bars}
              alt="Bars"
              onClick={() => setActiveNav(true)}
            />
            <Button title={"Register"} route={"/register"} />
          </div>
        </div>
        <div>
          {activeNav && (
            <>
              <div className="bg-black min-h-screen w-[50%] absolute top-0 right-0 py-5">
                <div className="pl-3 mt-5">
                  <div className="pl-5 pb-5">
                    <img
                      src={Graphics.Cross}
                      alt="Cross"
                      onClick={() => setActiveNav(false)}
                    />
                  </div>

                  <ul className="flex-col text-base font-semibold flex gap-2">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? "isActive" : "text-white  pl-5"
                      }
                    >
                      Marketplace
                    </NavLink>
                    <NavLink
                      to={"/stats"}
                      className={({ isActive }) =>
                        isActive ? "isActive" : "text-white pl-5"
                      }
                    >
                      Stats
                    </NavLink>
                    <NavLink
                      to={"/collections"}
                      className={({ isActive }) =>
                        isActive ? "isActive" : "text-white pl-5"
                      }
                    >
                      Collections
                    </NavLink>
                    <NavLink
                      to={"/explore"}
                      className={({ isActive }) =>
                        isActive ? "isActive" : "text-white pl-5"
                      }
                    >
                      Explore
                    </NavLink>
                    <NavLink
                      to={"/community"}
                      className={({ isActive }) =>
                        isActive ? "isActive" : "text-white pl-5"
                      }
                    >
                      Community
                    </NavLink>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
