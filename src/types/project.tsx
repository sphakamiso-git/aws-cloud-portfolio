export interface CreateProjectInput {
  
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    featured: boolean;
}

export interface Project extends CreateProjectInput {
  projectId: string;
  createdAt: string;
  updatedAt: string;
}