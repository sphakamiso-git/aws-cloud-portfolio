import Image from "next/image";
import { certifications } from "@/data/certifications";

export default function Certifications() {
    return (
        <section className="bg-zinc-900 px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                        Certifications
                    </p>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    Proven cloud and infrastructure knowledge
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                    {certifications.map((certification) => (
                        <div 
                        key={certification.name}
                        className="flex h-full flex-col items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-400">
                        <Image
                            src={certification.image}
                            alt={`${certification.name} certification badge`}
                            width={140}
                            height={140}
                            className="h-auto w-full max-w-32 transition duration-300 hover:scale-105"
                        />
                        <p className="mt-4 text-sm font-medium text-zinc-300">
                            {certification.name}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

