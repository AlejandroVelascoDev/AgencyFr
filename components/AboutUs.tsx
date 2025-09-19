"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useSpring} from 'framer-motion'
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (Ref.current) {
      gsap.fromTo(
        Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 0.3,
          y: 0,
          duration: 0.2,
          scrollTrigger: {
            trigger: Ref.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

useEffect(() => {
  gsap.utils.toArray<HTMLElement>(".box").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, []);


  const { scrollYProgress } = useScroll({
    target: Ref, 
    offset: ["0.6 1", "1 1"], 
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [50, 0]) 
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [0.8, 1]) 
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [0, 1]) 

  const y = useSpring(yRaw, { stiffness: 60, damping: 15 })
  const scale = useSpring(scaleRaw, { stiffness: 60, damping: 15 })
  const opacity = useSpring(opacityRaw, { stiffness: 60, damping: 15 })


  return (
     <section className="min-h-screen flex flex-col px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28  gap-10
     ">
      <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24 md:mb-32 lg:mb-40 pt-10">
       
        <div className="flex flex-col gap-4 sm:gap-6  justify-center relative pr-20">
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
        <motion.div
        ref={Ref}
        style={{ y, scale, opacity }}
        className="text-black gap-3 sm:gap-4 pt-6 mt-10 pl-20 flex flex-col justify-start items-end space-y-4 sm:space-y-6 order-2 lg:order-1"
        > 
       <p className="text-[48px] font-semibold text-black leading-relaxed  max-w-4xl">
       At Agentic, we are a team of dedicated creatives driven by the desire to
       redefine online experiences. Our journey began with a shared commitment
       to excellence in web design, development, UI/UX, and product design.
      </p>
      </motion.div>
     
    
      </div>
      <div className="flex justify-center items-center flex-1 relative">
           <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#00bfff] rounded-xl sm:rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <motion.div
              className="flex flex-col items-start justify-end gap-2 pr-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
            </motion.div>
          </motion.div>
      <motion.div
        className=" box text-black gap-3 sm:gap-4 pt-6 mt-10 pl-40 flex flex-col justify-start items-end space-y-4 sm:space-y-6 order-2 lg:order-1"
        > 
     
       <p className="text-[48px]  box font-semibold text-black leading-relaxed  max-w-4xl">
       What sets us apart is not just our technical expertise but our unwavering dedication to bringing your digital vision to life.
      We believe in the power of thoughtful design and seamless functionality, 
      and our portfolio reflects our commitment to creating immersive and engaging digital solutions.
      </p>
      </motion.div>
       
      </div>
           <div className="flex justify-center items-center flex-1 relative">
           <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#00bfff] rounded-xl sm:rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <motion.div
              className="flex flex-col items-start justify-end gap-2 pr-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
            </motion.div>
          </motion.div>
      <motion.div
        className="box text-black gap-3 sm:gap-4 pt-6 mt-10 pl-40 flex flex-col justify-start items-end space-y-4 sm:space-y-6 order-2 lg:order-1"
        > 
     
       <p className="text-[48px]  box font-semibold text-black leading-relaxed  max-w-4xl">
       Every project we undertake is a unique opportunity to showcase our skills and exceed expectations. From sleek websites to user-centric interfaces, our goal is to make your brand stand out in the digital realm.
       At Agentic, we don't just build websites; we craft digital experiences that leave a lasting impact.
      </p>
      </motion.div>
       
      </div>
    </section>
  );
 }