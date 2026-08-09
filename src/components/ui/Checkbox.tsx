type CheckboxProps = {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
};

export default function Checkbox ({
    id, 
    label,
    checked,
    onChange,
}: CheckboxProps){
    return (
        <div className="flex items-center gap-3">
            <input  
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(event) => onChange(event.target.checked)}
                className="h-4 w-4"
            />

            <label
                htmlFor={id}
                className="text-sm text-zinc-300"
            >
                {label}
            </label>
        </div>
    );
}