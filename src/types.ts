export interface Project {
  title: string;
  projectType?: string;
  description: string | string[];
  link?: string;
  company?: string;
  period?: string;
  achievements?: string[];
  technologies?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

