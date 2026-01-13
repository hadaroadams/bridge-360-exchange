"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import CallToActionSection from "@/components/CallToActionSection";
import HomeCourseSection from "@/components/HomeTravelOpportunitySection";

export default function CoursesPage() {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative  h-[65vh] min-h-[440px] bg-black overflow-hidden">
        <Image
          src="/logo-dark.jpeg"
          alt="Courses"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Visa Opportunities That Meet Your{" "}
              <span className="text-[#C78A2E]">
                International Travel Intent
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Want to study or work abroach, Bridge360 Exchange & Travels have
              proven methods that works for everyon
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}

      <HomeCourseSection />

      {/* ================= CTA ================= */}
      <CallToActionSection />
    </main>
  );
}
