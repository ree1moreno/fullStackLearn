const velocidade1 = Number(
  prompt("Insiar a velocidade do primeiro veículo em km/h"),
);
const velocidade2 = Number(
  prompt("Insiar a velocidade do segundo veículo em km/h"),
);

console.log(velocidade1, typeof velocidade1);

if (velocidade1 > velocidade2) {
  alert(`A velocidade do primeiro veículo é maior, ${velocidade1} km/h.`);
} else if (velocidade1 < velocidade2) {
  alert(`A velocidade do segundo veículo é maior, ${velocidade2} km/h.`);
} else if (velocidade1 === velocidade2) {
  alert(`As velocidades dos veículos são iguais, ${velocidade1} km/h.`);
} else {
  alert("Velocidade inválida");
}
