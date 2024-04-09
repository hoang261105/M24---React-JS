"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["MONDAY"] = 0] = "MONDAY";
    weekDays[weekDays["TUESDAY"] = 1] = "TUESDAY";
    weekDays[weekDays["WEDNESDAY"] = 2] = "WEDNESDAY";
    weekDays[weekDays["THURSDAY"] = 3] = "THURSDAY";
    weekDays[weekDays["FRIDAY"] = 4] = "FRIDAY";
    weekDays[weekDays["SATURDAY"] = 5] = "SATURDAY";
    weekDays[weekDays["SUNDAY"] = 6] = "SUNDAY";
})(weekDays || (weekDays = {}));
for (let i in weekDays) {
    if (isNaN(Number(i))) {
        console.log(i);
    }
}
