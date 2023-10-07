import { Graphics } from "../assets";
import TrapezoidBtn from "./TrapezoidBtn";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider_Data = [
  { id: 1, image: Graphics.Game_1 },
  { id: 2, image: Graphics.Game_2 },
  { id: 3, image: Graphics.Game_3 },
];

const PlayCards = () => {
  const [width, setWidth] = useState(null);
  const hasWindow = typeof window !== "undefined";
  const getWindowsDimenshions = () => {
    setWidth(hasWindow ? window.innerWidth : null);
  };

  useEffect(() => {
    if (hasWindow) {
      getWindowsDimenshions();
      window.addEventListener("resize", getWindowsDimenshions);
    }
  }, []);

  const isMobile = width < 640;

  return (
    <>
      {isMobile ? (
        <>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full"
            style={{
              "--swiper-pagination-color":
                "linear-gradient(90deg, #c1260f 0.34%, #ee642a 96.66%)",
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-width": "8px",
            }}
          >
            {Slider_Data.map((item) => {
              return (
                <>
                  <SwiperSlide className="text-white">
                    <div
                      key={item.id}
                      className="flex flex-col justify-center items-center mb-16 relative"
                    >
                      <img src={item.image} alt="Game_1" />
                      <div className="absolute bottom-[-20px]">
                        <TrapezoidBtn title={"Play Now"} />
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center flex-wrap gap-5">
            {Slider_Data.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="flex flex-col mb-5 justify-center items-center relative"
                  >
                    <img src={item.image} alt="Game_1" />
                    <div className="absolute bottom-[-20px]">
                      <TrapezoidBtn title={"Play Now"} />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default PlayCards;
