"use client";

import React from "react";
import { Hometext } from "./Text";
import App from "./3d_image/App";
import { SectionWrapper } from "@/hoc";

const Home = () => {
  return (
    <div className="flex h-screen w-screen justify-evenly items-center overflow-hidden  ">
      <div className="flex-1 h-screen">
        <App />
      </div>
      <div className="flex-1">
        <Hometext />
      </div>
    </div>
  );
};
export default SectionWrapper(Home, "/");
