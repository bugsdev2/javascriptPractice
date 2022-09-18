const caesar = function(str, num) {
	let newUni="";
	let newStr = "";
	const reg = /[^a-zA-Z]/;
	for (let i=0; i<str.length;i++) {
		newUni = str.charCodeAt(i) + num;
		if (reg.test(String.fromCharCode(newUni))) {
			newUni--;
			console.log(newUni);
		}
		newStr += String.fromCharCode(newUni);
		
	}
	console.log(newStr);
};

caesar("Hey", 5)

// Do not edit below this line
module.exports = caesar;
