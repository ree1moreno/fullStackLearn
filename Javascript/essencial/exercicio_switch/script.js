let distanteLightYear = prompt(
  "Bem vindo, diga qual distância (em anos-luz) pretende viajar",
);

alert("Você pode converter para saber a distância em:\n- pc\n- au\n- km");

let chosenConversion = prompt("Para qual medida você deseja converter?");
let convertedDistance;

switch (chosenConversion) {
  case "pc":
    convertedDistance = distanteLightYear * 0.306601;
    break;
  case "au":
    convertedDistance = distanteLightYear * 63241.1;
    break;
  case "km":
    convertedDistance = distanteLightYear * 9.5 * Math.pow(10, 12);
    break;
  default:
    convertedDistance = "Conversão fora do escopo.";
}

alert(
  `Distância em anos-luz: ${distanteLightYear}\nDistância em Quilômetros: ${convertedDistance}`,
);
