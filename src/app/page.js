"use client";
import Image from "next/image";
import { Home as MyHome } from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { BrowserRouter } from "react-router-dom";
import { Home as CustumeHome } from "@/components/Home";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";

export default function Home() {
  const backgroundStyle = {
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
          <CustumeHome />
        </div>
        <About />
        <Experience />
        <Tech />
        <Contact />
      </div>
    </BrowserRouter>
  );
}
