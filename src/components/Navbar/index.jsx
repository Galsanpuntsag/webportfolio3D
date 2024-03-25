"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-800 items-center  z-10 font-abc">
      <div
        className="w-32  h-10   md:w-40 ml-5  bg-cover bg-center"
        style={{ backgroundImage: `url('/images/mylogo.png')` }}
      ></div>
      <div className="relative flex h-16 mr-5 items-center justify-between">
        <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block md:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-900  text-purple-400 rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="text-purple-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Skill
              </a>
              <a
                href="#"
                className="text-purple-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-purple-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" dropdown dropdown-end sm:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="block h-5 w-5 text-purple-400 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-36 bg-slate-800"
        >
          <li>
            <a className=" text-purple-400 text-xl">Home</a>
          </li>
          <li>
            <a className=" text-purple-400 text-xl">Portfolio</a>
          </li>
          <li>
            <a className=" text-purple-400 text-xl">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
