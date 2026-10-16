export interface TroubleshootingItem {
  title: string;
  problem: string;
  solution: string;
  link?: { label?: string; url: string };
}

export interface Project {
  title: string;
  period: string;
  team: string;
  role: string;
  description: string;
  features?: string[];
  responsibilities: string[];
  technologies: string[];
  tools?: string[];
  githubLink?: string;
  notionLink?: string;
  deployLink?: string;
  videoLink?: string;
  troubleshooting?: TroubleshootingItem[];
  image?: string;
  imageFit?: 'cover' | 'contain';
  imageBg?: string;
}
