let NumberCollection = [];
let NumberByUser = "Number";

for (i = 0; i <= 5; i++) {
  NumberByUser = prompt("Enter One Number");
  NumberCollection[i] = NumberByUser;
}
for (i = 5; i >= 0; i--) {
  console.log(NumberCollection[i]);
}
