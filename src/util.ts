export function formatDate(date: Date) {
    return date.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}
