export type Project = {
    title: string;
    description: string;
    techUsed: string[];
    githubLink: string;
}

export const projects: Project[] = [
  {
    title: "AWS Monthly Cost Report",
    description:
      "A serverless reporting solution that generates monthly AWS cost reports and stores them in Amazon S3.",
    techUsed: ["AWS Lambda", "TypeScript", "S3", "SNS"],
    githubLink: "https://github.com/",
  },
  {
    title: "Security Hub Weekly Report",
    description:
      "An automated reporting system that summarises AWS Security Hub findings and distributes a weekly report.",
    techUsed: ["Security Hub", "Lambda", "TypeScript", "EventBridge"],
    githubLink: "https://github.com/",
  },
  {
    title: "Cloud Portfolio",
    description:
      "A responsive portfolio website showcasing cloud projects, certifications, and technical skills.",
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/",
  },
]