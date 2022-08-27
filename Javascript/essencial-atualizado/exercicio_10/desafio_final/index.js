let menu;
let listaDeVagas = [
  {
    nome: "Dev Jr",
    desc: "Vaga de desenvolvedor frontend",
    enc: "10/09/2022",
    candidatos: 0,
    nomeCandidato: [],
  },
  {
    nome: "Dev Pl",
    desc: "Vaga de desenvolvedor frontend",
    enc: "10/09/2022",
    candidatos: 0,
    nomeCandidato: [],
  },
  {
    nome: "Dev Sr",
    desc: "Vaga de desenvolvedor frontend",
    enc: "10/09/2022",
    candidatos: 0,
    nomeCandidato: [],
  },
];

function listarVagas() {
  const vagas = [];

  if (!listaDeVagas.length) alert("Ainda não há vagas.");

  listaDeVagas.forEach(({ nome, candidatos }, i) =>
    vagas.push(`${i + 1}ª vaga - ${nome}
Número de candidatos: ${candidatos}\n\n`),
  );
  if (vagas.length)
    alert(`Quantidade de vagas: ${vagas.length}

${vagas.toString().replaceAll(",", "")}`);
}

function criarVaga() {
  const vaga = {};
  vaga.nome = prompt("Informe o nome da vaga: ");
  vaga.desc = prompt("Informa a descrição da vaga: ");
  vaga.enc = prompt("Informe a data de encerramento da vaga: (dd/mm/aaaa)");
  vaga.candidatos = 0;
  vaga.nomeCandidato = "";

  const confirmacao = confirm(`Confirmar a nova vaga: 
Vaga: ${vaga.nome}
Descrição: ${vaga.desc}
Data de encerramento: ${vaga.enc}`);

  if (confirmacao) listaDeVagas.push(vaga);
}

function visualizarUmaVaga() {
  const indice = Number(
    prompt("Informe o número da vaga que deseja visualizar."),
  );

  const verificarVaga = listaDeVagas.find((_e, i) => i === indice);

  alert(`Vaga número ${indice}
Vaga: ${verificarVaga.nome}
Descrição: ${verificarVaga.desc}
Data de encerramento: ${verificarVaga.enc}
Número de candidatos: ${verificarVaga.candidatos}
Nomes dos candidatos: ${verificarVaga.nomeCandidato
    .toString()
    .replaceAll(",", ", ")}`);
}

function inscreverCandidato() {
  const indice = Number(
    prompt("Informe o número da vaga que deseja se inscrever"),
  );
  const nomeCandidato = prompt("Informe o nome do candidato: ");
  const verificarVaga = listaDeVagas.find((_e, i) => i === indice);
  verificarVaga.candidatos += 1;
  verificarVaga.nomeCandidato.push(nomeCandidato);
}

function excluirVaga() {
  const indice = Number(prompt("Informe o número da vaga que deseja excluir."));

  const verificarVaga = listaDeVagas.find((_e, i) => i === indice);

  const confirmacao = confirm(`Essa é a vaga que deseja apagar?
Vaga número ${indice}
Vaga: ${verificarVaga.nome}
Descrição: ${verificarVaga.desc}
Data de encerramento: ${verificarVaga.enc}
Número de candidatos: ${verificarVaga.candidatos}
Nomes dos candidatos: ${verificarVaga.nomeCandidato
    .toString()
    .replaceAll(",", ", ")}`);

  if (confirmacao)
    listaDeVagas = listaDeVagas.filter(
      ({ nome }) => nome !== verificarVaga.nome,
    );
}

do {
  menu = prompt(`Bem vindo ao sistema de vagas!
O que deseja fazer?

1 - Listar vagas disponíveis
2 - Criar uma nova vaga
3 - Visualizar uma vaga
4 - Inscrever um candidato em uma vaga
5 - Excluir uma vaga
6 - Sair`);

  switch (menu) {
    case "1":
      listarVagas();
      break;
    case "2":
      criarVaga();
      break;
    case "3":
      visualizarUmaVaga();
      break;
    case "4":
      inscreverCandidato();
      break;
    case "5":
      excluirVaga();
      break;
    case "6":
      alert("Saindo do sistema..");
      break;

    default:
      alert("Opção inválida!");
  }
} while (menu !== "6");
