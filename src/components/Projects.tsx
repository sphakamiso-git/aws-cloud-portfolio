import ProjectCard from './ProjectCard';
import { projects } from "@/data/projects";



export default function Projects () { 
    return (
        <section id="projects" className="bg-black py-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="font-semibold text-emerald-400"> Featured work</p>

                    <h2 className="mt-2 text-4xl font-bold">
                        Projects
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7  text-zinc-400">
                        A selection of cloud and software engineering projects focused on automation, security, reporting and modern web development.
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