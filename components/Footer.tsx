import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-light.jpeg"
                alt="Bridge360 Exchange"
                width={44}
                height={44}
              />
              <span className="text-lg font-semibold">Bridge360 Exchange</span>
            </Link>

            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-xs">
              Connecting students and professionals to global education,
              exchange programs, and expert tutors worldwide.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-primary">
              COMPANY
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="hover:text-white">
                  Tutors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-primary">
              SERVICES
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>Visa Application</li>
              <li>Interview Preparation</li>
              <li>Study Abroad</li>
              <li>International Exams</li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-primary">
              CONNECT
            </h4>

            <p className="mt-6 text-sm text-white/70">
              Follow us for updates and opportunities.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="p-2 rounded-full border border-white/20 hover:border-primary hover:text-primary"
              >
                <FaSquareFacebook size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full border border-white/20 hover:border-primary hover:text-primary"
              >
                <RiInstagramFill size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full border border-white/20 hover:border-primary hover:text-primary"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-20 pt-8
            border-t border-white/10
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4
            text-sm text-white/50
          "
        >
          <p>
            © {new Date().getFullYear()} Bridge360 Exchange. All rights
            reserved.
          </p>
          <p>Designed with care 🌍</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
