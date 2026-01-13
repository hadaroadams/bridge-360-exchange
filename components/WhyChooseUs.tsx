"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function WhyChooseUs() {
  return (
    <div>
      <span
        className="
              inline-block
              mb-4
              text-xs font-semibold tracking-widest
              text-primary
            "
      >
        WHY US
      </span>

      <h3
        className="
              text-2xl sm:text-3xl
              font-semibold
              leading-tight
              text-[#111111]
              max-w-md
            "
      >
        Learn more about available travel opportunities and take full advantage
      </h3>

      {/* Accordion */}
      <Accordion type="single" collapsible className="mt-5 space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium text-[#111111] ">
            Personalized Guidance
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-sm leading-relaxed">
            Every student receives tailored advice based on their study goals,
            budget, and preferred country.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-medium text-[#111111]">
            Trusted Expert Support
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-sm leading-relaxed">
            Get assistance from experienced tutors and advisors who understand
            admissions, visas, and interviews.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-medium text-[#111111]">
            Fast & Flexible Process
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-sm leading-relaxed">
            We simplify every step—from application to visa—saving you time and
            reducing stress.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default WhyChooseUs;
