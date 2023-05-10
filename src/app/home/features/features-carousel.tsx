"use client"
import React, { useRef, useState } from "react";
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <MdStars className="text-2xl text-zinc-500" />
            <header className="text-center mt-2 sm:pt-2 ">
              <h3 className="font-bold">Reliability</h3>
            </header>
            <p className=" text-start text-[12px] w-[100%] pt-1 h-36">
              Reliability is the fuel for compounding strength of a leader. Loss
              of reliability results in loss of confidence in one`s leadership.
              Relationship repair work the deeper trust grows.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <MdStars className="text-2xl text-zinc-500" />
            <header className="text-center mt-2 sm:pt-2 ">
              <h3 className="font-bold">Motivation</h3>
            </header>
            <p className=" text-start text-[12px] w-[100%] pt-1 h-36">
              Motivation is the drive to achieve your goals or needs. Motivation
              is important to break old habits and to develop healthy ones. Many
              people struggle with getting and staying motivated.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <MdStars className="text-2xl text-zinc-500" />
            <header className="text-center mt-2 sm:pt-2 ">
              <h3 className="font-bold">Efficiency</h3>
            </header>
            <p className=" text-start text-[12px] w-[100%] pt-1 h-36">
              Efficiency is the ability to produce an intended result in the way
              that results in the least waste of time, effort, and resources.
              Effectiveness is the ability to produce a better result, one that
              delivers more value or achieves a better outcome.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <MdStars className="text-2xl text-zinc-500" />
            <header className="text-center mt-2 sm:pt-2 ">
              <h3 className="font-bold">Creativity</h3>
            </header>
            <p className=" text-start text-[12px] w-[100%] pt-1 h-36">
              Creativity is defined as the tendency to generate or recognize
              ideas, alternatives, or possibilities that may be useful in
              solving problems, communicating with others, and entertaining
              ourselves and others.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
