let n1 = parseInt(prompt("Enter the first number"));
let n2 = parseInt(prompt("Enter the second number"));
let operator = prompt("what type of operation do you want to perform? + - * /");
let op = 0;
switch (operator) {
  case "+":
    op = n1 + n2;
    document.write(op);
    break;
  case "-":
    op = n1 - n2;
    document.write(op);
    break;
  case "*":
    op = n1 + n2;
    document.write(op);
    break;
  case "/":
    op = n1 / n2;
    document.write(op);
    break;
  default:
    document.write(
      "You must choose what type of operation you want to perform + - * /"
    );
    break;
}
