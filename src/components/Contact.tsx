
export default function Contact () {
    return (
        <section id="contact" className="bg-zinc-900 px-6 py-20 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                        Contact
                    </p>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        Let&apos;s build something useful
                    </h2>

                    <p className="mt-4 leading-8 text-zinc-400">
                        If you&apos;d like to discuss cloud infrastruture, automation, security, or a potential project, feel free to get in touch.
                    </p>
                </div>

            <form className="mt-10 max-w-2xl space-y-6">
                <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">Name</label>

                    <input id="name" type="text" className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400"/>
                    
                 

                  
                </div>
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">Email</label>

                    <input id="email" type="email" className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400"/>
                </div>

                <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">Message</label>
                    <textarea
                        id="message"
                        rows={6}
                        className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
                    />
                </div>
                <button
                    type="submit"
                    className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
                >
                    Send Message
                </button>
            </form>
        </div>
        </section>
    )
}