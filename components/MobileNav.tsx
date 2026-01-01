"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { links } from "@/lib/links";
import { motion } from "motion/react";
import Image from "next/image";

export const MobileNav = () => {
  const pathName = usePathname();

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
          {/* Header */}
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center w-fit space-x-2">
                <Image
                  src="/logo-dark.jpeg"
                  alt="Bridge360 Exchange logo"
                  width={42}
                  height={42}
                  priority
                />
                <span className="text-[0.4em] font-semibold text-[#111111] tracking-tight">
                  Bridge 360 <br />
                  <span className="text-primary">Exchange</span>
                </span>
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation */}
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="flex flex-col mt-12"
          >
            {links.map((link, index) => {
              const isActive = pathName === link.href;

              return (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, ease: "easeOut" },
                    },
                  }}
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

          {/* Social Icons */}
          <div className="mt-14 flex justify-center">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="https://web.facebook.com/genevieve.sedalo"
                  className="text-gray-500 hover:text-[#C9A24D] transition"
                >
                  <FaSquareFacebook size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/gdsedalo09/"
                  className="text-gray-500 hover:text-[#C9A24D] transition"
                >
                  <RiInstagramFill size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/genevieve-sedalo-ph-d-0aa26b27"
                  className="text-gray-500 hover:text-[#C9A24D] transition"
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
};

export default MobileNav;
