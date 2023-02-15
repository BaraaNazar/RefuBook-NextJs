import React from "react";
import Link from "next/link";
import Image from "next/image";
import homepagepic from "../../../../public/images/homepic.png";

function HomeBody() {
  return (
    <div className="flex flex-row space-x-0 mx-auto my-10 xl:my-0 md:my-8 md:px-16 xl:h-screen">
      <div className=" bodycontainer flex justify-center items-center lg:flex-row flex-col-reverse mx-auto my-10 xl:my-0 md:my-8 md:px-16  md:text-center space-between w-screen m-10 px-4 pt-4 ">
        <div className="flex flex-col items-center lg:items-start justufy-center md:px-0 ">
          <div className=" w-80 h-24   ">
            <p className="homebody  text-center lg:text-left py-8 text-blue-700 font-bold  w-full font-style: normal text-5xl  xl:text-6xl ">
              Refubook
            </p>
          </div>

          <div className=" w-fit h-36  ">
            <p className=" express text-center lg:text-left  py-3 text-orange-400 font-bold  w-full font-style: normal   text-5xl  mb-6 lg:w-2/6 leading-none  xl:text-5xl">
              Express Freely
            </p>
          </div>
          <div className="w-96 h-24 p-4 md:p-0">
            <p className="  text-center lg:text-left lg:w-3/5  mb-6  ">
              share your own personal experiences and knowledge on how to find a
              job, rent a house, buy or sell things you might need, or how to
              join events happening in the community.
            </p>
          </div>
          <div className="button text-left mt-10 pt-10 ">
            <Link href="/login">
              <button
                type="button"
                className=" signUp  justify-center block   mb-3  text-white bg-sky-600 rounded-full  hover:bg-sky-700 font-bold py-1 px-4 "
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>

        <div className="mx-auto flex justify-center md:w-fit items-center w-2/3">
          <Image src={homepagepic} alt="homepic" />
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
