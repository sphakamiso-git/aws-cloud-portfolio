import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return(
        <main className="mih-h-screen bg-black px-6 py-24 text-white">
            <Navbar />
            <div className="mx-auto max-w-6xl">
                <Contact />
            </div>
        </main>
    );
}