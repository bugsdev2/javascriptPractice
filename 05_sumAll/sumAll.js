const sumAll = function(numStart, numEnd) {
	let temp = 0;
	if (numStart < 0 || numEnd < 0 || typeof numStart !== typeof 1 || typeof numEnd !== typeof 1) {
		return "ERROR";
	} else if (numStart > numEnd) {
		temp = numStart;
		numStart = numEnd;
		numEnd = temp;
	}
	let sum = 0;
	while (numStart <= numEnd) {
		sum += numStart;
		numStart++; 
	}
	return sum;
};

console.log(sumAll(1, 4));


// Do not edit below this line
module.exports = sumAll;
