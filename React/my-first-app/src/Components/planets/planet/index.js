import { Component } from "react";
import GrayImg from "../../shared/gray_img";

async function getSattelites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: [],
    };
  }

  componentDidMount() {
    getSattelites(this.props.id).then((data) => {
      this.setState((state) => ({
        satellites: data["satellites"],
      }));
    });
  }

  render() {
    return (
      <div onClick={() => this.props.clickOnPlanet(this.props.name)}>
        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
        <GrayImg img_url={this.props.img_url} />
        <h3>Satélites</h3>
        <ul>
          {this.state.satellites.map((satellite, i) => (
            <li key={i}>Satélite {satellite.name}</li>
          ))}
        </ul>
        <hr />
      </div>
    );
  }
}

export default Planet;
