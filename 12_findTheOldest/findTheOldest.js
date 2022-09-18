const findTheOldest = function(people) {
	let oldest = people
					.map(person => {
						if (person.yearOfDeath == undefined) {
							let today = new Date();
							let year = today.getFullYear();
							person.yearOfDeath = year;
						}
						let age = person.yearOfDeath-person.yearOfBirth;
						person["age"] = age;
						return person;
					})
					.reduce((person1,person2) => {
						return person1.age > person2.age ? person1 : person2;
					})
	return oldest;
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]



console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
