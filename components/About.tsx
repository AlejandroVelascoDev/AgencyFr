"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform} from 'framer-motion'
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 1, y: 50 },
        {
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center bg-black rounded-[70px] sm:rounded-[50px] xs:rounded-[30px] relative overflow-hidden px-4 sm:px-6 md:px-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl w-full z-10">

        <div className="flex flex-col justify-center items-start text-left space-y-4 sm:space-y-6 order-2 lg:order-1">
          <p className="text-[#00d9ff] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            (WORK)
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Aiveo Website
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-full lg:max-w-md">
            Category: <span  className="text-white">Web Design</span>.  
            A project focused on creating sleek and functional interfaces that
            elevate the user experience.
          </p>
          <a
            href="../public/muckup.png"
            className="mt-4 sm:mt-6 inline-block bg-[#00d9ff] text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-md hover:scale-105 hover:bg-[#00c2e6] transition-transform duration-200 text-sm sm:text-base"
          >
            View Project →
          </a>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 bg-black rounded-xl sm:rounded-2xl shadow-lg overflow-hidden relative group">
            <img
               src="/muckup.png"
              alt="Aiveo Website Preview"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white font-semibold text-base sm:text-lg">Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}