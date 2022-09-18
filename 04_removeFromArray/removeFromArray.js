// declare an empty array variable
// create a function that takes in two arguments ; the first being an array, and the second being an item (string or number)
// if the first item is not an array, display error.
// if second item not in the array, display "NOT IN ARRAY"
// if item is in array, remove it from array. I think we can use for loop along with continue to loop through each item in array and compare it.
// let's begin!

const removeFromArray = function(arr, ...items) {
	if (Array.isArray(arr) !== Array.isArray([])) {
		return "The first item is not an array";
	}
	let bool = false;
	const itemArr = [] 
	arr.forEach((arrayItem) => { 
		items.forEach((item) => {
			if (arrayItem === item) {
				itemArr.push(item);
				bool = true;
			}
		});
	});
	if (bool === false) {
		return arr;
	} else {
		itemArr.forEach((item) => {
			arr.forEach((arrItem) => {
				if (item === arrItem) {
					arr.splice(arr.indexOf(arrItem), 1);
				}
			});
		});
	}
	return arr;

}

console.log(removeFromArray([1,2,3,4], 9,4,10));

console.log(removeFromArray(['hey',2,3,4], 'hey', "tacos"));



// Do not edit below this line
module.exports = removeFromArray;
