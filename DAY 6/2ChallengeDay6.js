let table = parseInt(prompt("Number of Table"));

for (let i = 1; i <= 3; i++) {
  if (i == 1) {
    for (p = 0; p <= 10; p++) {
      document.write(table + " x " + p + " = " + table * p + "<br>");
    }
  } else if (i == 2) {
    table += 1;
    for (s = 0; s <= 10; s++) {
      document.write(table + " x " + s + " = " + table * s + "<br>");
    }
  } else {
    table += 1;
    for (t = 0; t <= 10; t++) {
      document.write(table + " x " + t + " = " + table * t + "<br>");
    }
  }
}
