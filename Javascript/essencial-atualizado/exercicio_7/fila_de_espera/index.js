const listaDePacientes = ["Mateus", "Marcos"];
function alertBoard() {
  let fila = [];
  for (let i = 0; i < listaDePacientes.length; i++) {
    fila.push(`${i + 1}º - ${listaDePacientes[i]}`);
  }
  console.log(fila);
  alert(`Lista de pacientes: 
${fila.toString().replaceAll(",", "\n")}`);
}
alertBoard();
let opcoes;

do {
  opcoes = prompt(
    "Escolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair",
  );

  switch (opcoes) {
    case "1":
      const novoPaciente = prompt("Insira o nome do novo paciente");
      listaDePacientes.push(novoPaciente);
      alertBoard();
      break;
    case "2":
      const consulta = listaDePacientes.shift();
      alert(`Você está consultando: ${consulta}`);
      break;
    case "3":
      alert("Saindo da aplicação.");
      break;

    default:
      alert("Ação inválida!");
  }
} while (opcoes !== "3");
