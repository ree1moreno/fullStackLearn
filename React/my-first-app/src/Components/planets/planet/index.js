import GrayImg from "../../shared/gray_img";
import { Link } from "react-router-dom";

const Planet = (props) => {
  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <Link to={`/planet/${props.id}`}>
        <h4>{props.name}</h4>
      </Link>
      <p>{props.description}</p>
      <GrayImg img_url={props.img_url} />
      <hr />
    </div>
  );
};

export default Planet;
