let HowManyNumbers = Number(
  prompt("Enter How many number do you want to have")
);

let numbers = [];
for (i = 0; i <= HowManyNumbers; i++) {
  numbers[i] = Number(prompt("Add a Number at position " + i));
}
console.log("from first to last");
for (i = 0; i <= HowManyNumbers; i++) {
  console.log(numbers[i]);
}
console.log("from last to first");
for (i = HowManyNumbers; i >= 0; i--) {
  console.log(numbers[i]);
}
