export default function Hero() {
return(
    <section className="flex min-h-screen items-center bg-zinc-950 px-6 pt-28 text-white">
        <div className="mx-auto w-full max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                AWS SysOps Engineer
                </p>

                {/* <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl"> */}
                <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                    Building secure cloud platforms that solve real business problems.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                    I&apos;m Sphakamiso Ngobese, an AWS Engineer focused on TypeScript,
                    serverless architecture, Devops and reliable cloud operations.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a href="#projects" className="rounded-full bg-white px-6 py-3 text-center font-semibold text-black transition hover:bg-zinc-200">
                        View My projects
                    </a>

                    <a href="/about" className="rounded-full border border-zinc-600 px-6 py-3 text-center font-semibold transition hover:border-white">
                        About Me 
                    </a>
                </div>
                
        </div>
    </section>
);
}