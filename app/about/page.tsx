"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeFeaturesSection from "@/components/HomeFeaturesSection";

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative w-full  h-[65vh] min-h-[440px] bg-black overflow-hidden">
        <Image
          src="/cta-bg.jpg"
          alt="About Bridge360 Exchange"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About <span className="text-primary">Bridge360 Exchange</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Connecting students and professionals worldwide through quality
              education and cultural exchange.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-28 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto px-6 space-y-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] leading-tight max-w-4xl mx-auto">
              We connect students and teachers through meaningful global
              education experiences.
            </h2>

            <div className="w-24 h-[2px] bg-primary mx-auto" />

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission is to make international education and cultural
              exchange accessible to everyone. We envision a global network of
              learners and tutors connected through trust, expertise, and
              opportunity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 text-left my-36">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-20"
            >
              <span className="text-primary font-medium tracking-wide">
                Our Mission
              </span>
              <h3 className="text-xl md:text-2xl font-medium leading-snug mt-5">
                To empower students worldwide by providing access to top-quality
                tutors and global learning programs.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-primary font-medium tracking-wide ">
                Our Vision
              </span>
              <h3 className="text-xl md:text-2xl font-medium leading-snug mt-5">
                To create a connected world where education knows no borders and
                learners reach their full potential.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE BREAK ================= */}
      <section className="section-padding">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.14)]">
          <Image
            src="/cta-bg.jpg"
            alt="Bridge360 global education"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="section-padding py-20 flex justify-center">
        <div className="w-full ">
          <HomeFeaturesSection />
          <WhyChooseUs />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <Image
              src="/cta-bg.jpg"
              alt="Get started with Bridge360"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 px-10 py-20 max-w-4xl">
              <span className="inline-block mb-5 text-xs font-semibold tracking-widest text-primary">
                GET STARTED
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
                Ready to Start Your Global Learning Journey?
              </h2>

              <p className="mt-6 text-white/80 max-w-2xl leading-relaxed">
                Connect with expert tutors and access international programs
                designed to help you learn, grow, and succeed globally.
              </p>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-[#b8923f] rounded-full px-10"
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
