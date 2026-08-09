type TextAreaProps = {
    id: string;
    label: string;
    value: string;
    rows?: number;
    placeholder?: string;
    onChange: (value: string) => void;
};

export default function TextArea({
    id,
    label,
    value,
    rows = 5,
    placeholder,
    onChange,
}: TextAreaProps) {
    return (
        <div>
            <label 
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-zinc-300"
            >
                {label}
            </label>

            <textarea  
                id={id}
                rows={rows}
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-emerald-400"
            />
        </div>
    )
}