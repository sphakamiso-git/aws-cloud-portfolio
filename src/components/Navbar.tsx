import Link from 'next/link';

export default function Navbar() {
    return(
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
                <Link href="/" className="text-xl font-bold">
                    Sphakamiso
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm text-zinc-300 hover:text-white">
                        Home
                    </Link>

                    <Link href="/#projects" className="text-sm text-zinc-300 hover:text-white">
                        Projects
                    </Link>
                    
                    <Link href="/about" className="text-sm text-zinc-300 hover:text-white">
                        About
                    </Link>

                    <Link href="/contact" className="text-sm text-zinc-300 hover:text-white">
                        Contact
                    </Link>
                    {/* <a href="/#contact" className="text-sm text-zinc-300 hover:text-white">
                    Contact
                    </a> */}

                    <a 
                       href="/cv/sphakamiso-ngobese-cv.pdf"
                       className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-emerald-300">
                        Download CV
                       </a>
                </div>
            </nav>
        </header>
    )
}