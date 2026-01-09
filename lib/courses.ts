// lib/courses.ts
import { CourseDetails } from "@/types";
import {
  FaPassport,
  FaGlobe,
  FaGraduationCap,
  FaBriefcase,
  FaFileAlt,
  FaUniversity,
} from "react-icons/fa";

export interface Course {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  sections: {
    title: string;
    content: string[];
  }[];
  destinations?: string[];
  icon?: React.ElementType;
}

export const courses: Course[] = [
  {
    slug: "visa-application",
    title: "Visa Application",
    icon: FaPassport,
    shortDescription:
      "Secure your visa for study, work, visit, or participate in exchange programs in USA, Canada, Europe, Asia and Australia.",
    heroDescription:
      "Professional visa application support for study, work, visit, and exchange programs across major global destinations.",
    sections: [
      {
        title: "Overview",
        content: [
          "Our visa application service is designed to give clients confidence and peace of mind as they pursue international opportunities.",
          "With expert guidance, careful documentation review, and personalized support, we minimize errors and maximize approval success.",
        ],
      },
      {
        title: "Our Process",
        content: [
          "We support study, work, visit, and exchange visa applications from start to finish.",
          "Our team ensures a smooth, transparent, and stress-free application experience.",
        ],
      },
    ],
    destinations: [
      "United States",
      "Canada",
      "United Kingdom",
      "Germany",
      "France",
      "Netherlands",
      "Italy",
      "Spain",
      "Ireland",
      "China",
      "Japan",
      "South Korea",
      "United Arab Emirates",
      "Australia",
      "New Zealand",
    ],
  },

  {
    slug: "j1-visa-application",
    title: "J-1 Visa Application",
    icon: FaGlobe,
    shortDescription:
      "Cultural exchange, internships, training, and work experience in the USA.",
    heroDescription:
      "Trusted support for J-1 Exchange Programs connecting applicants to valuable academic, cultural, and professional experiences in the United States.",
    sections: [
      {
        title: "J-1 Exchange Programs",
        content: [
          "Bridge360 Exchange and Travels provides trusted J-1 visa and exchange program support.",
          "Our programs promote cultural exchange, professional growth, and international exposure.",
        ],
      },
      {
        title: "Program Opportunities",
        content: [
          "Participants may engage in internships, training programs, teaching, research assistance, or seasonal work.",
          "We provide end-to-end support including sponsor coordination, documentation, and visa guidance.",
        ],
      },
    ],
  },

  {
    slug: "europe-exchange-internships",
    title: "Exchange Programs & Internships in Europe",
    icon: FaUniversity,
    shortDescription:
      "European exchange programs and internships with visa support.",
    heroDescription:
      "International exchange programs and internship opportunities across Europe with full visa and placement support.",
    sections: [
      {
        title: "European Opportunities",
        content: [
          "Bridge360 connects applicants to exchange programs and internships across Europe.",
          "Participants gain hands-on experience, cultural immersion, and global exposure.",
        ],
      },
      {
        title: "Program Types",
        content: [
          "Opportunities include academic exchange, Erasmus mobility, hospitality internships, IT roles, and NGO placements.",
          "Programs are available for students, graduates, and young professionals.",
        ],
      },
    ],
    destinations: [
      "United Kingdom",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Spain",
      "Italy",
      "Portugal",
      "Sweden",
      "Finland",
      "Denmark",
      "Poland",
      "Czech Republic",
      "Hungary",
    ],
  },

  {
    slug: "study-in-usa-f1",
    title: "Study in USA (F-1 Visa)",
    icon: FaGraduationCap,
    shortDescription:
      "Strategic admission and F-1 visa support for U.S. institutions.",
    heroDescription:
      "End-to-end support for studying in the United States with strong visa credibility and funding strategies.",
    sections: [
      {
        title: "Why Study in the USA",
        content: [
          "The U.S. offers globally recognized education and career opportunities.",
          "However, F-1 visa approval has become increasingly competitive.",
        ],
      },
      {
        title: "Our Advantage",
        content: [
          "We strategically match applicants to suitable schools and funding options.",
          "Interview coaching and document review significantly improve approval outcomes.",
        ],
      },
    ],
  },

  {
    slug: "study-in-europe",
    title: "Study in Europe",
    icon: FaUniversity,
    shortDescription: "Affordable and high-quality education across Europe.",
    heroDescription:
      "Cost-effective study opportunities in Europe with full study permit and work guidance.",
    sections: [
      {
        title: "European Education",
        content: [
          "Europe offers tuition-free or low-cost education without compromising quality.",
          "We guide students through applications, funding, and permits.",
        ],
      },
    ],
  },

  {
    slug: "study-in-asia-australia",
    title: "Study in Asia & Australia",
    icon: FaGlobe,
    shortDescription: "Affordable, practical education in Asia and Australia.",
    heroDescription:
      "Study visa, admission, and work permit support for Asia and Australia.",
    sections: [
      {
        title: "Why Asia & Australia",
        content: [
          "These regions offer technology-driven education at affordable costs.",
          "Students gain practical experience and global exposure.",
        ],
      },
    ],
  },

  {
    slug: "cv-and-career-preparation",
    title: "My Perfect CV / Dream Job",
    icon: FaBriefcase,
    shortDescription:
      "CV writing, job applications, and interview preparation.",
    heroDescription:
      "Career preparation services designed to help you secure your dream job.",
    sections: [
      {
        title: "Career Services",
        content: [
          "Professional CV writing and tailored cover letters.",
          "Interview coaching and targeted job application support.",
        ],
      },
    ],
  },

  {
    slug: "international-exams",
    title: "International Exams",
    icon: FaFileAlt,
    shortDescription: "IELTS, TOEFL, GRE, GMAT, SAT exam preparation.",
    heroDescription:
      "Expert-led coaching for international exams and English language tests.",
    sections: [
      {
        title: "Exam Preparation",
        content: [
          "Structured coaching, mock tests, and personalized feedback.",
          "Confidence-building strategies for exam success.",
        ],
      },
    ],
  },
];

// import { Course } from "@/types";

export const courses_details: CourseDetails[] = [
  {
    slug: "visa-application",
    title: "Visa Application",
    subtitle:
      "Secure your visa for study, work, visit, or exchange programs across top global destinations.",
    heroImage: "/courses/visa.jpg",

    overview: [
      "Our visa application service is designed to give clients confidence and peace of mind as they pursue study, work, visit, or exchange opportunities abroad. With expert guidance, careful documentation review, and personalized support, we help minimize errors and maximize approval success.",
      "Whether you are planning to study overseas, advance your career, attend an exchange program, or travel for leisure, our experienced team works closely with you to ensure a smooth, transparent, and stress-free visa application process from start to finish.",
    ],

    destinations: [
      "United States of America",
      "Canada",
      "United Kingdom",
      "Germany",
      "France",
      "Netherlands",
      "Italy",
      "Spain",
      "Ireland",
      "China",
      "Japan",
      "South Korea",
      "United Arab Emirates",
      "Australia",
      "New Zealand",
    ],
  },

  {
    slug: "j1-visa-application",
    title: "J-1 Exchange Programs & Visa Application",
    heroImage: "/courses/j1.jpg",

    overview: [
      "Bridge360 Exchange and Travels offers trusted support for J-1 Exchange Programs and visa applications, connecting applicants to valuable cultural, academic, and professional experiences in the United States.",
      "We work closely with reputable program sponsors to place applicants in universities, colleges, high schools, hospitality establishments, research institutions, healthcare-related facilities, corporate organizations, and cultural centers.",
      "Throughout the process, Bridge360 provides end-to-end support—program matching, documentation preparation, sponsor coordination, visa application guidance, and pre-departure orientation—to ensure a smooth and successful experience.",
      "Our goal is to help applicants gain meaningful U.S. experience, build global networks, and return home with enhanced skills, cultural awareness, and professional confidence.",
    ],
  },

  {
    slug: "europe-exchange-internships",
    title: "Exchange Programs & Internships in Europe",
    heroImage: "/courses/europe.jpg",

    overview: [
      "Bridge360 Exchange and Travels connects applicants to exciting exchange programs and internship opportunities across Europe, offering valuable international exposure, practical experience, and cultural immersion.",
      "We partner with trusted institutions, companies, and program sponsors across Europe to provide placements in education, business, hospitality, technology, healthcare support, research, creative industries, and nonprofit organizations.",
      "Participants benefit from hands-on work experience, multicultural environments, language exposure, and networking opportunities that strengthen global employability.",
    ],

    sections: [
      {
        title: "Popular Exchange & Internship Opportunities",
        list: [
          "Academic and cultural exchange programs",
          "Paid and unpaid internships",
          "Erasmus-related mobility programs",
          "Hospitality and tourism internships",
          "Business and corporate placements",
          "IT, digital marketing, and technology roles",
          "Research and laboratory assistantships",
          "NGO and nonprofit sector placements",
          "Creative arts, media, and communication internships",
        ],
      },
      {
        title: "Featured European Destinations",
        list: [
          "United Kingdom",
          "Germany",
          "France",
          "Netherlands",
          "Belgium",
          "Spain",
          "Italy",
          "Portugal",
          "Iceland",
          "Sweden",
          "Finland",
          "Denmark",
          "Poland",
          "Czech Republic",
          "Hungary",
        ],
      },
    ],
  },

  {
    slug: "study-in-usa-f1",
    title: "Study in the USA & F-1 Visa Application Support",
    heroImage: "/courses/usa-study.jpg",

    overview: [
      "Studying in the United States remains one of the most competitive and life-changing educational opportunities in the world. However, securing admission and successfully obtaining an F-1 student visa has become increasingly challenging.",
      "At Bridge360 Exchange and Travels, we provide end-to-end support for students seeking admission into accredited U.S. institutions, including academic profiling, school selection, application processing, documentation preparation, and visa guidance.",
      "We strategically help students access scholarships, tuition reductions, assistantships, and funding pathways to strengthen visa credibility and approval outcomes.",
    ],

    whyChoose: [
      "Expert-driven process aligned with current U.S. visa trends",
      "Strategic school placement based on academic profile and finances",
      "Scholarship and funding guidance",
      "Strong visa interview preparation",
      "Personalized support from application to visa decision",
    ],
  },

  {
    slug: "study-in-europe",
    title: "Study in Europe & Study Permit Application Support",
    heroImage: "/courses/europe-study.jpg",

    overview: [
      "Europe offers world-class education with affordable and even tuition-free programs, but navigating these opportunities requires expertise.",
      "Bridge360 Exchange and Travels helps students make cost-effective decisions through school selection, application guidance, funding and scholarship support, study permit assistance, and work permit guidance.",
      "With Bridge360, students gain a transformative academic, cultural, and professional experience without unnecessary stress or financial strain.",
    ],

    whyChoose: [
      "Access to tuition-free or low-cost programs",
      "Expert guidance on European education systems",
      "Scholarship and funding support",
      "Work permit assistance",
      "End-to-end application and arrival support",
    ],
  },

  {
    slug: "study-in-asia-australia",
    title: "Study in Asia & Australia – Visa & Work Permit Support",
    heroImage: "/courses/asia.jpg",

    overview: [
      "Asia and Australia offer high-quality, technology-driven education at affordable costs, making them ideal destinations for African students.",
      "Bridge360 Exchange and Travels supports admission, study visas, scholarships, and work permits while prioritizing cost-efficiency and academic value.",
      "From school selection to visa approval and pre-departure preparation, we ensure a smooth and stress-free process.",
    ],

    whyChoose: [
      "Budget-friendly programs",
      "Scholarship and funding support",
      "Work permit guidance",
      "Hands-on and career-focused education",
      "End-to-end professional support",
    ],
  },

  {
    slug: "cv-and-career-preparation",
    title: "My Perfect CV & Dream Job",
    heroImage: "/courses/career.jpg",

    overview: [
      "At Bridge360 Exchange and Travels, we help applicants stand out in competitive job markets through professional CV development, cover letters, job application support, and interview preparation.",
      "We highlight your strengths, align your profile with employer expectations, and build confidence through structured interview coaching.",
    ],

    whyChoose: [
      "Professional CV and cover letter development",
      "Targeted job application support",
      "Interview preparation and mock interviews",
      "Career-focused personalized guidance",
      "Support from application to offer stage",
    ],
  },

  {
    slug: "international-exams",
    title: "International Exams & English Test Preparation",
    heroImage: "/courses/exams.jpg",

    overview: [
      "Bridge360 Exchange and Travels prepares students for IELTS, TOEFL, GRE, GMAT, SAT, and other international exams.",
      "Our expert-led training, study plans, practice tests, and personalized feedback maximize scores and confidence.",
      "Success in these exams unlocks global academic, scholarship, and professional opportunities.",
    ],

    whyChoose: [
      "Expert-led exam training",
      "Personalized study plans",
      "Mock tests and feedback",
      "Exam-day confidence strategies",
      "Global academic and career access",
    ],
  },
];
