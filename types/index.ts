export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  images: string[];
  link?: string;
}

export interface Experience {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  learningHighlight: string;
}

export interface Stat {
  number: string;
  label: string;
}
