"use client";

import React from "react";
import { useParams } from "next/navigation";
import { courses } from "@/lib/courses";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CallToActionSection from "@/components/CallToActionSection";

export default function CourseSlugPage() {
  const params = useParams();
  const { slug } = params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          Course not found
        </h1>
      </div>
    );
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] min-h-[440px] md:h-[80vh] overflow-hidden">
        {course.image && (
          <Image
            // src={course.image}
            src={"/cta-bg.jpg"}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            {course.title}
          </motion.h1>
          {course.shortDescription && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-4 text-gray-200 text-lg sm:text-xl max-w-2xl"
            >
              {course.shortDescription}
            </motion.p>
          )}
        </div>
      </section>

      {/* Course Details */}
      {/* Course Details */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-24">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <course.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111]">
                Program Overview
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              {course.shortDescription}
            </p>
          </div>

          {/* Right */}
          <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)]">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold text-[#111111]">
              What This Program Includes
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              Carefully structured services designed to guide you from
              application to successful placement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.sections.map((sub, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition">
                  <course.icon className="w-6 h-6 text-primary group-hover:text-black transition" />
                </div>

                <h4 className="text-xl font-semibold text-[#111111]">
                  {sub.title}
                </h4>

                {sub.description && (
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {sub.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <CallToActionSection />

      {/* Optional Banner / Info Section */}
    </main>
  );
}
