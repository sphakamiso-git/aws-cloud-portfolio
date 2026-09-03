"use client";

import { useCertifications } from "@/hooks/useCertifications";

export default function Certifications() {
  const { certifications, loading, error } = useCertifications();
  console.log(certifications);
  return (
    <section
      id="certifications"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Certifications
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Professional Certifications
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
            Certifications earned across cloud, development, infrastructure,
            and technology.
          </p>
        </div>

        {loading && (
          <p className="text-zinc-400">
            Loading certifications...
          </p>
        )}

        {error && (
          <p className="text-red-400">
            {error}
          </p>
        )}

        {!loading && !error && certifications.length === 0 && (
          <p className="text-zinc-400">
            No certifications available.
          </p>
        )}

        {!loading && !error && certifications.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <article
                key={certification.certificationId}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <div className="flex h-40 items-center justify-center">
                  <img
                    src={certification.imageUrl}
                    alt={certification.name}
                    className="max-h-32 max-w-full object-contain"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold">
                    {certification.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {certification.issuer}
                  </p>

                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                  >
                    View credential
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}