"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "MONDAY";
    WeekDays["Tuesday"] = "TUESDAY";
    WeekDays["Wednesday"] = "WEDNESDAY";
    WeekDays["Thursday"] = "THURSDAY";
    WeekDays["Friday"] = "FRIDAY";
    WeekDays["Saturday"] = "SATURDAY";
    WeekDays["Sunday"] = "SUNDAY";
})(WeekDays || (WeekDays = {}));
function getWeekDay(days) {
    days.forEach(day => {
        console.log(WeekDays[day]);
    });
}
const allDays = Object.keys(WeekDays);
getWeekDay(allDays);
