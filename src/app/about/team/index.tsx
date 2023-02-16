import React from "react";
import Employee from "./Employee";
import "./style.css";

function Team() {
  return (
    <div className="p-10 bg-cyan-50">
      <div className="flex justify-center items-center text-center ">
        <div className="flex flex-col justify-center items-center text-center md:w-1/2 sm:w-fit md:space-y-20">
          <h1 className="md:text-5xl font-bold capitalize text-blue-900 text-3xl m-5">
            Who build it ?
          </h1>
          <div className="md:flex md:flex-nowrap md:flex-row flex-col justify-left text-center items-center text-blue-900 hidden">
            <Employee />
          </div>

          <div className="w-full md:hidden flex">
            <Employee />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
