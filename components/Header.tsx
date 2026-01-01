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
        className=" w-full px-6 py-3 rounded-full mt-4 flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-light.jpeg"
            alt="Bridge360 Exchange logo"
            width={42}
            height={42}
            priority
          />
          <span className="hidden sm:block text-[0.4em] text-white font-semibold tracking-wide">
            Bridge360 <br /> <span className="text-primary">Exchange</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wider text-white">
          {links
            // .filter((link) => link.href !== "/contact")
            .map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="relative group">
                  {link.title}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300
                    ${
                      link.href === pathName
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
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
