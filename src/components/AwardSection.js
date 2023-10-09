import { Button } from "../components";
import React, { useEffect, useState } from "react";
import { GAMES_DATA, GAME_BUTTONS } from "../utils/mock";

const AwardSection = () => {
  const [items, setItems] = useState(GAMES_DATA);
  const [activeCategory, setActiveCategory] = useState("Adventure");

  useEffect(() => {
    const updateItems = GAMES_DATA.filter((curElem) => {
      return curElem.category === activeCategory;
    });

    setItems(updateItems);
  }, [activeCategory]);

  const filterItem = (categItem) => {
    setActiveCategory(categItem);
  };

  return (
    <>
      <div>
        <h1 className="w-3/4 font_bebas text-center text-white text-3xl sm:text-[3.3rem] sm:leading-[3rem] md:text-[4.3rem] md:leading-[4rem] lg:text-[5.3rem] lg:leading-[5rem] xl:text-[6.3rem] xl:leading-[6rem] uppercase">
          we’re the first gaming award winners the world
        </h1>
        <div className="flex gap-5 flex-wrap py-5">
          {GAME_BUTTONS.map((item) => {
            return (
              <>
                <div className="text-white">
                  <button
                    key={item.id}
                    className={`${
                      activeCategory === item.btn ? "isActive text-base" : ""
                    }`}
                    onClick={() => filterItem(item.category)}
                  >
                    {item.btn}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          {items.map((item) => {
            return (
              <div id={item.id} className=" flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.category}
                  className="h-full w-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center text-white w-full md:w-2/4">
          <div className="font_nunito">
            <p className="text-xs sm:text-sm md:text-xl font-extralight">
              We’ve have many more than
            </p>
            <h1 className="text-3xl font-bold font_bebas">100+</h1>
            <p className="text-xs sm:text-sm md:text-lg">
              Gaming <span className="isActive">Collections</span>
            </p>
          </div>

          <div>
            <Button title={"Play Now"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardSection;
