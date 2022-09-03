import { useState, useEffect } from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta: ${name}`);
};

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();

  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLast = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };

  return (
    <div>
      <h3>Planet List</h3>
      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLast}>Duplicate Last</button>
      <hr />
      {planets.map((planet, i) => (
        <Planet
          key={i}
          id={planet.id}
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          clickOnPlanet={clickOnPlanet}
        />
      ))}
    </div>
  );
};

export default Planets;
