const baralho = [];
let opcoes;
alert(`Quantidade de cartas no baralho: ${baralho.length}`);

do {
  opcoes = prompt(`Quantidade de cartas no baralho: ${baralho.length}
O que deseja fazer?
1 - Adicionar uma carta
2 - Puxar uma carta
3 - Sair`);

  switch (opcoes) {
    case "1":
      const carta = prompt("Qual o nome da sua carta?");
      baralho.push(carta);
      alert(`A carta, ${carta}, foi adicionada com sucesso!`);
      break;
    case "2":
      const comprada = baralho.pop();
      alert(`A carta puxada foi ${comprada}.`);
      break;
    case "3":
      alert("Saindo da aplicação!");
      break;

    default:
      alert("Ação inválida!");
  }
} while (opcoes !== "3");
