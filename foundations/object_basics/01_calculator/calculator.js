const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let count = 1

  for (let i = num; i > 0; i--) {
    count *= i;
  }

  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
