"use client";
import React, { useState } from "react";
import Image from "next/image";
import testimonialImg from "../../../../public/images/testimonal-img.png";
import Carousel from "./testimonialCarousel";

function Testimonial() {
  const [currentIndex, securrentIndex] = useState({});
  return (
    <div className="flex flex-col lg:flex-row lg:justify-around justify-center items-center w-screen h-fit space-y-4 text-center dark:bg-gray-900 dark:text-white pt-10">
      <Image
        src={testimonialImg}
        className="lg:w-full lg:p-36 w-1/3"
        alt="testimonialImg"
      />

      <Carousel />
    </div>
  );
}
export default Testimonial;
