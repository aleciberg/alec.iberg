export interface Skill {
  name: string;
  image: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}
