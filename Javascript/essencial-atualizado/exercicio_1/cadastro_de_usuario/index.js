let nome = prompt("Digite o seu nome: ");
let sobrenome = prompt("Digite o seu sobrenome: ");
let estudo = prompt("Digite o seu campo de estudo: ");
let ano = prompt("Digite o seu ano de nascimento: ");

const data = new Date();
let atual = data.getFullYear();

let idade = atual - Number(ano);

alert(
  `Bem vindo ${nome} ${sobrenome}, você tem ${idade} anos e está estudando ${estudo}.`,
);
