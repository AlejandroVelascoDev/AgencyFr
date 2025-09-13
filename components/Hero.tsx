"use client";

import { motion } from "framer-motion";
import { ChevronDown, HomeIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col m-28 ">
      
       
      {/* Contenedor flex izquierda (menú) + derecha (subtítulo y extras) */}
      <div className="flex flex-col md:flex-row w-full px-10 gap-4 mb-40">
        {/* Menú */}
         <div className="space-y-2 md:w-[70%]">
          {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
          <div
          key={item}
          className="font-sans font-bold text-[110px] leading-[0.8em] text-black"
          >
        <div className="relative group w-full cursor-pointer overflow-hidden">
        <span className="absolute inset-0 bg-[#00bfff] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
        <motion.span
          whileHover={{ scale: 1.23, x: 30, y: -10 }}
          whileTap={{ scale: 1.15 }}
          className="relative z-10 font-sans font-bold text-[110px] leading-[0.8em] 
                     text-black group-hover:text-white transition-colors duration-500 
                     inline-block"
           >
           {item}
           </motion.span>
          </div>
         </div>
         ))}
       </div>
        <div className="flex flex-col gap-6 md:w-[30%] justify-center">
          <div className="text-black flex flex-col gap-4">
            <p className="text-3xl md:text-xl font-bold leading-tight">
              Elevating Digital Excellence.
            </p>
            <p className="text-lg md:text-xl text-black">
              We specialize in web design, development, UI/UX, and product
              design. Transform your online presence with our creative
              expertise.
            </p>
          </div>


          <motion.div
            className="w-12 h-12 bg-[#00bfff] rounded-2xl"
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
     <div className="flex justify-center items-center">
    <div
      className="font-[900] leading-[0.8em] text-[#00d9ff] tracking-tight 
             text-[clamp(100px,20vw,300px)]"
     >
     DALEXDEV®
    </div>
      </div>
    </section>
    
  );
}
