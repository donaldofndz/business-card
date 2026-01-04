export interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface BlogPost {
  title: string;
  date: string;
}

export interface ResumeContent {
  meta: {
    languageName: string;
  };
  languageSelector: {
    label: string;
  };
  header: {
    name: string;
    role: string;
  };
  nav: {
    ariaLabel: string;
    profile: string;
    projects: string;
    blog: string;
    contact: string;
  };
  sections: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    writing: string;
    contact: string;
  };
  about: string;
  experience: TimelineEntry[];
  education: TimelineEntry[];
  skills: {
    designTitle: string;
    designItems: string[];
    toolsTitle: string;
    toolsItems: string[];
  };
  projects: TimelineEntry[];
  posts: BlogPost[];
  contact: {
    message: string;
    email: string;
  };
  footer: {
    copyrightTemplate: string;
  };
}
