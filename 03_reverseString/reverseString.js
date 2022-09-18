const reverseString = function(str) {
	const strArr = [];
	let finalStr = "";
	for (let i=0; i<str.length; i++) {
		strArr.push(str[i]);
		}
	strArr.reverse();
	finalStr = strArr.join("");
	return finalStr;
}

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
