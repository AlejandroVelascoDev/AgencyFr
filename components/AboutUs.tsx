"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform} from 'framer-motion'
gsap.registerPlugin(ScrollTrigger);

export default function Project3() {
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
     <section className="min-h-screen flex flex-col px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 ">
      <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24 md:mb-32 lg:mb-40 pt-10">
       
        <div className="flex flex-col gap-4 sm:gap-6  justify-center">
          <div className="text-black flex flex-col gap-3 sm:gap-4 pt-6">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl font-bold leading-tight">
              About Us
            </p>
         
          </div>
          
             
          <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#00bfff] rounded-xl sm:rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <motion.div
              className="flex flex-col items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
            </motion.div>
          </motion.div>
        </div>
          
      </div>
      <div className="text-black  gap-3 sm:gap-4 pt-6  mt-10 flex flex-col justify-center items-start text-left space-y-4 sm:space-y-6 order-2 lg:order-1">
           <p className="text-3xl  font-bold sm:text-lg md:text-xl lg:text-base xl:text-lg text-black leading-relaxed justify-end items-start">
              At Agentic, we are a team of dedicated creatives driven by the desire to redefine online experiences.
               Our journey began with a shared commitment to excellence in web design,
                development, UI/UX, and product design.
            </p>
         
          </div>
    </section>
  );
}