"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { Hometext } from "./Text";
import App from "./3d_image/App";

export const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center overflow-hidden  ">
      <div className="h-1/4 w-full">
        <Hometext />
      </div>
      <div className=" h-1/2 w-full">
        <App />
      </div>
    </div>
  );
};
