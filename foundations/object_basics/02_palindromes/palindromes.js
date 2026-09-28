const palindromes = function (str) {
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const validatedStr = 
        str.toLowerCase()
        .split('')
        .filter((character) => allowedCharacters.includes(character))
        .join('');

    const reversedString = validatedStr.split('').reverse().join('');

    return validatedStr === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
