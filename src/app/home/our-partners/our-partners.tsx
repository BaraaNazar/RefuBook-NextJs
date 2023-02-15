"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./styles.css";
import { MdStars } from "react-icons/md";

// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper";
import oldLogoRecoded from "../../../../public/images/thumb-816x460-a96173b055640d884d3c1d90e926d860.jpg"
import newLogoRecoded from "../../../../public/images/ReCoded-Logo-Black.png.webp"
import canvas from "../../../../public/images/Canvas_Horizontal_ByInstructure_Color_RGB.png"
import scrimpa from "../../../../public/images/dark-logo.svg"
import flatrionSchool from "../../../../public/images/employerLogo.png"

export default function OurPartners() {
  return (
    <>
      <Swiper
        slidesPerView={4}
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
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <Image
            className="p-5 w-fit"
            width={100}
            height={100}
            src={oldLogoRecoded}
            alt="partner Image"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <Image
            className="p-5 w-fit"
            width={100}
            height={100}
            src={newLogoRecoded}
            alt="partner Image"
          />
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div>
          <Image
            className="p-5 w-fit"
            width={100}
            height={100}
            src={canvas}
            alt="partner Image"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <Image
            className="p-5 w-fit"
            width={100}
            height={100}
            src={scrimpa}
            alt="partner Image"
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <Image
            className="p-5 w-fit"
            width={100}
            height={100}
            src={flatrionSchool}
            alt="partner Image"
          />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
