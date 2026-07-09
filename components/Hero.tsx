"use client";

import { motion } from "framer-motion";
import { ChevronDown, HomeIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
      <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24 md:mb-32 lg:mb-40">
        <div className="space-y-1 sm:space-y-2 lg:w-[70%]">
          {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
            <div
              key={item}
              className="font-sans font-bold text-[clamp(40px,12vw,110px)] leading-[0.8em] text-black"
            >
              <div className="relative group w-full cursor-pointer overflow-hidden">
                <span className="absolute inset-0 bg-[#00bfff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                <motion.span
                  whileHover={{ scale: 1.15, x: 24, y: -6 }}
                  whileTap={{ scale: 1.05 }}
                  className="relative z-10 font-sans font-bold text-[clamp(40px,12vw,110px)] leading-[0.8em] 
                             text-black group-hover:text-white transition-colors duration-500 
                             inline-block"
                >
                  {item}
                </motion.span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 lg:w-[30%] justify-center">
          <div className="text-black flex flex-col gap-3 sm:gap-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl font-bold leading-tight">
              Elevating Digital Excellence.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-base xl:text-lg text-black leading-relaxed">
              We specialize in web design, development, UI/UX, and product
              design. Transform your online presence with our creative
              expertise.
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
      <div className="flex justify-center items-center flex-1">
        <div
          className="font-[900] leading-[0.8em] text-[#00d9ff] 
                     text-[clamp(60px,15vw,300px)] text-center"
        >
          DALEXDEV®
        </div>
      </div>
    </section>
  );
}
