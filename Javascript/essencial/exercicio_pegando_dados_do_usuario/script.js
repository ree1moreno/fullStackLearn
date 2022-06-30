alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

let nome = prompt("Digite o seu nome.");

let idade = prompt("Digite a sua idade.");

let isCorrect = confirm(`A sua idade é: ${idade}?`);
isCorrect ? (isCorrect = "Verdadeiro") : (isCorrect = "Confirme sua idade");

alert(`Bem-vindo ${nome}!`);
alert(`Idade: ${idade}`);
alert(`Idade confirmada: ${isCorrect}`);

while (isCorrect === "Confirme sua idade") {
  idade = prompt("Digite a sua idade.");
  isCorrect = confirm(`A sua idade é: ${idade}?`);
}

// https://codepen.io/ree1moreno/pen/QWmWNgw?editors=0011
