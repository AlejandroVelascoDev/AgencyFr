"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function About() {
const sectionRef = useRef<HTMLDivElement>(null);


useEffect(() => {
if (sectionRef.current) {
  gsap.fromTo(
  sectionRef.current,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
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
  className="min-h-screen flex flex-col justify-center items-center bg-black rounded-[70px]"
 >
  <div className="relative  rounded-2xl overflow-hidden shadow-lg ">
    {/* Overlay */}
    <div className="absolute  bg-black/50   flex flex-col justify-center items-center text-center ">
      <p className="text-black text-sm mb-2 ">(WORK)</p>
      <h2 className="text-white text-2xl font-bold mb-2 fade-in">Aiveo Website</h2>
      <p className="text-gray-300 text-sm ">Category: Web Design</p>

      {/* Botón */}
      <a
        href="./works/aiveo-website"
        className="mt-4 inline-block bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition fade-in"
      >
        View Project →
      </a>
    </div>
  </div>
</section>
  );
 }