"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/styles";
import Link from "next/link";

const projects = [
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "typescript",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind css",
        color: "text-pink-500",
      },
    ],
    image: "/assets/nomad.png",
    link: "https://nomad-tour-front.vercel.app/",
    source_code_link: "https://github.com/Galsanpuntsag",
  },

  {
    name: "Food Delivery",
    description:
      "Web application that enables users to order food. User need to save your location and information. Then User can order food. ",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "mui",
        color: "text-pink-500",
      },
    ],
    image: "/assets/food.png",
    link: "https://food-application-irli-4d4wvxz1a-galsanpuntsags-projects.vercel.app/home",
    source_code_link: "https://github.com/Galsanpuntsag",
  },
  {
    name: "Income Expence tracker",
    description:
      "Web-based platform that allows users to control income and expense. Also, User can see from chart that your income and expence balance this a week, a year and a week. ",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind css",
        color: "text-pink-500",
      },
    ],
    image: "/assets/Income.png",
    link: "https://income-expence-tracker-46cj-gc1kzu00p-galsanpuntsag.vercel.app/login",
    source_code_link: "https://github.com/Galsanpuntsag",
  },
  {
    name: "Admin Page",
    description:
      "Admin web application that enables super admin to control orders, add food and categories. Additionally, admins can change the status of orders from 'progressing' to 'delivery'.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "mui",
        color: "text-pink-500",
      },
    ],
    image: "/assets/admin.png",
    link: "https://github.com/Galsanpuntsag",
    source_code_link: "https://github.com/Galsanpuntsag",
  },
];
const ProjectCard = ({ project, index }) => {
  return (
    <div className="flex">
      <motion.div
        key={project?.name}
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="p-5 rounded-2xl bg-gray-800 h-full sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[200px]">
            <img
              src={project?.image}
              alt={project?.name}
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <a
                href={project?.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src="/assets/github.png"
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-2xl">{project.name}</h3>
            <p className="my-2 text-[14px]">{project.description}</p>
            <Link
              className="text-orange-500 hover:underline font-bold"
              href={project?.link}
            >
              View Project
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project?.tags.map((tag) => (
              <p key={tag.name} className={`text-[18px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex flex-col">
        <motion.div variants={textVariant()}>
          <h1 className="font-bold text-3xl">My Projects</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl leading-8 2xl:text-2xl"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each projects is briefly descriped
          with links to code repositories and live demos in it . It reflects my
          ability to solve complex problems, work width different technologiesh,
          and manage projects effetively.
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center items-center m-5 max-w-3xl gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Work, "work");
