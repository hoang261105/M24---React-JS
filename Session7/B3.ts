enum weekDays {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}

for (let i in weekDays) {
    if (isNaN(Number(i))) {
        console.log(i);
    }
}