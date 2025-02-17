let nome = "";
let idade = 0;
let altura = 0;
let peso = 0;

nome = prompt("SEU NOME");
idade = prompt("SUA IDADE");
altura = prompt("SUA ALTURA");
peso = prompt("SEU PESO");

var imc = peso / (altura * altura);

var anoNascimento = 2023 - idade;

var msg =
  "Olá " +
  nome +
  ", você tem " +
  idade +
  ", nasceu em " +
  anoNascimento +
  ", tem " +
  altura +
  " de altura, pesa " +
  peso +
  " e seu IMC é " +
  imc +
  " Kg / m2 ";
document.write(msg);
