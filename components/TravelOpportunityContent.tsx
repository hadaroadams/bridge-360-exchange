"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { travel_opportunity_details } from "@/lib/travel-opportunities";

function TravelOpportunityContent({ slug }: { slug: string }) {
  const travel_opportunity_detail =
    travel_opportunity_details.find((c) => c.slug === slug) ||
    travel_opportunity_details[0];
  return (
    <main className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] min-h-[480px] bg-black">
        <Image
          src="/logo-dark.jpeg"
          alt={travel_opportunity_detail.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-[10px] sm:text-xs font-semibold tracking-widest text-primary">
              TRAVEL OPPORTUNITY DETAILS
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              {travel_opportunity_detail.title}
            </h1>

            {travel_opportunity_detail.subtitle && (
              <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                {travel_opportunity_detail.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <span className="text-xs tracking-[0.25em] font-semibold text-primary">
            OVERVIEW
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight">
            What This Program Offers
          </h2>

          <div className="mt-12 space-y-6 text-gray-600 text-base sm:text-lg max-w-4xl">
            {travel_opportunity_detail.overview.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      {travel_opportunity_detail.destinations && (
        <section className="py-28 bg-[#FAFAFA] border-t border-black/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-xs tracking-[0.25em] font-semibold text-primary">
              DESTINATIONS
            </span>

            <h3 className="mt-6 text-3xl font-semibold text-[#111111]">
              Available Countries
            </h3>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {travel_opportunity_detail.destinations.map((d, i) => (
                <div
                  key={i}
                  className="text-gray-600 leading-relaxed text-base border-b border-black/10 pb-2"
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTIONS ================= */}
      {travel_opportunity_detail.sections && (
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 space-y-24">
            {travel_opportunity_detail.sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] text-center">
                  {section.title}
                </h3>

                {section.list ? (
                  <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4 max-w-3xl mx-auto">
                    {section.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-base leading-relaxed flex gap-4 items-start"
                      >
                        <span className="mt-2 h-[4px] w-[4px] bg-primary rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : section.content ? (
                  <div className="mt-8 space-y-6 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
                    {section.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= WHY CHOOSE ================= */}
      {travel_opportunity_detail.whyChoose && (
        <section className="py-32 bg-[#FAFAFA] border-t border-black/10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <span className="text-xs tracking-[0.25em] font-semibold text-primary">
              WHY CHOOSE US
            </span>

            <h3 className="mt-6 text-3xl font-semibold text-[#111111]">
              Why Bridge360 Exchange
            </h3>

            <div className="mt-14 grid sm:grid-cols-2 gap-12 text-left">
              {travel_opportunity_detail.whyChoose.map((item, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-base leading-relaxed border-l border-primary pl-6"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default TravelOpportunityContent;
