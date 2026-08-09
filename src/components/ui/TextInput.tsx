type TextInputProps = {
    id: string;
    label: string;
    type?: "text" | "url" | "email";
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
};

export default function TextInput({
    id,
    label,
    type = "text",
    value,
    placeholder,
    onChange,
}: TextInputProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-zinc-300"
                >
                {label}
            </label>

            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
            />
           
        </div>
    )
}