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
        <h1 className="w-3/4 text-center text-white text-xl sm:text-[2rem] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem] xl:text-[5rem] xl:leading-[5rem] uppercase mb-5">
          we’re the first gaming award winners the world
        </h1>
        <div className="flex gap-5 flex-wrap">
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
        <div className="flex justify-between items-center text-white w-2/4">
          <div>
            <p className="text-xl font-extralight">We’ve have many more than</p>
            <h1 className="text-3xl font-bold">100+</h1>
            Gaming <span className="isActive">Collections</span>
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
