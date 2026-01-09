"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { links } from "@/lib/links";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="text-primary">
          <HiOutlineMenuAlt3 size={30} />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-white border-l border-black/5 px-6"
        >
          {/* ================= HEADER ================= */}
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center space-x-2 w-fit">
                <Image
                  src="/logo-dark.jpeg"
                  alt="Bridge360 Exchange"
                  width={42}
                  height={42}
                  priority
                />
                <span className="text-[0.7rem] font-semibold text-[#111111] leading-tight">
                  Bridge 360 <br />
                  <span className="text-primary">Exchange</span>
                </span>
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* ================= NAVIGATION ================= */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="flex flex-col mt-12"
          >
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              // ===== COURSES (ONE ACCORDION) =====
              if (link.children) {
                return (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="border-b border-black/5"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value="courses" className="border-none">
                        <AccordionTrigger className="py-4 text-base font-medium text-[#111111] hover:text-primary">
                          {link.title}
                        </AccordionTrigger>

                        <AccordionContent>
                          <ul className="space-y-3 pl-4 pb-4">
                            {link.children.map((child, i) => (
                              <li key={i}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block text-sm transition",
                                    pathname === child.href
                                      ? "text-primary font-semibold"
                                      : "text-gray-600 hover:text-primary"
                                  )}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.li>
                );
              }

              // ===== NORMAL LINKS =====
              return (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="border-b border-black/5"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 text-base font-medium transition",
                      isActive
                        ? "text-primary"
                        : "text-[#111111] hover:text-[#C9A24D]"
                    )}
                  >
                    {link.title}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* ================= SOCIALS ================= */}
          <div className="mt-14 flex justify-center">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="https://web.facebook.com/genevieve.sedalo"
                  className="text-gray-500 hover:text-primary transition"
                >
                  <FaSquareFacebook size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/gdsedalo09/"
                  className="text-gray-500 hover:text-primary transition"
                >
                  <RiInstagramFill size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/genevieve-sedalo-ph-d-0aa26b27"
                  className="text-gray-500 hover:text-primary transition"
                >
                  <FaLinkedin size={22} />
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
