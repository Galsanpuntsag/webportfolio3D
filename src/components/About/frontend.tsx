"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { FaGithub, FaDatabase } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { PiDesktopTowerBold } from "react-icons/pi";
import { FaNode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { PiFileHtmlBold } from "react-icons/pi";

const boxs = [
  {
    icon: <FaGithub />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
  {
    icon: <FaDatabase />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
  {
    icon: <AiOutlineGlobal />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
  {
    icon: <PiDesktopTowerBold />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
  {
    icon: <FaNode />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
  {
    icon: <TbBrandJavascript />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
  {
    icon: <PiFileHtmlBold />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
  {
    icon: <TbBrandJavascript />,
    name: "Git version controll",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tempore neque fugit quas? Officiis minus a quas dicta, modi dolorem unde ea, nobis labore harum quae aut necessitatibus consequuntur repellat?",
  },
];

const FrontEnd = () => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      cssMode={true}
      autoplay={{ delay: 10000 }}
    >
      {boxs.map((box, index) => (
        <SwiperSlide key={index}>
          <div className="card card-compact bg-gradient-to-tr from-blue-900 to-purple-900 shadow-2xl w-64 p-5  h-30 ml-14 ">
            <div className="w-52 text-3xl">{box.icon}</div>
            <div className="text-2xl my-2">{box.name}</div>
            <div className="text-[14px]">{box.desc}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FrontEnd;
