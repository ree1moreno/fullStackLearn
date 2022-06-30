// variáveis são recursos para armazenamento de dados que serão reutilizados no código
// existem 3 tipos: var, let e const

let spaceship = "FE Supernova";
console.log(spaceship); // FE Supernova
spaceship = "FE Helmet";
console.log(spaceship); // FE Helmet

// com a declaração da variável com 'let' é possível reatribuir o valor da variável

const squad = "Estelar";
console.log(squad); // Estelar
squad = "Espacial";
console.log(squad); // Erro: TypeError: Assignment to constant variable.

// com a declaração da variável com 'const' não é possível reatribuir o valor da variável, retorna um erro

var velocity = 80;
console.log(velocity); // 80
velocity = 25;
console.log(velocity); // 25

// com a declaração da variável com 'var' é possível reatribuir o valor da variável, diferença para o let é o escopo

let noValue;
console.log(noValue); // undefined

let departureConfirmation = confirm(
  "Nave pronta para decolar. Aguardando confirmação!",
);
console.log(departureConfirmation); // se clicar em OK retorna true, se clicar em cancelar retorna false

// IMPORTANTE: os nomes das variáveis não devem ter espaço entre as palavras
let my age // errado
let myAge; my-age; MyAge; // correto
