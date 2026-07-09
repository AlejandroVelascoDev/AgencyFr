"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="min-h-screen flex flex-col justify-between bg-black rounded-[70px] sm:rounded-[50px] overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 sm:py-16"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 sm:gap-12">
        {/* Let's connect */}
        <div className="flex flex-col gap-4">
          <p className="text-[#00d9ff] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            (Let&apos;s connect)
          </p>
          <a
            href="mailto:hello@dalexdev.com"
            className="text-white font-bold leading-[0.95] text-[clamp(32px,6vw,64px)] break-words hover:text-[#00d9ff] transition-colors duration-300"
          >
            hello@dalexdev.com
          </a>
          <motion.a
            href="mailto:hello@dalexdev.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 inline-flex w-fit items-center gap-2 bg-[#00d9ff] text-black font-bold px-6 py-3 rounded-2xl text-sm sm:text-base"
          >
            Start a project →
          </motion.a>
        </div>

        {/* Follow us */}
        <div className="flex flex-col gap-4">
          <p className="text-[#00d9ff] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            (Follow us)
          </p>
          <ul className="flex flex-col gap-3 text-gray-300 text-base sm:text-lg">
            {["X Network", "Instagram", "LinkedIn", "Dribbble"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <p className="text-[#00d9ff] uppercase tracking-widest text-xs sm:text-sm font-semibold">
            (Legal)
          </p>
          <ul className="flex flex-col gap-3 text-gray-300 text-base sm:text-lg">
            {["Privacy Policy", "Cookie Policy", "Licensing"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DALEXDEV. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">Elevating Digital Excellence.</p>
        </div>
        <div className="mt-6 leading-[0.8] text-[#00d9ff] font-[900] text-[clamp(60px,14vw,320px)] text-center select-none">
          DALEXDEV
        </div>
      </div>
    </footer>
  );
}
