import Certifications from "@/components/sections/Certifications";
import AboutVideo from "@/components/AboutVideo";
import CVSection from "@/components/CVSection";
import Navbar from "@/components/layout/Navbar";
//import { skills } from "@/data/skills";
import Skills from "@/components/sections/Skills";

export default function AboutPage() {

    return (
        
        <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
            <Navbar />
            <div className="mx-auto max-w-6xl">
                <section className="mt-24">
                    <h1 className="text-4xl font-bold md:text-5xl">
                        About Me
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        I&apos;m a cloud and infrastructure engineer focused on AWS,
                        automation, security and building reliable systems.</p>
                    <Skills />
                </section>
  
                <section className="mt-24">
                    <h2 className="text-3xl font-bold">
                         My Story
                    </h2>

                   <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
                        My journey into technology started with software development and 
                        gradually expanded into cloud insfrastructure, Linux, automation, and security.
                        I enjoy understanding how systems work, solving technical problems, and building solutions that are simple, 
                        reliable and scalable.
                    </p>
                </section>

                <Certifications />
                <AboutVideo />
                <CVSection />
            </div>
        </main>
    );
}