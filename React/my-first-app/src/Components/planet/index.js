import { useState, useEffect } from "react";
import GrayImg from "../shared/gray_img";
import Form from "../planets/form";
import { useParams, useNavigate, Navigate } from "react-router-dom";

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = () => {
  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState({});
  const [redirect, setRedirect] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getPlanet(id).then(
      (data) => {
        setSatellites(data["satellites"]);
        setPlanet(data["data"]);
      },
      (error) => {
        setRedirect(true);
      },
    );
  }, []);

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  const goToPlanets = () => {
    navigate("/");
  };

  if (redirect) return <Navigate replace to="/" />;

  return (
    <div>
      <h4>{planet.name}</h4>
      <p>{planet.description}</p>
      <GrayImg img_url={planet.img_url} />
      <h3>Satélites</h3>
      <hr />
      <Form addSatellite={addSatellite} />
      <hr />

      <ul>
        {satellites.map((satellite, i) => (
          <li key={i}>Satélite {satellite.name}</li>
        ))}
      </ul>
      <hr />
      <button type="button" onClick={goToPlanets}>
        Voltar para lista
      </button>
    </div>
  );
};

export default Planet;
