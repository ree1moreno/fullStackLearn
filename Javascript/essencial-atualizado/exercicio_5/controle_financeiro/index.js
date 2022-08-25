let saldo = Number(
  prompt(
    "Bem vindo ao seu aplicativo de controle financeiro.\nInforme quanto de dinheiro tem disponível: ",
  ),
);
let opcoes;

do {
  opcoes = prompt(
    "Saldo Disponível: R$ " +
      saldo +
      "\nEscolha qual ação deseja realizar:\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair",
  );

  switch (opcoes) {
    case "1":
      let adicionar = Number(prompt("Quanto dinheiro deseja adicionar?"));
      saldo += adicionar;
      break;
    case "2":
      let remover = Number(prompt("Quanto dinheiro deseja adicionar?"));
      saldo -= remover;
      break;
    default:
      alert("Saindo do aplicativo!");
  }
} while (opcoes !== "3");

alert(`Saldo final: R$ ${saldo}`);
