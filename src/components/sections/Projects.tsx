"use client";
import ProjectCard from '../ProjectCard';

import { useEffect, useState } from "react";
import { getProjects } from "@/services/projectService";
import { Project } from "@/types/project";
import { useProjects } from "@/hooks/useProjects";

// export default function Projects () {
//     const [projects, setProjects] = useState<Project[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         async function loadProjects() {
//             try {
//                 const data = await getProjects();
//                 setProjects(data);
//             }catch (error){
//                 console.error(error);
//                 setError("Could not load projects.");

//             }finally {
//                 setLoading(false);
//             }
//         }
//         loadProjects();
//     }, []);
    export default function Projects () {
    const {
        projects,
        loading, 
        error,
    } = useProjects();
    console.log("Projects:", projects);
    return (
        <section id="projects" className="bg-black px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="font-semibold text-emerald-400">
                        Featured work
                    </p>

                    <h2 className="mt-2 text-4xl font-bold">
                        Projects
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                        A selection of cloud and software engineering projects focused on automation, security, reporting and modern web development.
                    </p>
                </div>

                {loading && (
                    <p className="text-zinc-400">
                        Loading projects..
                    </p>
                )}

                {error && (
                    <p className="text-red-400">
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.projectId}
                                title={project.title}
                                description={project.description}
                                techUsed={project.technologies}
                                githubLink={project.githubUrl}

                                />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
