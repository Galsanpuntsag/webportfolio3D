"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "@/styles";

import { SectionWrapper } from "@/hoc";

const services = [
  {
    title: "Web Developer",
    icon: "/assets/web.png",
  },
  {
    title: "React Native Developer",
    icon: "/assets/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "/assets/backend.png",
  },
  {
    title: "Content Creator",
    icon: "/assets/creator.png",
  },
];

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 1 * index, 0.75)}
        className="w-full green-pink-grtadient  p-1 rounded-md shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-gradient-to-br from-purple-950 via-black to-slate-800 rounded-3xl min-h-[100px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt="" className="w-12 h-12 object-contain" />

          <h3 className="text-white text-md font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden gap-1 sm:gap-5">
      <motion.div variants={textVariant()}>
        <h1 className="text-purple-300 text-lg">Introduction</h1>
        <h1 className={`${styles.sectionHeadText} text-4xl 2xl:text-7xl`}>
          Overview.
        </h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" text-white w-10/12 max-w-3xl text-md shadow-2xl"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="w-11/12">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
