const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    if (min > max) { 
        [min, max] = [max, min]; // this swaps their positions if min is greater than max, (called 'destructuring')
        //  so we always count from the smaller number to the larger number
     } 

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
