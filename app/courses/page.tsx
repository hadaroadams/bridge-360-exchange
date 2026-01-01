"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import CallToActionSection from "@/components/CallToActionSection";
import HomeCourseSection from "@/components/HomeCourseSection";

/* ================= DATA ================= */

const courses = [
  {
    code: "EN",
    title: "English Language Mastery",
    subtitle: "Beginner – Advanced",
  },
  {
    code: "IE",
    title: "IELTS Exam Preparation",
    subtitle: "Academic & General",
  },
  {
    code: "TO",
    title: "TOEFL Preparation",
    subtitle: "University Admission",
  },
  {
    code: "VI",
    title: "Visa Interview Coaching",
    subtitle: "USA / UK / Schengen",
  },
  {
    code: "CV",
    title: "My Perfect CV",
    subtitle: "Global Job Ready",
  },
  {
    code: "EX",
    title: "International Exams",
    subtitle: "SAT • GRE • GMAT",
  },
  {
    code: "CA",
    title: "Career Readiness",
    subtitle: "Work Abroad Skills",
  },
  {
    code: "LN",
    title: "Language Tutoring",
    subtitle: "1-on-1 Global Tutors",
  },
];

/* ================= ANIMATION VARIANTS ================= */

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= PAGE ================= */

export default function CoursesPage() {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative  h-[65vh] min-h-[440px] bg-black overflow-hidden">
        <Image
          src="/cta-bg.jpg"
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
              Learn With{" "}
              <span className="text-[#C78A2E]">Global Standards</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Language mastery, exam preparation, and career programs designed
              to open international opportunities.
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
