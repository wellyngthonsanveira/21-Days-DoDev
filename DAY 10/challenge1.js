let MyNubers = prompt("Enter Number");
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i <= array1.length; i++) {
  if (MyNubers == array1[i]) {
    console.log("Your number is in position " + i);
  }
}
