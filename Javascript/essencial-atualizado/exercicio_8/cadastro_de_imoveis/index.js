let opcoes;
const listaDeImoveis = [];

function exibirImoveis() {
  const mostrarImoveis = [];
  listaDeImoveis.forEach(({ dono, quartos, banheiros, garagem }, index) => {
    mostrarImoveis.push(`${index + 1}º imóvel:
Nome do Proprietário: ${dono}
Quantidade de quartos: ${quartos}
Quantidade de banheiros: ${banheiros}
Possui garagem: ${garagem}\n\n`);
  });
  alert(mostrarImoveis.toString().replaceAll(",", ""));
}

do {
  opcoes = prompt(
    "Bem vindo ao cadastro de imóveis\nTotal de imóveis: " +
      listaDeImoveis.length +
      ", escolha uma ação:\n1 - Cadastrar imóveis\n2 - Mostrar imóveis\n3 - Sair",
  );

  switch (opcoes) {
    case "1":
      const imovel = {};

      imovel.dono = prompt("Informe o nome do proprietário: ");
      imovel.quartos = prompt("Informe a quantidade de quartos: ");
      imovel.banheiros = prompt("Informe a quantidade de banheiros: ");
      imovel.garagem = prompt("Informe se possui garagem: ");
      listaDeImoveis.push(imovel);
      break;
    case "2":
      exibirImoveis();
      break;
    case "3":
      alert("Saindo do aplicativo..");
      break;

    default:
      alert("Opção inválida!");
  }
} while (opcoes !== "3");
