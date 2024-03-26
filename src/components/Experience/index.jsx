// "use client";
// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";

// import { motion } from "framer-motion";
// import "react-vertical-timeline-component/style.min.css";
// import { SectionWrapper } from "@/hoc";
// import { textVariant } from "@/utils/motion";
// import { styles } from "@/styles";

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: "/assets/company/starbucks.png",
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: "/assets/company/starbucks.png",
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: "/assets/company/starbucks.png",
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{ background: "white", color: "#ffffff" }}
//       contentArrowStyle={{ borderRight: "7px solid #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className="w-[60%] h-[60%] object-contain "
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className="text-white text-2xl font-bold">{experience.date}</h3>
//       </div>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()} className="">
//         <h1 className={styles.sectionSubText}>What i have do so far</h1>
//         <h1 className={`${styles.sectionHeadText}`}>Work Experience.</h1>
//         <div className="mt-20 flex bg-white flex-col">
//           <VerticalTimeline>
//             {experiences.map((experience, index) => (
//               <ExperienceCard key={index} experience={experience} />
//             ))}
//           </VerticalTimeline>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");
