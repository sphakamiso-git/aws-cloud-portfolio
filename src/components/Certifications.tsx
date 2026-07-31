import Image from "next/image";

const certifications = [
    {
        name: "AWS Cloud Practitioner",
        image: "/certifications/aws-cloud-practitioner.png",
    },
    {
        name: "AWS developer Associate",
        image: "/certifications/aws-developer-associate.png",
    },
    {
        name: "AWS DevOps Engineer professional",
        image: "/certifications/aws-devops-engineer-professional.png",
    },
    {
        name: "AWS Solutions Architect Associate",
        image: "/certifications/aws-solutions-architect-associate.png",
    },
    {
        name:"SysOps Administrator Associate",
        image: "/certifications/aws-sysops-administrator-associate.png",
    },
    {
        name: "CompTIA Linux+",
        image: "/certifications/comptia-linux-ce-certification.png",
    },
];

export default function Certifications() {
    return (
        <section className="bg-zinc-900 px-6 py-20 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                        Certifications
                    </p>

                    <p className="mt-4 text-3xl font-bold sm:text-4xl">
                        Proven cloud and infrastructure knowledge
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                    {certifications.map((certification) => (
                        <div 
                        key={certification.name}
                        className="flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-emerald-400">
                        <Image
                            src={certification.image}
                            alt={`${certification.name} certification badge`}
                            width={140}
                            height={140}
                            className="h-auto w-full max-w-32"
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

