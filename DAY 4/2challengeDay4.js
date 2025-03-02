let name = prompt("what's your name?");
let age1 = prompt("How old are you?");
let driversLicense = prompt("Do you have a driver's license");
let haveCar = prompt("do you have a car");

if (age1 <= 17 || driversLicense == "no") {
  document.write("you can't drive");
} else if (driversLicense == "yes" && haveCar == "no" && age1 >= 18) {
  document.write("you can drive but you don't have a car");
} else {
  document.write("you can drive");
}
