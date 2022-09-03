import { Component } from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta: ${name}`);
};

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          name: "Mercúrio",
          description:
            "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
        },
        {
          name: "Plutão",
          description:
            "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
        },
      ],
    };
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
