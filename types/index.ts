export interface CourseDetails {
  slug: string;
  title: string;
  subtitle?: string;
  heroImage: string;

  overview: string[];
  destinations?: string[];
  sections?: {
    title: string;
    content?: string[];
    list?: string[];
  }[];

  whyChoose?: string[];
}
