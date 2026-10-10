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
  image?: string;
  imageFit?: 'cover' | 'contain';
  imageBg?: string;
}
