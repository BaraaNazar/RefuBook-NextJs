"use client"
import React, { useEffect } from 'react'
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import testimonialImg from '../../../../public/images/testimonal-img.png';

function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])
    const testimonial = [
        {
            id:1,
        "content":" As a refugee, my life has been filled with uncertainty and hardship. But through it all, I have found strength and resilience within myself that I never knew existed.",
        "author":"Omer Ali,",
        "from":"Anbar"},
        {
            id:2,
          "content":" Despite the challenges I have faced, I am grateful for the opportunities and support that have helped me rebuild my life and find hope for the future.",
          "author":" Mohammed Al-ani,",
          "from":"Musel"},
          {
            id:3,
            "content":"  As a refugee, my life has been filled with uncertainty and hardship. But through it all, I have found strength and resilience  within myself that I never knew existed.",
            "author":"Belal Barkat,",
            "from":"Halab"},
        {
            id:4,
          "content":" As a refugee, my life has been filled with uncertainty and hardship. But through it all, I have found strength and resilience within myself that I never knew existed.",
          "author":"Alwaleed khalid,",
          "from":"Ghaza"}

      ]
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly items-center w-full space-y-4 text-center dark:bg-gray-900 dark:text-white p-16">
      <div>
        <Image src={testimonialImg} className="w-fit p-4" alt="testimonialImg" />
      </div>
      <div className="w-96">
             {testimonial.map((testimonial) => {
           return(
          <div key={testimonial.id} className="flex flex-col justify-self-end space-y-4 text-center md:text-left">
            <p>
            {testimonial.content}
            </p>
            <div>
              <h3 title="Header" className="text-gray-300">
              {testimonial.author}
              </h3>
              <h3 className="text-gray-300">{testimonial.from}</h3>
            </div>
          </div>
           );
        })}
      </div>
    </div>
  );
}
export default Testimonial;
