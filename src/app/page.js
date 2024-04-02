"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Tech from "@/components/Tech";
import Works from "@/components/Work";

import { BrowserRouter } from "react-router-dom";

const Page = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/images/Neon.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  const backgroundStyle2 = {
    backgroundImage: 'url("/images/bgImageTech.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  const backgroundStyle3 = {
    backgroundImage: 'url("/images/tsats.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  const backgroundStyle4 = {
    backgroundImage: 'url("/images/effect.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  const backgroundStyle5 = {
    backgroundImage: 'url("/images/homeImage.jpeg")',
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
          className="overflow-y-scroll flex items-center justify-center"
          style={backgroundStyle4}
        >
          <Works />
        </div>
        <div
          className="overflow-hidden flex items-center justify-center"
          style={backgroundStyle3}
        >
          <Tech />
        </div>

        <div style={backgroundStyle5}>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Page;
