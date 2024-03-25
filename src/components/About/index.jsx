"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

const About = () => {
  return (
    <div className="flex flex-col bg-black w-screen h-screen text-red-500">
      <h>Introduction</h>
      <h>Overview.</h>
      <h>
        I'm a skilled software developer with experience TypeScript and JavaS
        cript, and expertise in frameworks like React, Node.js and Three.js. i'm
        a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve-realworld
        problems.Let's work together to bring your ideas to life!
      </h>
      <motion.div
        variants={fadeIn("right", "spring", "0.5 * index, 0.75")}
        className="w-full green-pink-gradient p-1 rounded-md shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-xl py-5 px-12 min-h-[280px] flex flex-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

// import React from "react";
// import FrontEnd from "./frontend";
// import Backend from "./backend";

// import { IoCodeSlashSharp } from "react-icons/io5";
// import { HiMiniServerStack } from "react-icons/hi2";

// const About = () => {
//   return (
//     <div className="h-screen w-screen items-center justify-center overflow-hidden">
//       <h1 className="flex ml-14 text-3xl text-ellipsis my-2 gap-2">
//         <IoCodeSlashSharp />
//         FrontEnd
//       </h1>
//       <FrontEnd />
//       <h1 className="flex ml-14 text-3xl text-ellipsis my-2 gap-2">
//         <HiMiniServerStack />
//         BackEnd
//       </h1>
//       <Backend />
//     </div>
//   );
// };

// export default About;
