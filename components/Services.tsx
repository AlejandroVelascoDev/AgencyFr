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
      "Sites built to load fast and hold up under real traffic, not just look good in the mockup.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We map how people actually move through your product, then design interfaces that stay out of the way.",
  },
  {
    number: "03",
    title: "Product Design",
    description:
      "From the first wireframe to a shipped release, we carry the idea through the stretch where most teams stall.",
  },
  {
    number: "04",
    title: "Branding & Identity",
    description:
      "A logo, a voice, and a set of rules your team can follow without asking us every time.",
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Campaigns judged by pipeline and revenue, not likes — measured and adjusted until the number moves.",
  },
  {
    number: "06",
    title: "Consultation & Strategy",
    description:
      "An outside read on your roadmap before you spend the budget, not after.",
  },
];

export default function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-row",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".services-rule",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: ".services-rule",
            start: "top 90%",
          },
        },
      );

      const setupPin = () => {
        const wrapper = wrapperRef.current;
        const inner = innerRef.current;
        if (!wrapper || !inner) return;

        const distance = Math.max(inner.scrollHeight - window.innerHeight, 0);
        if (distance <= 0) return;

        gsap.to(inner, {
          y: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });
      };

      setupPin();
    }, wrapperRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="services"
      className="relative h-screen overflow-hidden bg-white rounded-[70px] sm:rounded-[50px]"
    >
      <div
        ref={innerRef}
        className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 will-change-transform"
      >
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
            <div>
              <p className="flex items-center gap-2 text-gray-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00d9ff]" />
                Capabilities — 06
              </p>
              <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] max-w-2xl">
                Everything a launch needs, under one roof.
              </h2>
            </div>
            <p className="text-gray-500 text-base sm:text-lg max-w-xs md:text-right leading-relaxed">
              No handoffs between five different vendors: one team owns design,
              development and growth, start to finish.
            </p>
          </div>

          <div className="services-rule h-px w-full bg-black/10 mb-2 origin-left" />

          <div className="border-t border-black/10">
            {services.map((service) => (
              <div
                key={service.number}
                className="service-row group relative border-b border-black/10 grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1.1fr_1fr_2rem] items-start md:items-center gap-x-4 md:gap-x-10 py-7 sm:py-8 md:py-10 px-1 sm:px-2 transition-colors duration-500 hover:bg-black overflow-hidden"
              >
                <span className="pointer-events-none select-none absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/[0.06] text-[7rem] md:text-[10rem] font-black leading-none opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out">
                  {service.number}
                </span>

                <span className="relative font-mono text-sm sm:text-base text-gray-400 group-hover:text-[#00d9ff] transition-colors duration-500">
                  {service.number}
                </span>

                <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 group-hover:text-white transition-all duration-500 md:group-hover:translate-x-3 will-change-transform">
                  {service.title}
                </h3>

                <p className="relative hidden md:block text-gray-400 group-hover:text-gray-300 text-sm lg:text-base leading-relaxed max-w-sm opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                  {service.description}
                </p>

                <p className="md:hidden col-span-2 relative text-gray-500 text-sm leading-relaxed mt-1">
                  {service.description}
                </p>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative hidden md:block w-6 h-6 text-white/0 group-hover:text-[#00d9ff] -rotate-45 group-hover:rotate-0 transition-all duration-500 justify-self-end"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="absolute left-0 bottom-0 h-px bg-[#00d9ff] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
