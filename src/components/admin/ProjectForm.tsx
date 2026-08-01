export default function ProjectForm() {
    return (
        <form className="mt-8 space-y-6">
            <div>
                <label
                 htmlFor="title"
                 className="mb-2 block text-sm font-medium text-zinc-300"
                >
                    Project Title
                </label>

                <input
                    id="title"
                    type="text"
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
                        placeholder="htps://github.com/..."
                        className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
                    />
                </div>
            
            

            <div>
                <label
                    htmlFor="libeUrl"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                        Live Demo URL
                    </label>
                <input
                    id="liveUrl"
                    type="url"
                    placeholder="htps://..."
                    className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
                />
            </div>
         </div>
        <div className="flex items-center gap-3">
            <input
                id="featured"
                type="checkbox"
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