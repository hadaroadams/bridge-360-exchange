import CallToActionSection from "@/components/CallToActionSection";
import Hero from "@/components/Hero";
import HomeCourseSection from "@/components/HomeCourseSection";
import HomeFeaturesSection from "@/components/HomeFeaturesSection";
import HomeWhoItForSection from "@/components/HomeWhoItForSection";
import WhyChooseUsAndAboutUsSection from "@/components/WhyChooseUsAndAboutUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeCourseSection />
      <HomeWhoItForSection />
      <HomeFeaturesSection />
      <WhyChooseUsAndAboutUsSection />
      <CallToActionSection />
      
    </main>
  );
}
