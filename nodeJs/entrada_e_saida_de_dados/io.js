const process = require("process");

process.stdout.write("Digite o seu nome: ");
process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Texto do usuário: ${keyboard}`);
  process.exit();
});

// console.log(process.argv);

// [
//   '/home/reemoreno/.nvm/versions/node/v16.16.0/bin/node', -> onde está instalado o node
//   '/home/reemoreno/fullStack/nodeJs/entrada_e_saida_de_dados/node_696db594357b5.tmp' -> onde está o script que está rodando
// ]
