export interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  visual: string;
  link: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  address: string;
  url: string;
}
