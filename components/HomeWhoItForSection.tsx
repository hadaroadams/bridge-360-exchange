"use client";
import Image from "next/image";

function HomeWhoItForSection() {
  const items = [
    "Being a Fresh Graduate",
    "Being a Working Professional",
    "Being a Continuing Student",
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* <Image
        src="/bg-06.jpg"
        alt="hero image"
        fill
        className="object-cover"
        priority
      /> */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        {/* LEFT */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug text-[#111111] max-w-sm">
            J1 Could Be the Best Option for You
          </h2>

          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
            Gain international exposure, professional experience, and cultural
            exchange through the J1 program designed for growth.
          </p>

          <div className="w-[100px] mt-5 h-[2px] bg-primary" />
        </div>

        {/* CENTER IMAGE */}
        <div className="lg:col-span-5">
          <div className="relative w-full h-[360px] sm:h-[450px] lg:h-[700px]">
            <Image
              src="/person-2.png"
              alt="J1 Exchange Program"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="lg:col-span-4 relative lg:-ml-20 z-10 lg:-translate-x-10">
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li
                key={item}
                className="
                  flex items-center gap-4
                  bg-white
                  p-4 pr-6
                  rounded-full
                  shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                "
              >
                <span
                  className="
                    flex items-center justify-center
                    size-25
                    rounded-full
                    bg-primary/10
                    text-primary
                    font-semibold
                     text-2xl sm:text-3xl md:text-5xl
                  "
                >
                  {index + 1}
                </span>

                <p className="text-[#111111] font-medium text-sm sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeWhoItForSection;
