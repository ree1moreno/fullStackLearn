import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
  const names = ["A", "B", "C", "D"];
  // const satellites = names.map((n, i) => <li key={i}>Satélite {n}</li>);

  if (!props.description)
    return (
      <div onClick={() => props.clickOnPlanet(props.name)}>
        <h4>{props.name}</h4>
        <GrayImg img_url={props.img_url} />
      </div>
    );

  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <GrayImg img_url={props.img_url} />
      <h3>Satélites</h3>
      {/* <ul>{satellites}</ul> */}
      <ul>
        {names.map((n, i) => (
          <li key={i}>Satélite {n}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
