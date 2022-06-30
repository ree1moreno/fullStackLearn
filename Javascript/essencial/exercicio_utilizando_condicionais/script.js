let pilotName = prompt("Bem vindo piloto! Qual o seu nome?");

let velocity = 0;

let newVelocity = prompt(
  "Tudo pronto, vamos partir! Acelerar nave para: " + "km/s",
);

let confirmVelocity = confirm(`Estamos acelerando para ${newVelocity} km/s`);

if (confirmVelocity) {
  velocity = newVelocity;
}

if (velocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
  alert("Você está devagar, podemos aumentar mais");
} else if (velocity >= 40 && velocity < 80) {
  alert("Parece uma boa velocidade para manter");
} else if (velocity >= 80 && velocity < 100) {
  alert("Velocidade alta. Considere diminuir");
} else {
  alert("Velocidade perigosa. Controle automático forçado");
}

alert(
  `Vamos lá ${pilotName}. Estamos voando a uma velocidade de ${velocity} km/s`,
);
