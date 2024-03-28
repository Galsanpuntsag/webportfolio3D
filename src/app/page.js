"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Tech from "@/components/Tech";
import Works from "@/components/Work";

import { BrowserRouter } from "react-router-dom";

const Page = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/images/homeImage.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  const backgroundStyle2 = {
    backgroundImage: 'url("/images/circleBg.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  const backgroundStyle3 = {
    backgroundImage: 'url("/images/bgImage5.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center "
          style={backgroundStyle}
        >
          <Navbar />
          <Home />
        </div>
        <div
          className="overflow-hidden flex items-center justify-center"
          style={backgroundStyle2}
        >
          <About />
        </div>
        <div
          className="overflow-hidden flex items-center justify-center"
          style={backgroundStyle3}
        >
          <Tech />
        </div>
        <Works />
        {/* <Experience /> */}

        <Contact />
      </div>
    </BrowserRouter>
  );
};
export default Page;
