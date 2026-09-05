import AdminNavigation from "@/components/admin/AdminNavigation";
import SkillForm from "@/components/admin/SkillForm";
import Select from "@/components/ui/Select";



export default function AdminSkillsPage() {
    return (
        <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                    Portfolio Admin
                </p>

                <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                    Skills
                </h1>

                <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
                    Add and manage technical skills.
                </p>

                <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 smp-8">
                    <h2 className="text-2xl font-bold">
                        Add Skill
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        Add a technical skill to your portfolio.
                    </p>

                    <SkillForm />
                </div>
            </div>
        </main>
    );
}