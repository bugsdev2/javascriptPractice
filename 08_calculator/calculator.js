const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
	arr.forEach(item => {
		sum += item;
	});
	return sum;
};

const multiply = function(arr) {
	let product = 1
	arr.forEach((item) => {
		product *= item;
	});
	return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let fact = 1;
	for (num; num>0; num--) {
		fact = fact * num;
	}
	return fact;
};

console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
