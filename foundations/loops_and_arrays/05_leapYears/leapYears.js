const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isDivisibleByOneHundred = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;

    const isALeapYear = isDivisibleByFour && !isDivisibleByOneHundred || isDivisibleByFourHundred;
    return isALeapYear;
};

// Do not edit below this line
module.exports = leapYears;
