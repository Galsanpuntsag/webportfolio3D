"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { Hometext } from "./Text";
import App from "./3d_image/App";
import { SectionWrapper } from "@/hoc";

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-evenly items-center overflow-hidden  ">
      <div className=" h-1/4 w-full">
        <Hometext />
      </div>
      <div className="flex-none h-1/2 w-full">
        <App />
      </div>
    </div>
  );
};
export default SectionWrapper(Home, "/");
