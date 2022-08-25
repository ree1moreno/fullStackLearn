let valor = Number(
  prompt("Escolha um número inteiro de 1 a 20 para fazer a tabuada."),
);
let tabuada = [];

for (let index = 0; index <= valor; index++) {
  tabuada.push(`${valor} x ${index} = ${index * valor}`);
}

const tabuadaString = tabuada.toString().replaceAll(",", "\n");
alert(`Tabuada:
${tabuadaString}`);
