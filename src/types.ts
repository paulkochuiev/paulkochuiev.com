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

export interface NavItem {
  label: string;
  path: string;
  enabled: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  activities?: string;
  description: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  link?: string;
}

export interface Product {
  name: string;
  url: string;
  description: string;
  image: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl?: string;
  description: string;
  skills?: string[];
}

