import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        className="mySwiper w-screen h-fit p-1 relative"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-self-end space-y-4 text-left md:text-left w-fit lg:w-96 p-10">
            <div>
              <p className="">
                As a refugee, my life has been filled with uncertainty and
                hardship. But through it all, I have found strength and
                resilience within myself that I never knew existed.
              </p>
              <h3 title="Header" className="text-gray-300">
                Omer Ali
              </h3>
              <h3 className="text-gray-300">Anbar</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-self-end space-y-4 text-left md:text-left w-fit p-10 lg:w-96">
            <div>
              <p className="">
                As a refugee, my life has been filled with uncertainty and
                hardship. But through it all, I have found strength and
                resilience within myself that I never knew existed.
              </p>
              <h3 title="Header" className="text-gray-300">
                Omer Ali
              </h3>
              <h3 className="text-gray-300">Anbar</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-self-end space-y-4 text-left md:text-left w-fit p-10 lg:w-96">
            <div>
              <p className="">
                As a refugee, my life has been filled with uncertainty and
                hardship. But through it all, I have found strength and
                resilience within myself that I never knew existed.
              </p>
              <h3 title="Header" className="text-gray-300">
                Omer Ali
              </h3>
              <h3 className="text-gray-300">Anbar</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-self-end space-y-4 text-left md:text-left w-fit p-10 lg:w-96">
            <div>
              <p className="">
                As a refugee, my life has been filled with uncertainty and
                hardship. But through it all, I have found strength and
                resilience within myself that I never knew existed.
              </p>
              <h3 title="Header" className="text-gray-300">
                Omer Ali
              </h3>
              <h3 className="text-gray-300">Anbar</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
