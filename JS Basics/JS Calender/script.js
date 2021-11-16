let config = {
    offSetLastMonth: 2,
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

function printoffSet(getOffSet, month) {
    let offSet = getOffSet;
    let offSetString = "";
    for (let i = 0; i < offSet; i++) {
        offSetString += " - | ";
    }
    printDays(offSet, month, offSetString);
}

function printDays(offSet, month, offSetString) {
    offSetForPrint = offSet;
    let week = "";
    for (let i = 1; i <= month.days; i++) {
        let formatedNumber = getDayFormatted(i);
        week += formatedNumber + " | ";
        if (i + offSetForPrint == 7) {
            week = offSetString + week;
            console.log(week);
            week = "";
        } else if ((i + offSetForPrint) % 7 == 0) {
            console.log(week);
            week = "";
        } else if (i == month.days) {
            console.log(week);
            config.offSetLastMonth = (i + offSetForPrint) % 7;
            break;
        }
    }
}

function printCalenders() {
    for (let i = 0; i < config.months.length; i++) {
        printMonthName(config.months[i].name);
        printWeek();
        printoffSet(config.offSetLastMonth, config.months[i]);

    }
}

printCalenders();