export function isOnGoingDate(startDate: Date, endDate: Date): boolean {
    const now = new Date().getTime();
    return now >= startDate.getTime() && now <= endDate.getTime();
}