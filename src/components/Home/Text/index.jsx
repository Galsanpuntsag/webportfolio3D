"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";

const downloadCV = () => {
  const url = "/images/myCV.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Your_CV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const Hometext = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#about");
  };

  return (
    <div className="flex flex-col  justify-center items-center gap-2 2xl:gap-5 ">
      <h2 className="text-3xl lg:text-4xl 2xl:text-8xl">
        Hi? I'm Galsanpuntsag.
      </h2>
      <h1 className="flex text-xl gap-2 lg:text-3xl">
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

      <p className="text-sm text-center w-80 min-w-80 lg:text-lg 2xl:w-96 2xl:text-2xl">
        I develop web applications. You can learn more about me by clicking the
        button below.
      </p>

      <div className="flex gap-4 mt-4">
        <button
          className="btn btn-active bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white"
          onClick={downloadCV}
        >
          Download CV
        </button>

        <button
          className="btn btn-active bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white w-28 hover:from-slate-950 hover:via-purple-950 hover:to-slate-950"
          onClick={handleClick}
        >
          About Me
        </button>
      </div>
    </div>
  );
};
