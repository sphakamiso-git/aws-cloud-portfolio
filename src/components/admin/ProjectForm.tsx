"use client";
import { useState } from "react";
import type { ComponentPropsWithoutRef } from "react";

type FormSubmitHandler = ComponentPropsWithoutRef<"form">["onSubmit"];

export default function ProjectForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [liveUrl, setLiveUrl] = useState("");
    const [featured, setFeatured] = useState(false);

    const handleSubmit: FormSubmitHandler = (event) => {
    event.preventDefault();

        const project = {
            title,
            description,
            technologies: technologies
            .split(",")
            .map((technology) => technology.trim())
            .filter(Boolean),
            githubUrl,
            liveUrl,
            featured,
        };

        console.log(project);
        };
    return (
        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
            <div>
                <label
                 htmlFor="title"
                 className="mb-2 block text-sm font-medium text-zinc-300"
                >
                    Project Title``
                </label>

                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="AWS Montly Cost Explorer"
                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
                />
            </div>

            <div>
                <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                        Description
                    </label>
                <textarea
                    id="description"
                    rows={5}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"/>

                
            </div>

            <div>
                <label
                    htmlFor="technologies"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                        Technologies
                </label>
                <input
                    id="technologies"
                    type="text"
                    value={technologies}
                    onChange={(event) => setTechnologies(event.target.value)}
                    placeholder="Lambda, TypeScript, DyanmoDB"
                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="githubUrl"
                        className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                        Github URL
                    </label>
                    <input
                        id="githubUrl"
                        type="url"
                        value={githubUrl}
                        onChange={(event) => setGithubUrl(event.target.value)}
                        placeholder="https://github.com/..."
                        className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
                    />
                </div>
            
            

            <div>
                <label
                    htmlFor="liveUrl"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                        Live Demo URL
                    </label>
                <input
                    id="liveUrl"
                    type="url"
                    value={liveUrl}
                    onChange={(event) => setLiveUrl(event.target.value)}
                    placeholder="https://..."
                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
                />
            </div>
         </div>
        <div className="flex items-center gap-3">
            <input
                id="featured"
                type="checkbox"
                checked={featured}
                onChange={(event) => setFeatured(event.target.checked)}
                className="h-4 w-4"
            />

            <label htmlFor="featured" className="text-sm text-zinc-300">
                Feature this project on the homepage
            </label>
            </div>
            <button 
                type="submit"
                className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black hover:bg-emerald-300">
                    Save Project
            </button>

        </form>
    );
}