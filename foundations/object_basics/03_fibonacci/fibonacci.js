const fibonacci = function(num) {
    if (num < 0 || typeof num !== "number") return "OOPS";
    if (num === 0) return 0;

    let firstPrevious = 1;
    let secondPrevious = 0;

    for (let i = 2; i <= num; i++) {
        const current = firstPrevious + secondPrevious;
        [secondPrevious, firstPrevious] = [firstPrevious, current];
    }

    return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
