let BankBalance = 1000;
let consult = true;
let highestValue = 0;
let TotalOperation = 0;
let averageOperations = 0;
let otherOperation1 = 0;

do {
  let name = prompt("enter your name");
  let cpf = Number(prompt("enter your cpf"));
  let value = Number(prompt("enter the value"));
  let Operation1 = Number(prompt("Press 1 to withdraw or 2 to deposit"));
  TotalOperation = TotalOperation + 1;
  if (value > highestValue) {
    highestValue = value;
  }
  if (Operation1 == 1) {
    if (value > BankBalance || value <= 0) {
      alert("lower balance or negative deposits are not allowed");
    }
    BankBalance = BankBalance - value;
    otherOperation1 = Number(
      prompt("Do you want to continue (1 for yes or 2 for not")
    );
  } else if (value == 2) {
    if (value <= 0) {
      alert("lower balance or negative deposits are not allowed");
    }
    BankBalance = BankBalance + value;
    otherOperation1 = Number(
      prompt("Do you want to continue (1 for yes or 2 for not")
    );
  } else {
    alert("which 1 or 2");
  }
  if (otherOperation1 == 2) {
    averageOperations = (averageOperations + value) / TotalOperation;
    document.write("your balance is: " + BankBalance);
    document.write("<br> the highest value operation is: " + highestValue);
    document.write("<br> average of all operations is: " + averageOperations);
    consult = false;
  }
} while (consult);
