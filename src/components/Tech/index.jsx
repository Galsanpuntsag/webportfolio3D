"use client";
import React from "react";
import { SectionWrapper } from "@/hoc";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const technologies = [
  {
    name: "HTML 5",
    icon: "/assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "/assets/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
  },
  {
    name: "figma",
    icon: "/assets/tech/figma.png",
  },
  { name: "QraphQL", icon: "/assets/tech/graphql.jpeg" },
  { name: "Jest", icon: "/assets/tech/jest.jpeg" },
];

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 90, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.5, // 2 = 200%, 1.5 = 150%, etc..
  speed: 100, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const TechCard = ({ name, icon, index }) => {
  return (
    <Tilt
      options={defaultOptions}
      className=" w-[60px] h-[60px] lg:w-28 lg:h-28"
    >
      <motion.div
        key={index}
        variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
        className="font-bold gap-3"
      >
        <img src={icon} alt="" />
        {name}
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex justify-start">
        <motion.div variants={textVariant()}>
          <h1 className="font-bold text-3xl text-start">My hard skills</h1>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-around items-center max-w-3xl m-5 gap-14 ">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
