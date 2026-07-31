import ProjectCard from './ProjectCard';

type Project = {
    title: string;
    description: string;
    techUsed: string[];
    githubLink: string;
};

const projects: Project[] = [
    {title: "AWS Montly Cost Explorer",
    description: "A serverless reporting solution that generates montly AWS cost reports and stores tham in Amazon S3",
    techUsed: ["AWS Lambda", "TypeScript", "S3", "SNS"],
    githubLink: "https://github.com"},
    {
        title: "Security Hub Weekly Report",
        description: "An automated reporting system that summarises AWWS Security Hub findings and distributes a weekly report.",
        techUsed: ["Security Hub", "Lambda", "TypeScript", "EventBridge"],
        githubLink: "https://github.com"
    },
    {
        title: "Cloud Portfolio",
        description: "A responsive portfolio website showingcasing cloud projects, certifications, and technical skills. ",
        techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
        githubLink: "https://github.com"
    },
];


export default function Projects () { 
    return (
        <section id="projects" className="bg-black px-6 py-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="font-semibold text-emerald-400"> Featured work</p>

                    <h2 className="mt-2 text-4xl font-bold">
                        Projects
                    </h2>

                    <p className="mt-4 max-w-2xl text-zinc-400">
                        A Selection of cloud and software engineering projects focused on automation, security, reporting and modern web development.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}