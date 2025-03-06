let number = parseInt(prompt("Number"));

for (let i = 0; i <= number; i++) {
  document.write(i + "<br>");
}
document.write("-------------------- <br>");

for (let con = 0; con <= number; con += 5) {
  document.write(con + "<br>");
}

document.write("-------------------- <br>");

for (let con = number; con >= 0; con -= 5) {
  document.write(con + "<br>");
}

