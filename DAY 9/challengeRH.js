let YourName = prompt("Enter your name");
let salary = parseInt(prompt("Enter your salary"));
let age = prompt("Enter your age");

alert(YourName + " : " + salary + " : " + age);
let confirmation = true;

while (confirmation) {
  confirmation = prompt("y to yes and n to no");
  if (confirmation == "y") {
    confirmation = false;
  } else {
    YourName = prompt("Enter your name");
    salary = prompt("Enter your salary");
    age = prompt("Enter your age");
    alert(YourName + " : " + salary + " : " + age);
  }
}
let CurrentYear = 2025;
let tax = 0.015;
salary = salary + salary * tax;
let IncreaseSalary = salary;
console.log(IncreaseSalary);

let hiredStatusNextYear = prompt("Is he HIRED in the next year?");

while (hiredStatusNextYear == "h") {
  CurrentYear = CurrentYear + 1;
  tax *= 2;
  console.log(CurrentYear + " : " + (salary + salary * tax));
  hiredStatusNextYear = prompt("Is he HIRED in the next year?");
}
