import React from "react";
import {
  FaGraduationCap,
  FaUserCheck,
  FaMoneyBillWave,
  FaTags,
} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";

export const features = [
  {
    title: "Reliable Partners",
    description:
      "We work with trusted institutions, sponsors, and global partners to ensure safe, credible, and successful international opportunities.",
    icon: FaUserCheck,
  },
  {
    title: "Affordable & Free Programs",
    description:
      "Access a wide range of cost-effective and fully sponsored programs designed to make global opportunities accessible to everyone.",
    icon: FaTags,
  },
  {
    title: "Top J-1 Sponsors",
    description:
      "We connect you with recognized and reputable J-1 visa sponsors to guarantee compliance, quality placements, and peace of mind.",
    icon: FaGraduationCap,
  },
  {
    title: "Smooth Application Process",
    description:
      "From documentation to approvals, our guided process ensures a stress-free experience at every stage of your journey.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Ready Spot Placement",
    description:
      "Secure pre-arranged opportunities and placements, so you can focus on preparing for your travel and success abroad.",
    icon: FaBriefcase,
  },
];

function HomeFeaturesSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={index}
                className="
              
                  rounded-3xl
                  p-8
                  transition
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* Icon Circle */}
                <span
                  className="
                    w-14 h-14
                    rounded-full
                    border border-primary
                    flex items-center justify-center
                    text-primary
                    mb-6
                  "
                >
                  <Icon size={22} />
                </span>
                {/* Title */}
                <h3 className="text-lg font-semibold text-[#111111]">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeFeaturesSection;
