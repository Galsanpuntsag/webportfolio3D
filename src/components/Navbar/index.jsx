"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

import { FaAlignLeft } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center p-1 fixed top-0 z-20 bg-slate-950`}
    >
      <div className="w-full flex justify-between mx-2 items-center max-w-7xl">
        <img src="/images/mylogo.png" alt="" className="h-10 w-40" />

        {/* md display? */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-purple-300" : "text-white"
              } hover: text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`}> {link.title}</a>
            </li>
          ))}
        </ul>
        {/* sm display? */}
        <div className=" md:hiiden ">
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
          )}{" "}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0  mx-4 my-2 min-w-[140px]  z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-center items-center flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-purple-300" : "text-white"
                  } font-bold cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}> {link.title}</a>
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
