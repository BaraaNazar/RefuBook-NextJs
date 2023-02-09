"use client"
import React from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
// import { Carousel } from 'flowbite-react';
import { MdStars } from 'react-icons/md';
import logo from "../../../../public/images/img1.png";

function Features() {
  const [emblaRef] = useEmblaCarousel()
  const featuressectioncontent = [
    {
      id: 1,
      title: "Reliability",
      description:
        "Reliability is the fuel for compounding strength of a leader. Loss of reliability results in loss of confidence in one's leadership.” relationship repair work the deeper trust grows.",
    },
    {
      id: 2,
      title: "Motivation",
      description:
        "Motivation is the drive to achieve your goals or needs. Motivation is important to break old habits and to develop healthy ones. Many people struggle with getting and staying motivated.",
    },
    {
      id: 3,
      title: "Efficiency",
      description:
        "Efficiency is the ability to produce an intended result in the way that results in the least waste of time, effort, and resources. Effectiveness is the ability to produce a better result, one that delivers more value or achieves a better outcome",
    },
    {
      id: 4,
      title: "Creativity",
      description:
        "Creativity is defined as the tendency to generate or recognize ideas, alternatives, or possibilities that may be useful in solving problems, communicating with others, and entertaining ourselves and others",
    },
  ];

  return (
    <div className="flex flex-row bg-[#E5FAFF] p-5 embla" ref={emblaRef}>
      <div className="grid grid-cols-2 grid-rows-2 w-1/2 p-12  embla__container">
        {featuressectioncontent.map((feature) => {
          return (
            <div className="h-full items-center w-[75%] gap-2 embla__slide" key={feature.id}>
              <header className="flex xl:gap-x-2 gap-y-10 pt-10 justify-start  text-center mt-2 sm:pt-2 ">
                <MdStars className="mt-[2px] text-2xl text-zinc-500" />
                <h3 className="font-bold">{feature.title}</h3>
              </header>
              <p className=" text-start text-[12px] w-[100%] pt-1 ">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
        <div className="mx-auto md:pl-[100px] lg:pl-[200px] sm:pt-[20px] pl-[75px]">
          <Image className="h-[350px] w-[350px] mx-auto " src={logo} alt="" />
        </div>
    </div>
  );
}
export default Features;
