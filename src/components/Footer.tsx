
export default function Footer () {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-zinc-500">
                    © {currentYear} Sphakamiso Ngobese. All rights reserved.
                </p>

                <div className="flex-gap-6 text-sm">
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition hover:text-white"
                    >
                        Github
                    </a>

                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition hover:text-white"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}