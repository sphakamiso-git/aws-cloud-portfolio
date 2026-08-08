import ProjectForm from "@/components/admin/ProjectForm";
import Navbar from "@/components/Navbar"

export default function AdminPage() {
    return (
        <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
            <Navbar />
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                    Portfolio Admin
                </p>

                <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                    Manage portfolio content
                </h1>

                <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
                    Add and manage projects, certifications, skills, files and other
                    portfolio content without changing the source code.
                </p>

                <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold">
                        Create project
                    </h2>
                    <p className="mt-2 text-zinc-400">
                        Complete the form below to add a new portfolio project.
                        
                    </p>
                    <ProjectForm />
                </section>
            </div>
        </main>
    );
}