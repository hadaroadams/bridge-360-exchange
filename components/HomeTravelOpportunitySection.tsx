"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { travel_opportunity } from "@/lib/travel-opportunities";
// import { courses } from "@/data/courses"; // Replace programs with your detailed array

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomeTravelOpportunitySection() {
  return (
    <section className="bg-[#F7F7F7] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24 px-2 sm:px-0"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-[10px] sm:text-xs font-semibold tracking-widest text-primary">
            AVAILABLE INTERNATIONAL TRAVEL OPPORTUNITIES
          </span>

          <h2 className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight text-[#111111]">
            Global Opportunities
            <br className="hidden sm:block" />{" "}
            <span className="text-primary">Tailored for You</span>
          </h2>

          <p className="mt-5 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            From international study programs and cultural exchanges to
            comprehensive visa support and professional preparation, Bridge360
            Exchange connects you to trusted global pathways that meet your
            Travel objectives
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {travel_opportunity.map((item) => (
            <motion.article
              key={item.slug}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition"
            >
              {/* Icon / Code */}
              <div className="flex justify-center mb-6">
                {item.icon && <item.icon className="w-10 h-10 text-primary" />}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#111111] leading-snug">
                {item.title}
              </h3>

              {/* Subtitle / Short Description */}
              {item.shortDescription && (
                <p className="mt-3 text-sm text-gray-500">
                  {item.shortDescription}
                </p>
              )}

              {/* Link to Course Page */}
              <Link
                // href={``}
                href={`/courses/${item.slug}`}
                className="mt-5 inline-block text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
