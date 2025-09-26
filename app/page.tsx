'use client'

import { motion, useScroll, useSpring, useTransform, cancelFrame, frame } from "framer-motion"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import Hero from '@/components/Hero'
import About from '@/components/About'
import Project1 from '@/components/Project1'
import Project2 from '@/components/Project2'
import AboutUs from '@/components/AboutUs'
// import Services from '@/components/Services'
// import Portfolio from '@/components/Portfolio'
// import Contact from '@/components/Contact'
import Navbar from '@/components/NavBar'
import "./globals.css"
import Contact from "@/components/Contact"


gsap.registerPlugin(ScrollTrigger)



export default function Page() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
  const lenisRef = useRef<LenisRef>(null)
  
    useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])




  return (
    <>
     <ReactLenis root options={{
     autoRaf: false ,
     duration: 1.2, 
     easing: (t) => 1 - Math.pow(2, -10 * t),
     lerp: 0.07, 
     }} ref={lenisRef} >
    <div className="fixed top-0 left-0 z-50 flex justify-start bg-white px-7 py-7 mt-8 ml-11 rounded-[46px] ">
        <button className="bg-white text-black font-semibold px-2 py-4 rounded-2xl transition-transform duration-200 hover:scale-105">
          HOME
        </button>
      </div>
      <div className="fixed top-0 right-0 z-50 flex justify-end bg-white px-4 py-4 mt-8 mr-11 rounded-[46px] ">
        <div className="bg-white rounded-2xl hover:scale-105 transition-transform duration-200">
          <img
            src="/qrPortfolio.png"
            alt="QR Code"
            className="w-20 h-20"
          />
        </div>
      </div>

  <div className="relative h-[400vh] p-6"> 
  <section className="sticky top-0 h-screen z-1 ">
    <Hero />
  </section>
  <section className="sticky top-0 h-screen z-1 pt-4 bg-white ">
    <About />
  </section>
  <section className="sticky top-0 h-screen z-1 pt-4">
    <Project1 />
   </section>
  <section className="sticky top-0 h-screen z-1 pt-4 ">
    <Project2 />
  </section>
   <section className="sticky top-0 h-screen z-1 pt-4 ">
    <AboutUs />
  </section>
   <section className="sticky top-0 h-screen z-0 pt-4 ">
    <Contact />
  </section>
 </div>

    
     </ReactLenis>
    </>
   
    // <Services />
    // <Portfolio />
    // <Contact />
  )
}


