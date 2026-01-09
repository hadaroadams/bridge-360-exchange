import CallToActionSection from "@/components/CallToActionSection";
import CourseContent from "@/components/CourseContent";

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
      {/* <section className="relative h-[65vh] min-h-[440px] bg-black">
        <Image
          src={course.heroImage}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {course.title}
            </h1>
            {course.subtitle && (
              <p className="text-gray-300 max-w-2xl mx-auto">
                {course.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>


      <section className="py-28 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {course.overview.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}

          {course.sections?.map((section, i) => (
            <div key={i} className="space-y-6">
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              {section.content?.map((c, idx) => (
                <p key={idx} className="text-gray-600">
                  {c}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {course.whyChoose && (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Why Choose Bridge360</h2>
              <ul className="grid sm:grid-cols-2 gap-6 text-gray-600">
                {course.whyChoose.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section> */}
      <CourseContent slug={slug} />

      <CallToActionSection />
    </main>
  );
}
