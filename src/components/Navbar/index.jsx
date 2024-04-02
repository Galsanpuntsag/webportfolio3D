"use client";

import React, { useState, useEffect } from "react";
import { FaAlignLeft } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },

  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].title);
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex items-center justify-center p-1 fixed top-0 z-20 bg-opacity-100 shadow-2xl`}
    >
      <div className="w-full flex justify-between items-center mx-3 max-w-7xl">
        <img src="/images/mylogo.png" alt="" className="h-10 w-28" />

        {/* md display? */}
        <div className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${
                active === link.title ? "text-purple-400" : "text-white"
              } hover:text-white text-2xl font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="flex md:hidden">
          {toggle ? (
            <AiOutlineCloseCircle
              className="w-10 h-8 text-purple-600 cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <FaAlignLeft
              className="w-6 h-6 text-purple-600 cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 absolute top-16 right-0  mx-4 my-2 min-w-[140px]  bg-slate-950  z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-center items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-purple-300" : "text-white"
                  } font-bold cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
