let config = {
    start: 2,
    months: [
        { name: 'Jan', days: 31 },
        { name: 'Feb', days: 28 },
        { name: 'Mar', days: 31 },
        { name: 'Apr', days: 30 },
        { name: 'May', days: 31 },
        { name: 'Jun', days: 30 },
        { name: 'Jul', days: 31 },
        { name: 'Aug', days: 31 },
        { name: 'Sep', days: 30 },
        { name: 'Oct', days: 31 },
        { name: 'Nov', days: 30 },
        { name: 'Dec', days: 31 },
    ],
    days: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
};


function printMonthName(monthName) {
    console.log("-----------------------------------")
    console.log(monthName);
}

function printWeek() {
    console.log(config.days.join(' | '));
}

function getDayFormatted(numberOfDay) {
    if (numberOfDay < 10) {
        return ("0" + numberOfDay);
    }
    return (numberOfDay)

}

function printDays(month) {
    let week = "";
    for (let i = 1; i <= month.days; i++) {
        let formatedNumber = getDayFormatted(i);
        week += formatedNumber + " | "
        if (i % 7 == 0) {
            console.log(week)
            week = ""
        }
        if (i == month.days) {
            console.log(week);
            break;
        }
    }
}

function getLeftDaysFromOtherMonth(weekLength) {
    console.log("Hello World")
}

function printCalenders() {
    for (let i = 0; i < config.months.length; i++) {
        printMonthName(config.months[i].name);
        printWeek();
        printDays(config.months[i]);

    }
}

printCalenders();