"use client"
import ProjectForm from "@/components/admin/ProjectForm";
import AdminNavigation from "@/components/admin/AdminNavigation";
import DashboardCard from "@/components/admin/DashboardCard";
import { useProjects } from "@/hooks/useProjects";

export default function AdminPage() {
    const { projects } = useProjects();

    const dashboardCards = [
        {
            title: "Projects",
            value: projects.length,
            description: "Manage portfolio work",
        },
        {
            title: "Certifications",
            value: "-",
            description: "Coming Soon",
        },
        {
            title: "skills",
            value: "-",
            description: "Coming Soon",
        },
        {
            title: "CV",
            value: "-",
            description: "Coming Soon",
        },
    ];
    return (
        <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
            
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

                <div className="mt-8">
                    <AdminNavigation />
                </div>
                <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {dashboardCards.map((card) => (
                        <DashboardCard
                            key={card.title}
                            title={card.title}
                            value={card.value}
                            description={card.description}
                        />
                    ))}
                    {/* <ProjectForm /> */}
                </section>
            </div>
        </main>
    );
}