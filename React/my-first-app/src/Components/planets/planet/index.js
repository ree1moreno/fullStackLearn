import { useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img";

async function getSattelites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSattelites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <GrayImg img_url={props.img_url} />
      <h3>Satélites</h3>
      <ul>
        {satellites.map((satellite, i) => (
          <li key={i}>Satélite {satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
