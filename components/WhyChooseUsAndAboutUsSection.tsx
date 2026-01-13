"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import WhyChooseUs from "./WhyChooseUs";
import Link from "next/link";

function WhyChooseUsAndAboutUsSection() {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            src="/bg-07.jpg" // or .svg
            alt=""
            fill
            className="object-cover opacity-[0.6]"
            priority={false}
          />
        </div>
      </div>

      <div className="relative not-only:max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start z-20">
        {/* LEFT — Why Choose Us */}
        <WhyChooseUs />

        {/* RIGHT — About Us */}
        <div>
          <span
            className="
              inline-block
              mb-4
              text-xs font-semibold tracking-widest
              text-primary
            "
          >
            ABOUT US
          </span>

          <h3
            className="
              text-3xl sm:text-5xl
              font-semibold
              leading-tight
              text-[#111111]
            "
          >
            “Stuck in your application process? Or need help with an existing
            process or application.”
          </h3>

          <p
            className="
              mt-8
              text-gray-600
              text-sm sm:text-base
              leading-relaxed
              max-w-lg
            "
          >
            Let Bridge360 Exchange & Travels step in—our experts simplify every
            stage, remove the stress, and guide you confidently to success.
          </p>

          <Button className="mt-10 px-8" asChild>
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsAndAboutUsSection;
