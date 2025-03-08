let condition = true;
while (condition) {
  let Yourage = Number(prompt("Your age"));
  if (Yourage < 18) {
    document.write("You are a minor <br>");
    condition = false;
  }
}
document.write("outside the while");
