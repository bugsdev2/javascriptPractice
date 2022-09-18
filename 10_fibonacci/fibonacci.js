const fibonacci = function(count) {
	if (count<0) {
		return "OOPS";
	}
	const fibArr = [1,1];
	for (let i = 2; i<count; i++) {
		fibArr.push( fibArr[i-1] + fibArr[i-2] );
	}
		
	
	return fibArr[fibArr.length-1];
};

console.log(fibonacci(2))
// Do not edit below this line
module.exports = fibonacci;
