import React from 'react';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import contactImage from '../../../public/images/Contact.png';
import Navbar from "../navbar"

function Contact() {
  return (
    <>
      <div className="relative z-10 flex flex-col-reverse md:flex-row md:justify-center md:gap-10 h-screen">
        <div className="mx-auto w-full md:w-[50%] relative z-10">
          <h1 className="sm:text-left text-center sm:mx-auto md:pt-16  font-bold text-3xl sm:text-5xl  text-[#4699C2]">
          Get in Touch
          </h1>
          <p className="md:pt-5 text-[#8B8F9C] text-center mx-5 sm:mx-2 md:mx-1 sm:text-start md:w-[60%]">
          Want to get in touch? We`d love to hear from you .Here how you can reach us
          </p>
          <form  className="flex flex-col">
            <div>
            <p className=" text-[#8B8F9C]  md:pt-3 md:pb-1 mx-5 sm:mx-2 md:mx-1 ">
            Name
            </p>
            <input
              placeholder="Your Name..."
              className="md:w-[450px] h-[50px] sm:h-[50px] rounded-md text-left mx-5 sm:mx-2 md:mx-1 pl-2 bg-slate-200"
              required
            />

            <p className=" text-[#8B8F9C]  md:pt-3 md:pb-1 mx-5 sm:mx-2 md:mx-1 ">
            Email
            </p>
            <input
              placeholder="hello@gmail.com"
              className="md:w-[450px] h-[50px] sm:h-[50px] rounded-md text-left mx-5 sm:mx-2 md:mx-1 pl-2 bg-slate-200"
              required
            />
            </div>
            <p className=" text-[#8B8F9C]  md:pt-3 mx-5 sm:mx-2 md:mx-1 ">
            Message
            </p>
            <textarea
              placeholder="Your Message..."
              aria-label="disabled input"
              className="rounded-md block placeholder-pl-10 min-h-[160px] max-h-[160px] md:min-h-[199px]  md:max-h-[200px] md:w-[450px] mt-3 mx-5 sm:mx-2 md:mx-1  pl-2 bg-slate-200"
              required
            />
            <button
              type="submit"
              className="bg-[#4699C2] mx-auto rounded-[1009px] mt-2 md:ml-1 md:mt-2 text-white w-[450px] h-[40px] relative"
            >
              Send
            </button>
          </form>
          <div className="md:flex flex mt-2 sm:mt-4 sm:ml-3 gap-x-2 sm:mx-auto justify-center md:justify-start pt-5">
            <FaInstagram className="text-[#4699C2] text-2xl mb-1 " />
            <ImTwitter className="text-[#4699C2] text-2xl mb-1 " />
            <ImFacebook className="text-[#4699C2] text-2xl mb-1" />
          </div>
        </div>
        <div className=" md:pt-12">
          <Image
            src={contactImage}
            className="mx-auto my-auto w-[300px] h-[220px] sm:w-[300px] sm:h-[400px] md:w-[500px] md:h-[475px] lg:w-[550px] lg:h-[450px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
