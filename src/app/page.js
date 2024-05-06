"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Tech from "@/components/Tech";
import Works from "@/components/Work";

const Page = () => {
  return (
    <div className="relative z-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center  bg-slate-900  ">
        <Navbar />
        <Home />
      </div>
      <div className="flex items-center justify-center  bg-slate-900  w-screen h-screen">
        <About />
      </div>
      <div className=" flex justify-center items-center bg-slate-900">
        <Works />
      </div>
      <div className="flex items-center justify-center bg-slate-900 w-screen h-screen">
        <Tech />
      </div>

      <div className="flex items-center justify-center bg-slate-900 w-screen h-screen">
        <Contact />
      </div>
    </div>
  );
};
export default Page;
