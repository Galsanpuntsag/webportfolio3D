"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../../utils/motion";
import { web, mobile, backend, creator } from "../../../public/assets";
import { Asset } from "next/font/google";

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
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        key={index}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-2/3 p-1 rounded-md shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-gradient-to-br from-purple-950 via-black to-slate-800 rounded-3xl py-5 px-12 main-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt="" className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const backgroundStyle2 = {
    backgroundImage: 'url("/images/circleBg.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div
      className="flex flex-col justify-evenly items-center "
      style={backgroundStyle2}
    >
      <motion.div variants={textVariant()}>
        <h1 className="text-7xl">Introduction Overview.</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-white  max-w-xl text-xl shadow-2xl font-miss bg-black p-4 rounded-2xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="flex w-full ml-24 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;

// <Tilt className="xs:w-[250px] w-full">
//         {services.map((ser, index) => (
//           <motion.div
//             key={index}
//             variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//             className="w-2/3 p-1 rounded-md shadow-card"
//           >
//             <div className="rounded-2xl py-5 px-12 min-h-[280px] bg-purple-600 flex flex-evenly items-center flex-col">
//               <img src={ser.icon} alt="" className="w-16 h-16 object-contain" />
//               <h3 className="text-white text-[20px] font-bold text-center">
//                 {ser.title}
//               </h3>
//             </div>
//           </motion.div>
//         ))}
//       </Tilt>
