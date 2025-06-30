/*Array*/

let nomes = [];
let NewName = true;
let contadorArray = 0;

while (NewName) {
  let nome = prompt("Enter Name");
  nomes[contadorArray] = nome;

  let OptionContinue = prompt("1 to continue");
  if ((OptionContinue = !"1")) {
    NewName = false;
    continue;
  }
  contadorArray++;
}
