let op = parseInt(prompt("enter table"));
document.write("table of " + op + " is: <br>");
document.write("---------------- + -------------- <br>");
for (let contador = 0; contador <= 100; contador++) {
  document.write(op + " + " + contador + "=" + (op + contador) + "<br>");
  if (contador == 100) {
    document.write("---------------- X -------------- <br>");
    for (let x = 0; x <= 100; x++) {
      document.write(op + " x " + x + "=" + op * x + "<br>");
    }
  }
}
