import Neo from "./neo.js";
import { getNeos } from "./neo_service.js";

async function loadNeos() {
  let neos = [];
  let neosJson = await getNeos();
  neosJson.forEach((neo) => {
    const minDiameter =
      neo["estimated_diameter"]["kilometers"]["estimates_diameter_min"];
    const maxDiameter =
      neo["estimated_diameter"]["kilometers"]["estimates_diameter_max"];
    const averegareDiameter = [minDiameter + maxDiameter] / 2;
    const newNeo = new Neo(
      neo["id"],
      neo["name"],
      averegareDiameter,
      neo["is_sentry_object"],
    );
    neos.push(newNeo);
  });
  renderNeos(neos);
}

function renderNeos(neos) {
  const ulElement = document.getElementById("neos-list");
  neos.forEach((neo) => {
    const liElement = document.createElement("li");
    const isSentry = neo.isSentry
      ? "Perigo de colisão"
      : "Sem perigo de colisão";
    const text = `${neo.id} | ${neo.name} | ${neo.averegareDiameter} | ${isSentry}`;
    liElement.innerText = text;
    ulElement.appendChild(liElement);
  });
}

loadNeos();
