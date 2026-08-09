import AdminNavigation from "@/components/admin/AdminNavigation";
import ProjectForm from "@/components/admin/ProjectForm";

export default function AdminProjectsPage() {
    return (
        <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                    Portfolio Admin
                </p>

                <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                    Projects
                </h1>

                <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
                    Create and manage portfolio projects.
                </p>

                <div className="mt-8">
                    <AdminNavigation/>
                </div>

                <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold">
                        Create project
                    </h2>
                    
                    <p className="mt-2 text-zinc-400">
                        Complete the form below to add a new portfolio project.
                    </p>
                </section>
            </div>
        </main>
    );
}