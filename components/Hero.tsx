"use client";
import Image from "next/image";
import React from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
// import { motion } from "framer-";
import { motion } from "motion/react";
// import { Link } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative w-full h-dvh overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="hero image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="max-w-4xl text-center space-y-6"
        >
          {/* Small Intro Text */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-sm md:text-base tracking-wide uppercase text-[#C78A2E]"
          >
            Looking for a tutor?
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Start Your Global Education Journey With{" "}
            <span className="text-[#C78A2E]">Bridge360 Exchange</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto"
          >
            Connect with expert tutors worldwide and unlock opportunities
            through quality language education.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="
    flex flex-col
    sm:flex-row
    items-center
    justify-center
    gap-4
    pt-6
    w-full
  "
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="px-8 py-3 rounded-full bg-primary text-black font-semibold hover:bg-[#B17825] transition w-full sm:w-auto">
                Get Started
              </button>
            </Link>

            <Link href="/about" className="w-full sm:w-auto">
              <button className="px-8 py-3 rounded-full border border-[#C78A2E] text-[#C78A2E] hover:bg-[#C78A2E]/10 transition w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary"
      >
        <FaCircleArrowDown size={28} />
      </motion.div>
    </section>
  );
}

export default Hero;
