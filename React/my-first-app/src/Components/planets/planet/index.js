import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <GrayImg img_url={props.img_url} />
      <h3>Satélites</h3>
      <hr />
    </div>
  );
};

export default Planet;
