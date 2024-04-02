"usew client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/styles";

const projects = [
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
        name: "tailwind",
        color: "text-pink-500",
      },
    ],
    image: "/assets/Income.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Delivery",
    description:
      "Web application that enables users to order food. User need to save your location and information. Then User can order food. ",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "restapi",
        color: "text-green-400",
      },
      {
        name: "scss",
        color: "text-pink-500",
      },
    ],
    image: "/assets/food.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-400",
      },
      {
        name: "supabase",
        color: "text-green-400",
      },
      {
        name: "css",
        color: "text-pink-500",
      },
    ],
    image: "/assets/nomad.png",
    source_code_link: "https://github.com/",
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
        name: "supabase",
        color: "text-green-400",
      },
      {
        name: "css",
        color: "text-pink-500",
      },
    ],
    image: "/assets/admin.png",
    source_code_link: "https://github.com/",
  },
];
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      key={project.name}
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
            src={project.image}
            alt={project.name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={project.source_code_link}
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
          <h3 className="font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-[14px]">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[18px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-2xl flex flex-col">
        <h1 className={styles.sectionSubText}>My work</h1>
        <h1 className={`${styles.sectionHeadText}`}>Projects.</h1>
      </motion.div>
      <div className="w-full flex">
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
      <div className="mt-20 flex flex-wrap  gap-7">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
