import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Article {
  urlToImage: string;
  title: string;
  content: string;
  author: string;
  article:string;
}

interface CardsProps {
  article: Article;
}

function Cards({ article }: CardsProps) {
  

  return (
    <Link
    href="/singleBlogPage"
      tabIndex={0}
      role="button"
      className=" max-w-lg mx-auto cursor-pointer"
    >
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-1">
        <Image src={article.urlToImage} width={400} height={400} alt="blog" className="rounded-t-lg" />
      </div>
      <div>
        <div className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          {article.title}
        </div>
        <div className="font-normal text-gray-700 mb-3">
          {article.content}
        </div>
        <div className="flex justify-start">
          <div className='w-14 h-14'>
            <Image
              src={article.urlToImage}
              alt="brokenImg"
              width={400}
              height={400}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className=" text-black uppercase font-semibold ">
            {article.author}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
