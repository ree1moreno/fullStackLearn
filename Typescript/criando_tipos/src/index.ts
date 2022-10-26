let literal: "Hello, world!";

let pi: 3.14159;

// pi = 3; // Type '3' is not assignable to type '3.14159'.

const test = 5;

// let option: "Yes" | "No" | "Maybe";
let option: number | boolean;

option = 2;
option = true;

// option = "Yes"; // Type '"Yes"' is not assignable to type 'number | boolean'.

type Planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";

let planet: Planet;

let homePlanet: Planet;

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra");
  }
}

type GreetingCallback = (name: string) => void;

function greet(callbackfn: GreetingCallback) {
  let name = "Isaac";
  callbackfn(name);
}
