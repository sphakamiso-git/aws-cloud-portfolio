export default function AboutVideo() {
    return (
        <section className="mt-20">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracing-[0.3em] text-emerald-400">
                    Get to know me
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                    Beyond the CV
                </h2>

                <p className="mt-4 leading-8 text-zinc-400">
                    A shot introduction to who I am, my journey into cloud Engineering, and what motivates me to keep buildng and learning.
                </p>
            </div>

            <div className="mt-8 max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
                <video controls className="aspect-video w-full">
                    <source src="/videos/about-me.mp4" type="video/mp4" />

                    Your browser does not support the video element.
                </video>
            </div>
        </section>
    );
}