// Declaring a variable
//keyword identifier/VariableName = value
var firstName = "Augustina";
let lastName = "Djaba";
let age = 27;
let isMarried = true;
let children = ["Gifty", "Eric", "Clement"];
let other = {
  favoritecolor: "Gold",
  favoritecolor: "Soccer",
  favoritecolor: "Apple",
};
const fullName = firstName + " " + lastName; // concatenation
const myself = "My name is ${firstName} ${lastName}.";
console.log(myself);

// STRINGS
let sentence = "This is a story about Augustina Djaba in Cape Coast";
console.log(sentence.length);
console.log(sentence.split("Djaba"));
console.log(sentence.replace("Djaba", "Mensah"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("Spot"));
console.log(sentence.includes("out"));

// ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.shift());
console.log(days.indexOf("Friday"));
console.log(days[5]); // retrieving date
days[5] = "Sunday"; // change date in the array
console.log(days);

// OBJECT
let person = {
  firstName: "Augustina",
  lastName: "Djaba",
  age: 27,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
