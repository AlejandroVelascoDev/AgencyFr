"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "We craft responsive, high-performing websites that blend striking visuals with seamless functionality across every device.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "User-centric interfaces built on research and strategy, making every interaction intuitive, effortless and memorable.",
  },
  {
    number: "03",
    title: "Product Design",
    description:
      "From concept to market-ready solution, we turn bold ideas into polished digital products people love to use.",
  },
  {
    number: "04",
    title: "Branding & Identity",
    description:
      "Distinct visual identities and systems that tell your story and make your brand impossible to forget.",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that grow your reach, engage your audience and convert attention into real results.",
  },
  {
    number: "06",
    title: "Consultation & Strategy",
    description:
      "Strategic insights and guidance to help you navigate the digital landscape and align goals with effective solutions.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((el) => {
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
              start: "top 90%",
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
      id="services"
      className="min-h-screen flex items-center bg-white rounded-[70px] sm:rounded-[50px] overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p className="text-[#00d9ff] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
              (Services)
            </p>
            <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[0.95]">
              What we do best
            </h2>
          </div>
          <p className="text-gray-500 text-base sm:text-lg max-w-sm">
            A full-stack studio turning ambitious ideas into immersive digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card group flex flex-col gap-3 p-6 sm:p-7 rounded-3xl border border-gray-200 bg-gray-50 transition-colors duration-300 hover:bg-black"
            >
              <span className="text-[#00d9ff] text-2xl sm:text-3xl font-bold">
                {service.number}
              </span>
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
