import { Component } from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta: ${name}`);
};

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();

  return data;
}

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }));
    });
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  duplicateLast = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

  render() {
    return (
      <div>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicateLast}>Duplicate Last</button>
        <hr />
        {this.state.planets.map((planet, i) => (
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
  }
}

export default Planets;
