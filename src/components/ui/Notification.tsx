type NotificationProps = {
    type: "success" | "error";
    message: string;
};

export default function Notification({
    type, 
    message,
}: NotificationProps) {
    return (
        <div 
            className={`mb-6 rounded-lg border p-4 ${
                type === "success"
                ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                : "border-red-500 bg-red-500/10 text-red-400"
            }`}
        >
        {message}
        </div>
    )
}