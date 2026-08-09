import Link from "next/link";

const adminLinks = [
    {
        label: "Overview",
        href: "/admin",
    },

    {
        label: "Projects",
        href: "/admin/projects",
    },
    {
        label: "Certifications",
        href: "/admin/certifications",
    },
    {
        label: "Skills",
        href: "/admin/skills",
    },
    {
        label: "CV",
        href: "/admin/cv",
    },
];

export default function AdminNavigation() {
    return (
        <nav className="flex flex-wrap gap-3">
            {adminLinks.map((link) =>(
                <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300 transition hover:border-emerald-400 hover:text-white"
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}