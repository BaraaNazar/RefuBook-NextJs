"use client"
import React, { useEffect, useState } from 'react';
import Cards from './blo2/blogcards';
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./styles.css";

interface Article {
  title: string;
  article: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content:string;
  author:string;
}

function Blog(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e1e7a4c8056d4b4eac7ca7cb22220b2b'
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles.slice(0,5)));
  }, []);

  return (
    <div>
      <div className="md:grid md:place-items-center">
        <div className="m-5 md:w-2/3 mt-24">
          <div className="hidden md:flex md:justify-end">
            <div className="mx-1">Sort by:</div>
            <select className="mx-1 bg-sky-200 rounded">
              <option>DATE</option>
              <option>Alphabatic</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3"
            />
          </div>
          <hr className="hidden md:block md:h-1 md:bg-gray-300 md:m-1 md:rounded-full" />
          <div className="text-[#4F4F4F] font-bold text-lg p-2">Popular:</div>
          <div className="hidden md:flex">
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
                    className="mySwiper  md:p-0"
            >
              {articles.slice(0, 6).map((article) => (
                <SwiperSlide key="">
                  <Cards key={article.url} article={article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex md:hidden">
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
                    className="mySwiper  md:p-0"
            >
              {articles.slice(0, 6).map((article) => (
                <SwiperSlide key="">

                  <Cards key={article.url} article={article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid justify-center items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 space-x-5 space-y-5 flex-wrap m-5 text-left justify-center items-center">
              {articles.map((article) => (
                <Cards key={article.url} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
