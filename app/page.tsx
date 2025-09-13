'use client'

import { motion, useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Project1 from '@/components/Project1'
import Project2 from '@/components/Project2'
import Project3 from '@/components/Proyect3'
// import Services from '@/components/Services'
// import Portfolio from '@/components/Portfolio'
// import Contact from '@/components/Contact'
import Navbar from '@/components/NavBar'
import "./globals.css"


gsap.registerPlugin(ScrollTrigger)



export default function Page() {
  const titleRef = useRef<HTMLHeadingElement>(null)
   const { scrollYProgress } = useScroll();
   const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);



  return (
    <>
  <div className="fixed top-0 left-0 z-50 flex justify-start bg-white px-7 py-7 mt-6 ml-12 rounded-[46px] ">
        <button className="bg-white text-black font-semibold px-2 py-4 rounded-2xl transition-transform duration-200 hover:scale-105">
          HOME
        </button>
      </div>
      <div className="fixed top-0 right-0 z-50 flex justify-end bg-white px-4 py-4 mt-6 mr-12 rounded-[46px] ">
        <div className="bg-white rounded-2xl hover:scale-105 transition-transform duration-200">
          <img
            src="/qrPortfolio.png"
            alt="QR Code"
            className="w-20 h-20"
          />
        </div>
      </div>

  <div className="relative h-[500vh] p-6"> 
  <section className="sticky top-0 h-screen z-0">
    <Hero />
  </section>
 <section className="sticky top-0 h-screen z-0">
    <About />
  </section>
 <section className="sticky top-0 h-screen z-0">
    <Project1 />
  </section>

</div>
     
    </>
   
    // <Services />
    // <Portfolio />
    // <Contact />
  )
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white  p-6 rounded-xl shadow-lg border border-gray-200 "
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{title}</h3>
      <p className="text-black dark:text-gray-300">{description}</p>
    </motion.div>
  )
}
//function scroll sections
function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="h-screen bg-black sticky rounded-[70px] mt-[-100px] pt-10"
    >
      {children}
    </motion.section>
  );
}