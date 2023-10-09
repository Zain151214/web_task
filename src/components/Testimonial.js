import React from "react";
import { Graphics } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

import { TESTIMONIAL_DATA } from "../utils/mock";

const Testimonial = () => {
  return (
    <>
      <div className="my-10">
        <div className="flex justify-center items-center">
          <div className="w-full flex flex-col items-center gap-5">
            <img src={Graphics.Crown} alt="Crown" className="w-20" />

            <h1 className="font_bebas text-center text-white text-3xl sm:text-[3.3rem] sm:leading-[3rem] md:text-[4.3rem] md:leading-[4rem] lg:text-[5.3rem] lg:leading-[5rem] xl:text-[6.3rem] xl:leading-[6rem] uppercase">
              Happy Clients
            </h1>
          </div>
        </div>

        <div className="text-white mt-10 px-3">
          <Swiper
            breakpoints={{
              440: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            style={{
              "--swiper-pagination-color":
                "linear-gradient(90deg, #c1260f 0.34%, #ee642a 96.66%)",
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-width": "8px",
            }}
          >
            {TESTIMONIAL_DATA.map((item, index) => {
              return (
                <>
                  <SwiperSlide>
                    <div
                      key={index}
                      className="bg_img relative p-5 mb-12 min-h-full"
                    >
                      <img
                        src={Graphics.Quote}
                        alt="Quote"
                        className="absolute top-0 right-4 sm:right-2 md:right-4 lg:right-6 xl:right-10 w-10"
                      />

                      <div className="flex flex-col justify-center items-center gap-5 text-center">
                        <img
                          src={Graphics.Stars}
                          alt="stars"
                          className="w-16 sm:w-18 md:w-16 lg:w-20 xl:w-28"
                        />
                        <p>{item.content_1}</p>

                        <p>{item.content_2}</p>

                        <img
                          src={item.person}
                          alt="Person"
                          className="w-[46px] h-[46px]"
                        />
                        <h1>{item.name}</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
