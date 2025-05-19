let name = prompt("Enter your name");
let age = Number(prompt("Enter Your Age"));
let weight = prompt("Enter your weight");
let height = prompt("Enter yout height");
let carrer = prompt("Enter your carrer");

console.log(
  "USER INFORMATION: " +
    "name: " +
    name +
    " age: " +
    age +
    " weight: " +
    weight +
    " height: " +
    height +
    " carrer: " +
    carrer
);

if (age >= 18) {
  console.log("You are free to have a cold one");
} else {
  console.log("no cold one for you");
}

let days = age * 365;
let weeks = parseInt(days / 7);
let months = parseInt(days / 30);
console.log(
  " You Have, Days: " + days + " months: " + months + " weeks: " + weeks
);

var imc = parseInt(weight / (height * height));
console.log("here it is your IMC " + imc);

if (imc < 18) {
  console.log("thinness");
} else if (imc > 18 && imc <= 24) {
  console.log("normal");
} else if (imc > 24 && imc <= 30) {
  console.log("overweight");
} else {
  console.log("obesity");
}

let ages = 2025 - age;
for (i = 0; ages <= 2025; i++) {
  console.log(ages + ":" + i);
  ages++;
}
