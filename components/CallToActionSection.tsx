"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function CallToActionSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA CARD */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            shadow-[0_30px_80px_rgba(0,0,0,0.15)]
          "
        >
          {/* Background Image (ONLY FOR THIS DIV) */}
          <Image
            src="/cta-bg.jpg"
            alt="CTA background"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div
            className="
              relative z-10
              px-8 py-16 sm:px-16
              max-w-3xl
            "
          >
            <span
              className="
                inline-block mb-4
                text-xs font-semibold tracking-widest
                text-primary
              "
            >
              GET STARTED
            </span>

            <h2
              className="
                text-3xl sm:text-4xl md:text-5xl
                font-semibold
                leading-tight
                text-white
              "
            >
              Ready to Start Your Global Learning Journey?
            </h2>

            <p
              className="
                mt-6
                text-sm sm:text-base
                text-white/80
                leading-relaxed
                max-w-xl
              "
            >
              Connect with expert tutors and access international programs
              designed to help you learn, grow, and succeed globally.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-[#b8923f] rounded-full"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
