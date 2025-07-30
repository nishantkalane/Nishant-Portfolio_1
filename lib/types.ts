export interface ResumeData {
  name: string
  title: string
  tagline: string
  contact: {
    email: string
    phone: string
    location: string
    github?: string
    linkedin?: string
  }
  projects: Project[]
  experience: Experience[]
  education: Education[]
  skills: Skills
  awards: AwardType[]
  blogs: Blog[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  features?: string[]
  github?: string
  demo?: string
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  responsibilities?: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  description?: string
}

export interface Skills {
  technical: string[]
  interpersonal: string[]
  analytical: string[]
  support: string[]
}

export interface Award {
  place: string
  event: string
  type: string
  college: string
  date: string
  mode: string
  level: string
}

export interface Blog {
  title: string
  description: string
  url: string
  date: string
  platform: string
  readTime: string
  tags: string[]
}

// Add alias for backward compatibility
export type AwardType = Award
