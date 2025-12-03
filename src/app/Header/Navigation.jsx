"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-center items-center pt-1 lg:h-[100px]">
      <button
        className="lg:hidden flex flex-col justify-center gap-0.5 items-center w-8 h-8 border-2 border-white rounded p-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`bg-white block h-0.5 w-5 rounded-sm my-0.5 transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>

      <ul
        className={`${
          isOpen ? "fixed flex flex-col bg-slate-200 gap-6 p-6" : "hidden"
        } top-24 rounded-sm text-[20px] text-slate-500 w-[300px] max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 sm:w-[600px] cursor-pointer  lg:static lg:flex lg:flex-row lg:gap-10 lg:bg-transparent lg:p-0 lg:w-[560px] lg:text-white lg:text-[15px] xl:text-[16px] xl:w-auto`}
      >
        <li className="w-full m-auto text-center h-12 lg:h-auto lg:w-auto sm:block lg:inline-block border-b border-b-slate-400 lg:border-b-0 hover:text-slate-200">
          Home
        </li>
        <li className="w-full m-auto text-center h-12 lg:h-auto lg:w-auto sm:block lg:block border-b border-b-slate-400 lg:border-b-0 hover:text-slate-200">
          Features
        </li>
        <li className="w-full m-auto text-center h-12 lg:h-auto lg:w-auto sm:block lg:block border-b border-b-slate-400 lg:border-b-0 hover:text-slate-200">
          About Us
        </li>
        <li className="w-full m-auto text-center h-12 lg:h-auto lg:w-auto sm:block lg:block border-b border-b-slate-400 lg:border-b-0 hover:text-slate-200">
          Services
        </li>
        <li className="w-full m-auto text-center h-12 lg:h-auto lg:w-auto sm:block lg:block border-b border-b-slate-400 lg:border-b-0 hover:text-slate-200">
          Portfolio
        </li>
        <li className="w-full m-auto text-center h-12 lg:h-auto lg:w-auto sm:block lg:block hover:text-slate-200">
          Contact Us
        </li>
      </ul>
    </nav>
  );
}
