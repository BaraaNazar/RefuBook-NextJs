"use client";
import React from "react";
import Link from "next/link";

function HomeAbout() {
  return (
    <div className="bg-[#E5FAFF]">
      <div className=" text-[#4699C2] ">
        <h1 className=" pt-6 text-center text-2xl font-bold text-[#4699C2] ">
          About
        </h1>
        <p className="sm:w-[50%] w-[100%] md:px-0 px-8 sm:px-0 mx-auto mt-6 text-center text-black">
          This website will be able to help refugees wherever they are.
          Information will be separated by country and users will be able to
          create their own account and share their own personal experiences and
          knowledge on how to find a job, rent a house, buy or sell things you
          might need, or how to join events happening in the community.
        </p>

        <div className=" flex justify-center">
          <Link href="/about">
            <button
              type="submit"
              className="  bg-sky-500 text-white py-1.5 px-5 rounded-2xl text-center mx-auto mt-6   "
            >
              learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
