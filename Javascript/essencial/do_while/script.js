// principal diferença pro while é que ele executa uma ação antes de verificar a condição

let velocity = 50;
let accelaration = 5;

do {
  velocity += accelaration;
  console.log(`Acelerando: Estamos a ${velocity} km/s`);
} while (velocity <= 100);

// se trocar a velocity para um número maior do que 100 ele ainda executa o código pelo menos uma vez
