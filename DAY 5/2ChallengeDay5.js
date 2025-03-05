let ActionAtStation = prompt(
  "What Kind of action do you want to perform at the Gas station? Gasoline / Alcohol / Calibrate"
);
let litersGasoline = 0;
let litersAlcohol = 0;

switch (ActionAtStation) {
  case "gasoline":
    litersGasoline = parseInt(
      prompt("how many liters of gasoline do you want?")
    );
    document.write(
      "you filled up with " +
        litersGasoline +
        " liters of gasoline and you will pay $" +
        litersGasoline * 5 +
        " Dollars"
    );
    break;
  case "alcohol":
    litersAlcohol = parseInt(prompt("how many liters of Alcohol do you want?"));
    document.write(
      "you filled up with " +
        litersAlcohol +
        " liters of Alcohol and you will pay $" +
        litersAlcohol * 3 +
        " Dollars"
    );
    break;
  default:
    document.write("Tires successfully calibrated");
    break;
}
