type DashboardCardProps = {
    title: string;
    value: string | number;
    description: string;
};

export default function DashboardCard({
    title,
    value,
    description,

}: DashboardCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm font-medium text-zinc-400">
                {title}
            </p>

            <p className="mt-3 text-3xl font-bold text-white">
                {value}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
                {description}
            </p>
        </div>
    );
}