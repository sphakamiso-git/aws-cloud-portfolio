"use client";

import { useSkills } from "@/hooks/useSkills";

export default function Skills() {
  const { skills, loading, error } = useSkills();

  if (loading) {
    return (
      <section className="py-16">
        <p className="text-zinc-400">Loading skills...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <p className="text-red-400">{error}</p>
      </section>
    );
  }

  return (
    <section className="py-16">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Skills
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <p className="mb-2 text-sm text-emerald-400">
              {skill.category}
            </p>

            <h3 className="mb-3 text-xl font-semibold text-white">
              {skill.name}
            </h3>

            <p className="text-zinc-400">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}