import React, { useState } from 'react';
import Toggle from './toggleBtn';
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/images/Baraa-Nazar.jpg"

function User() {
  
  return (
    <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <Image src={img} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="text-sm font-semibold mt-2">User Name</div>
      <div className="text-xs text-gray-500">Front-end Developer</div>
      <div className="flex flex-row items-center mt-3">
        <Toggle />

        <div className="leading-none ml-1 font-bold text-xs">Active</div>
      </div>
    </div>
  );
}
export default User;
