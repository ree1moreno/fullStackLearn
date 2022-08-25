let palavra = prompt(
  "Informe uma palavra para a verificação: ",
).toLocaleLowerCase();
let armazenaLetras = [];

for (let i = palavra.length - 1; i >= 0; i--) {
  armazenaLetras.push(palavra[i]);
}

const palavraInvertida = armazenaLetras.toString().replaceAll(",", "");

if (palavra === palavraInvertida) {
  alert(`${palavra} é palíndromo!!`);
} else {
  alert(`Não é um palíndromo.
Entrada: ${palavra}
Saída: ${palavraInvertida}`);
}
