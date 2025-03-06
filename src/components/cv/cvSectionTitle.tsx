export default function CVSectionTitle({ title }: { title: string }) {
    return (
        <div className="w-full mt-4 mb-2">
            <h2 className="capitalize font-text text-lg font-semibold text-indigo-400">{title}</h2>
            <div className="w-full h-[1px] bg-indigo-400"></div>
        </div>
    );
}
