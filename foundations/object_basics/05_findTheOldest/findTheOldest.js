function getAge(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        yearOfDeath = new Date().getFullYear(); // if theres no year of death, then we just use the current year :D
    }

    return yearOfDeath - yearOfBirth;
}

const findTheOldest = function(obj) {
    return obj.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge < currentPersonAge ? currentPerson : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
