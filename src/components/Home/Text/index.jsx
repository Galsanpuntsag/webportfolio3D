"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export const Hometext = () => {
  return (
    <div className="flex flex-col justify-center text-purple-300 items-center gap-2 ">
      <h2 className="text-4xl">Hi? I'm Galsanpuntsag.</h2>
      <h1 className="flex text-xl gap-2">
        I'm a
        <Typewriter
          options={{
            strings: [
              " Web Developer... ",
              "Fullstack Developer... ",
              "Next.js Developer...",
              "React Native Developer...",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <p className="text-xl">
        You can learn more about me by clicking the button below.
      </p>

      <div className="flex gap-4 mt-4">
        <button className="btn btn-active bg-gradient-to-tr from-blue-900 to-purple-900 text-white">
          Download CV
        </button>

        <button className="btn btn-active bg-gradient-to-tr  from-blue-900 to-purple-900 text-white w-28">
          About Me
        </button>
      </div>
    </div>
  );
};
