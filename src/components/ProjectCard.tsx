type ProjectCardProps = {
    title: string;
    description: string;
    techUsed: string[];
    githubLink: string;
};

export default function ProjectCard({title, description, techUsed, githubLink,}: ProjectCardProps) {
    return ( 
        <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-white">
            <h3 className="text-2xl font-bold">{title}</h3>

            <p className="mt-4 flex-grow leading-7 text-zinc-300">{description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
                {techUsed.map((technology) => (
                    <span key={technology} className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-200">
                        {technology}
                    </span>
                ))}
            </div>
            <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-emerald-400 hover:text-emerald-300"
            >
                View on Github →
            </a>
        </article>
    );
}