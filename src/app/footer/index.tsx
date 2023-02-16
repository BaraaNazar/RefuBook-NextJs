import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/RefuBook-Logo.png";

function Footer() {
  return (
    <footer className="lg:flex lg:justify-between  lg:py-9 lg:mx-24 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
      <div className=" items-center lg:flex lg:flex-row  max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ">
        <Link href="/" className="flex  md:block md:w-fit tracking-tight ">
          <Image
            src={Logo}
            className="h-6 mr-3 sm:h-9 w-fit m-5"
            alt="Refubook Logo"
          />
        </Link>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="flex justify-center">
          <li className="mr-6">
            <Link
              href="/"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-white rounded md:bg-transparent text-gray-700 md:p-0 dark:text-white md:hover:text-blue-700"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/about"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/BlogPage"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Blog
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/contact"
              className="text-base font-normal hover:underline block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:flex lg:flex-row  max-lg:pb-4 max-lg:flex  max-lg:items-center max-lg:justify-center">
        <div>
          <div className="flex justify-between">
            <div className=" items-center lg:flex lg:flex-row    max-lg:flex  max-lg:items-center max-lg:justify-center">
              <ul className="flex  items-center p-4 mt-4 space-x-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/login">
                    <button
                      type="button"
                      className="bg-sky-600 hover:bg-sky-400 text-white font-bold py-1 px-6  rounded-full  "
                    >
                      sign Up
                    </button>
                  </Link>
                </li>
                <li>
                  <select
                    name="Languages"
                    id="languages"
                    className="dropdown rounded-full hover:bg-gray-200 py-1 px-6 border border-sky-600 "
                  >
                    <option value="en" className="border-sky-600 ">
                      English
                    </option>
                    <option value="ar" className="border-sky-600 ">
                      العربية
                    </option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
