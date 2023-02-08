"use client"
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#E5FAFF]">
      <div className=" text-[#4699C2] ">
        <h1 className=" pt-6 text-center text-2xl font-bold text-[#4699C2] ">
        </h1>
        <p className="sm:w-[50%] w-[100%] md:px-0 px-8 sm:px-0 mx-auto mt-6 text-center text-black">
        </p>

        <div className=" flex justify-center">
        <Link to="/about">
          <button
            type="submit"
            className="  bg-sky-500 text-white py-1.5 px-5 rounded-2xl text-center mx-auto mt-6   "
          >
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
