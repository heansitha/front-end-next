export default function DashboardLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            <h1 className="bg-blue-400">Dashboard Layout</h1>
            <div>{children}</div>
        </div>
    );
}