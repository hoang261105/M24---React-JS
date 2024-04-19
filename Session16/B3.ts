enum WeekDays {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY",
}

function getWeekDay<T extends keyof typeof WeekDays>(days: T[]): void {
    days.forEach(day => {
        console.log(WeekDays[day]);
    })
}

const allDays: (keyof typeof WeekDays)[] = Object.keys(WeekDays) as (keyof typeof WeekDays)[];
getWeekDay(allDays);