"use client";

import { links } from "@/lib/links";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { BsArrowDown } from "react-icons/bs";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  if (pathName.startsWith("/studio")) return null;

  // Helper to check if a link or its children are active
  const isActive = (link: (typeof links)[0]) =>
    link.href === pathName ||
    link.children?.some((child) => child.href === pathName);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 section-padding"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(11,11,11,0.85)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="w-full px-10 py-3 rounded-full mt-4 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-light.jpeg"
            alt="Bridge360 Exchange logo"
            width={52}
            height={52}
            priority
          />
          <span className="hidden sm:block text-[0.6em] text-white font-semibold tracking-wide">
            Bridge360 <br /> <span className="text-primary">Exchange</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wider text-white relative">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`relative z-10 ${
                  isActive(link) ? "after:w-full " : ""
                }`}
              >
                {link.title}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300
                    ${isActive(link) ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>

              {/* Dropdown for sub-courses */}
              {link.children && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-black rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                >
                  {link.children.map((child) => (
                    <li
                      key={child.href}
                      className="border-b border-black/20 last:border-none"
                    >
                      <Link
                        href={child.href}
                        className={`block px-4 py-3 text-sm text-white hover:bg-primary/20 transition ${
                          pathName === child.href ? "bg-primary/20" : ""
                        }`}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex">
          <Button
            asChild
            className="bg-primary text-black hover:bg-[#B17825] rounded-full px-6"
          >
            <Link href="/contact">
              Get Started <BsArrowDown className="-rotate-90 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <MobileNav />
      </motion.nav>
    </motion.header>
  );
};

export default Header;
