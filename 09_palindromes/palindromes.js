const palindromes = function (str) {
	const strArr = [];
	let reg = /[a-z]/;
	let lowStr = str.toLowerCase();
	let newStr = "";
	for (let i = 0; i<str.length; i++) {
		if (reg.test(lowStr[i])) {
			newStr += lowStr[i];
		}
	}
	for (let i = 0; i<str.length; i++) {
		strArr.push(newStr[i]);
	}
	
	strArr.reverse();
	let reverseStr = strArr.join("");

	if (newStr === reverseStr) {
		return true;
	} else {
		return false;
	}
};

console.log(palindromes("Race car"));


// Do not edit below this line
module.exports = palindromes;
