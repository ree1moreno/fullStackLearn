const turista = prompt("Olá turista!\nInsira o seu nome:");
let verificaVisita = prompt(
  "Você já visitou alguma cidade? (Sim/Não)",
).toLocaleLowerCase();
let listaDeCidades = [];

while (verificaVisita === "sim") {
  const cidade = prompt("Insira o nome da cidade: ");
  listaDeCidades.push(cidade);
  verificaVisita = prompt(
    "Você já visitou alguma cidade? (Sim/Não)",
  ).toLocaleLowerCase();
}

alert(
  `${turista}! 
Você já visitou ${listaDeCidades.length} cidades. 
${listaDeCidades}`,
);
