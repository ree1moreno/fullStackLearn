// Blocos de códigos que são executados baseado no resultado de uma expressão lógica
let velocity = 120;

if (velocity < 100) {
  console.log("Estamos numa velocidade aceitável");
} else {
  console.log("Entrando em velocidade de risco!");
}

if (velocity < 40) {
  console.log("Velocidade baixa");
} else if (velocity <= 100) {
  console.log("Cuidado! Próximo a velocidade de risco");
} else {
  console.log("Velocidade de risco");
}

// Operador ternário
velocity > 100
  ? console.log("Velocidade maior que 100")
  : console.log("Velocidade menor que 100");
