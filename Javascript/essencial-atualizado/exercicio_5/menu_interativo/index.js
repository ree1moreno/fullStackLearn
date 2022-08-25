let opcoes;

do {
  opcoes = prompt(
    "Escolha uma funcionalidade a seguir:\n\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar",
  );
  switch (opcoes) {
    case "1":
      alert(`Você escolheu a opção ${opcoes}.`);
      break;
    case "2":
      alert(`Você escolheu a opção ${opcoes}.`);
      break;
    case "3":
      alert(`Você escolheu a opção ${opcoes}.`);
      break;
    case "4":
      alert(`Você escolheu a opção ${opcoes}.`);
      break;

    default:
      alert("Encerrando o programa!");
  }
} while (opcoes !== "5");
