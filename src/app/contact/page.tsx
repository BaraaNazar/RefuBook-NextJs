"use client";
import React, { useState } from 'react';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import contactImage from '../../../public/images/Contact.png';
import Navbar from "../navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Contact(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const notify = () => {
    toast("Default Notification !");

    toast.success('Well, done!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      toast.error('Something wrong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!email || !name || !message) {
      toast.error('Something wrong!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
    }
  };
  return (
    <>
<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>      <div className="relative z-10 flex flex-col-reverse md:flex-row md:justify-center md:gap-10 h-screen">
        <div className="mx-auto w-full md:w-[50%] relative z-10">
          <h1 className="sm:text-left text-center sm:mx-auto md:pt-16  font-bold text-3xl sm:text-5xl  text-[#4699C2]">
          Get in Touch
          </h1>
          <p className="md:pt-5 text-[#8B8F9C] text-center mx-5 sm:mx-2 md:mx-1 sm:text-start md:w-[60%]">
          Want to get in touch? We`d love to hear from you .Here how you can reach us
          </p>
          <form 
          onSubmit={submitHandler}
          className="flex flex-col">
            <div>
            <p className=" text-[#8B8F9C]  md:pt-3 md:pb-1 mx-5 sm:mx-2 md:mx-1 ">
            Name
            </p>
            <input
              onChange={(e)=>{ setName(e.target.value)}}
              placeholder="Your Name..."
              className="md:w-[450px] h-[50px] sm:h-[50px] rounded-md text-left mx-5 sm:mx-2 md:mx-1 pl-2 bg-slate-200"
              required
            />

            <p className=" text-[#8B8F9C]  md:pt-3 md:pb-1 mx-5 sm:mx-2 md:mx-1 ">
            Email
            </p>
            <input
              onChange={(e)=>{ setEmail(e.target.value)}}
              placeholder="hello@gmail.com"
              type="email"
              className="md:w-[450px] h-[50px] sm:h-[50px] rounded-md text-left mx-5 sm:mx-2 md:mx-1 pl-2 bg-slate-200"
              required
            />
            </div>
            <p className=" text-[#8B8F9C]  md:pt-3 mx-5 sm:mx-2 md:mx-1 ">
            Message
            </p>
            <textarea
            onChange={(e)=>{ setMessage(e.target.value)}}
              placeholder="Your Message..."
              aria-label="disabled input"
              className="rounded-md block placeholder-pl-10 min-h-[160px] max-h-[160px] md:min-h-[199px]  md:max-h-[200px] md:w-[450px] mt-3 mx-5 sm:mx-2 md:mx-1  pl-2 bg-slate-200"
              required
            />
            <button
              type="submit"
              className="bg-[#4699C2] mx-auto rounded-[1009px] mt-2 md:ml-1 md:mt-2 text-white lg:w-[450px] w-[80px] h-[40px] relative"
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
