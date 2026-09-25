const removeFromArray = function(mainArg, ...otherArgs) {
    let resultArray = [];

    mainArg.forEach(element => {
        if (!otherArgs.includes(element)) {
            resultArray.push(element);
        }
    });

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
