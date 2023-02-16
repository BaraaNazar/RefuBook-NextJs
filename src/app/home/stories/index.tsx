"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../../../public/images/building-construction-worker-site-with-architect.jpg";
import img2 from "../../../../public/images/young-man-stretching-hand-toward-book-white-t-shirt-jeans-looking-happy-front-view.jpg";

interface Story {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
}

function Stories(): JSX.Element {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e1e7a4c8056d4b4eac7ca7cb22220b2b"
    )
      .then((response) => response.json())
      .then((data) => setStories(data.articles.slice(0, 2)));
  }, []);

  return (
    <div>
      <section className="bg-[#4699C2] lg:px-40 px-14  py-10">
        <div className="font-sans font-normal  text-white lg:text-left text-center ">
          <p className=" lg:text-[3.375rem]  text-[1.5rem] lg:tracking-[-1] tracking-[-0.3] mb-4">
            Latest Stories
          </p>
          <p className="lg:text-lg text-sm tracking-tighter lg:w-[26rem] w-[16.25rem] lg:m-0 m-auto pb-4 ">
            Home is behind, the world ahead and there are many paths to tread
            through shadows to the edge.
          </p>
        </div>

        {stories &&
          stories.map((story, index) => (
            <Link key={index} href="">
              <div className="flex lg:flex-row flex-col lg:gap-20 lg:justify-between lg:py-10  py-6 lg:items-stretch items-center">
                <div className="lg:w-[30.52rem] lg:h-[18.958rem] w-[15.823rem] h-[8.938rem] bg-neutral-900  rounded-sm mb-4">
                  <Image
                    src={img1}
                    alt="Story-Image"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-sm "
                  />
                </div>

                <div className="lg:w-[25.189rem] w-[15.823rem] text-left flex flex-col gap-5">
                  <div>
                    <span className="bg-[#FEDB9B] py-2 px-4 font-sans font-bold text-[10px] text-[#4699C2] rounded-sm">
                      English
                    </span>
                  </div>
                  <p className="text-left lg:w-[25.19rem] w-[14.438rem]  font-sans font-light lg:text-3xl text-lg tracking-[-0.1px] text-white">
                    {story.description}
                  </p>
                  <div className="flex gap-3 pt-2 items-center">
                    <Image
                      src={img2}
                      alt="userImage"
                      className=" object-cover lg:w-[2.199rem] lg:h-[2.167rem] w-[1.875rem] h-[1.75rem] bg-[#FEDB9B] rounded-full mt-1"
                    />
                    <div>
                      <p className="font-sans font-bold text-sm lg:tracking-[-0.32px] tracking-[-0.1px] text-white">
                        {story.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
}

export default Stories;
