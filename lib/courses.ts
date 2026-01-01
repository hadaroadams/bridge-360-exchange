import {
  GraduationCap,
  Briefcase,
  Globe,
  Landmark,
  //   Passport,
  FileText,
  Award,
} from "lucide-react";
import { BsPassport } from "react-icons/bs";

export interface CourseSubSection {
  title: string;
  description?: string;
}

export interface Course {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  icon: any;
  image: string;
  sections: CourseSubSection[];
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "exchange-programs",
    title: "Exchange Programs",
    shortDescription:
      "Study, work, or experience life abroad through cultural and educational exchange initiatives.",
    icon: Globe,
    image: "/courses/exchange.jpg",
    sections: [
      { title: "High School Exchange Programs" },
      { title: "University Exchange Partnerships" },
      { title: "Summer Cultural Exchange" },
      { title: "Work & Travel Exchange" },
      { title: "Scholarship-Based Exchange Programs" },
    ],
  },

  {
    id: 2,
    slug: "internship-programs",
    title: "Internship Programs",
    shortDescription:
      "Hands-on professional placements for students and graduates locally and internationally.",
    icon: Briefcase,
    image: "/courses/internships.jpg",
    sections: [
      { title: "Paid Internship Programs" },
      { title: "Unpaid / Volunteer Internships" },
      { title: "Technical & Engineering Internships" },
      { title: "Business & Administration Internships" },
      { title: "Medical & Health Internships" },
    ],
  },

  {
    id: 3,
    slug: "study-in-usa",
    title: "Study in USA (F1 Visa)",
    shortDescription:
      "Admission and visa guidance for studying in American institutions.",
    icon: Landmark,
    image: "/courses/usa.jpg",
    sections: [
      { title: "Community Colleges" },
      { title: "Undergraduate Admissions" },
      { title: "Graduate (Masters) Admissions" },
      { title: "USA Scholarships & Funding" },
      { title: "F1 Visa Guidance & Support" },
    ],
  },

  {
    id: 4,
    slug: "study-in-eastern-europe",
    title: "Study in Eastern Europe",
    shortDescription:
      "Affordable, globally recognized degree opportunities across Eastern Europe.",
    icon: GraduationCap,
    image: "/courses/eastern-europe.jpg",
    sections: [
      { title: "Medical Schools in Eastern Europe" },
      { title: "Engineering Programs" },
      { title: "Low-Tuition Universities" },
      { title: "Scholarship Opportunities" },
      { title: "Application & Visa Support" },
    ],
  },

  {
    id: 5,
    slug: "study-in-western-europe",
    title: "Study in Western Europe",
    shortDescription:
      "World-class education in countries with high academic standards.",
    icon: GraduationCap,
    image: "/courses/western-europe.jpg",
    sections: [
      { title: "Study in Germany" },
      { title: "Study in France" },
      { title: "Study in the Netherlands" },
      { title: "Study in Belgium" },
      { title: "EU Scholarships & Funding" },
    ],
  },

  {
    id: 6,
    slug: "study-in-australia",
    title: "Study in Australia",
    shortDescription:
      "Top-tier education with post-study work and residency pathways.",
    icon: GraduationCap,
    image: "/courses/australia.jpg",
    sections: [
      { title: "Diploma & Vocational Programs" },
      { title: "Undergraduate Studies" },
      { title: "Postgraduate Studies" },
      { title: "Student Visa (Subclass 500)" },
      { title: "Work Opportunities After Studies" },
    ],
  },

  {
    id: 7,
    slug: "study-in-new-zealand",
    title: "Study in New Zealand",
    shortDescription:
      "High-quality education in a safe environment with strong work options.",
    icon: GraduationCap,
    image: "/courses/new-zealand.jpg",
    sections: [
      { title: "Polytechnic & Institute Programs" },
      { title: "University Undergraduate" },
      { title: "Masters & PhD Programs" },
      { title: "Student Visa Requirements" },
      { title: "Post-Study Work Visa" },
    ],
  },

  {
    id: 8,
    slug: "visa-application",
    title: "Visa Application",
    shortDescription:
      "Complete visa support for students, travelers, and professionals.",
    icon: BsPassport,
    image: "/courses/visa-application.jpg",
    sections: [
      { title: "Student Visa Applications" },
      { title: "Tourist Visa Assistance" },
      { title: "Work Permit Visa Guidance" },
      { title: "Business Visa Applications" },
      { title: "Document Review & Submission Support" },
    ],
  },

  {
    id: 9,
    slug: "visa-interview-preparation",
    title: "Visa Interview Preparation",
    shortDescription: "Mock interviews and coaching for embassy success.",
    icon: FileText,
    image: "/courses/visa-interview.jpg",
    sections: [
      { title: "Mock Interview Sessions" },
      { title: "Common Embassy Questions" },
      { title: "Document Preparation Checklist" },
      { title: "Confidence & Communication Coaching" },
      { title: "F1 / Schengen / UK Interview Tips" },
    ],
  },

  {
    id: 10,
    slug: "my-perfect-cv",
    title: "My Perfect CV",
    shortDescription:
      "Professional CV, cover letter, and LinkedIn optimization services.",
    icon: Award,
    image: "/courses/cv.jpg",
    sections: [
      { title: "Professional CV Writing" },
      { title: "Cover Letter Writing" },
      { title: "LinkedIn Optimization" },
      { title: "ATS-Friendly CV Formatting" },
      { title: "Career Consultation" },
    ],
  },

  {
    id: 11,
    slug: "international-exams",
    title: "International Exams",
    shortDescription:
      "Training and preparation for key international examinations.",
    icon: GraduationCap,
    image: "/courses/exams.jpg",
    sections: [
      { title: "IELTS Preparation" },
      { title: "TOEFL Preparation" },
      { title: "SAT / ACT Preparation" },
      { title: "GRE / GMAT Preparation" },
      { title: "Duolingo English Test Prep" },
    ],
  },
];
