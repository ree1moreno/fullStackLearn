/* High Order Function significa Função de Alta Classe
 São funções que recebem ou retornam outras funções
 As funções que uma HOF recebem, gerlamente são anônimas
  - Podendo ser uma Arrow Function ou não
 A função que é enviada como parâmetro de uma HOF é chamada de callback */

function doubleVelocity(velocity, printer) {
  console.log("Entrei em doubleVelocity");
  let newVelocity = velocity * 2;
  printer(newVelocity);
  return newVelocity;
}

let printVelocity = (velocity) => {
  console.log(`Nova velocidade: ${velocity} km/s.`);
};

let finalVelocity = doubleVelocity(60, printVelocity);
console.log(finalVelocity);

let anotherVelocity = doubleVelocity(50, (velocity) => {
  console.log(`Outra velocidade: ${velocity} km/s.`);
});
