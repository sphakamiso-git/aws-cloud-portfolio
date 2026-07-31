export default function CVSection () {
    return (
        <section className="mt-20">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                    Curriculum Vitae
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                    Want the full picture?
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
                    Download my CV for a detailed look at my experience, certifications, technical skills and professional background.
                </p>

                <a 
                  href="/cv/sphakamiso-ngobese.pdf"
                  download
                  className="mt-6 inline-block rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black transition hover:bg-emerald-300">

                    Download CV
                  </a>
            </div>
        </section>
    );
}