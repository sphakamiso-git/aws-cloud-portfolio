import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary" | "danger";
};

export default function Button ({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {

const baseClasses = 
    "rounded-lg px-6 py-3 font-semibold transition";
    
const variantClasses = {
    primary:
        "bg-emerald-400 text-black hover:bg-emerald-300",

    secondary:
        "border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800",

    danger:
        "bg-red-600 text-white hover:bg-red-500",
};

return (
<button
    className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    {...props}
>
    {children}
    </button>
);
}