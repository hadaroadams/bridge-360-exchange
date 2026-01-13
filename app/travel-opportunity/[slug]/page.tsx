import CallToActionSection from "@/components/CallToActionSection";
import CourseContent from "@/components/TravelOpportunityContent";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  console.log(slug);

  return (
    <main className="relative w-full overflow-hidden">
      <CourseContent slug={slug} />
      <CallToActionSection />
    </main>
  );
}
