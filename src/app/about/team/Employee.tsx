import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../../public/images/Baraa-Nazar.jpg";

function Employee() {
  return (
    <Link
      href="https://www.linkedin.com/in/baraa-nazar-a29226138/"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image
        className="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg h-fit"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
          Baraa Nazar
        </h5>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-left">
          Front-end Developer
        </h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-left">
          Motivated front-end developer with 1 year of experience building
          websites and applications using HTML, CSS, JavaScript, and React.
        </p>
      </div>
    </Link>
  );
}

export default Employee;
