interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    id: string;
    label: string;
    value: string;
    options: SelectOption[];
    onChange: (value: string) => void;
}

export default function Select({ id, label, value, options, onChange,}:
    SelectProps) {
        return (
            <div>
                <label
                    htmlFor={id}
                    className="mb-2 block text-sm font-medium text-zinc-300"
                >
                    {label}
                </label>

                <select
                    id={id}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                >
                
                    <option value="">
                        Select a category
                    </option>

                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }