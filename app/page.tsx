import CallToActionSection from "@/components/CallToActionSection";
import Hero from "@/components/Hero";
import HomeFeaturesSection from "@/components/HomeFeaturesSection";
import HomeTravelOpportunitySection from "@/components/HomeTravelOpportunitySection";
import HomeWhoItForSection from "@/components/HomeWhoItForSection";
import WhyChooseUsAndAboutUsSection from "@/components/WhyChooseUsAndAboutUsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeTravelOpportunitySection />
      <HomeWhoItForSection />
      <HomeFeaturesSection />
      <WhyChooseUsAndAboutUsSection />
      <CallToActionSection />
    </main>
  );
}
