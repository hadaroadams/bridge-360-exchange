"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "support@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+233 55 000 0000",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Accra, Ghana",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <Image
          src="/cta-bg.jpg"
          alt="Contact Bridge360"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
            Get in <span className="text-[#C78A2E]">Touch</span>
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto">
            Have questions or need support? Our team is here to guide you every
            step of the way.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="relative -mt-24 z-20 section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts.map((item) => (
              <div
                key={item.title}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                  transition
                  hover:shadow-[0_35px_80px_rgba(0,0,0,0.12)]
                "
              >
                <span
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-full
                    bg-primary/10
                    text-primary
                  "
                >
                  <item.icon className="w-5 h-5" />
                </span>

                <h3 className="mt-6 text-lg font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Text */}
          <div className="space-y-6">
            <span className="text-primary text-sm font-semibold tracking-widest">
              CONTACT US
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] leading-tight">
              Send us a message
            </h2>

            <p className="text-gray-600 max-w-md leading-relaxed">
              Fill out the form and our team will respond shortly. We value
              clear communication and meaningful conversations.
            </p>
          </div>

          {/* Form */}
          <form
            className="
              bg-white
              rounded-3xl
              p-8 sm:p-10
              shadow-[0_25px_60px_rgba(0,0,0,0.06)]
              space-y-6
            "
          >
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Subject" />
            <Textarea rows={5} placeholder="Your message..." />

            <Button
              size="lg"
              className="
                w-full
                rounded-full
                bg-primary
                text-black
                font-semibold
                hover:bg-[#B17825]
              "
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
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
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
