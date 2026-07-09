"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  "At DALEXDEV, we are a team of dedicated creatives driven by the desire to redefine online experiences through web design, development, UI/UX and product design.",
  "We believe in the power of thoughtful design and seamless functionality. Our portfolio reflects a commitment to building immersive, engaging digital solutions.",
  "Every project is a unique opportunity to exceed expectations. We don't just build websites — we craft digital experiences that leave a lasting impact.",
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-line").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="h-screen flex flex-col justify-center bg-white overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-8 sm:gap-10">
        <div className="flex items-center gap-4">
          <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-[#00d9ff] rounded-xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
          <p className="text-[#00b3d9] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            (About Us)
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="about-line text-black font-semibold leading-[1.15] text-[clamp(20px,3.2vw,40px)] max-w-5xl text-balance"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
