import { useState } from "react";

const Form = (props) => {
  const initialState = { name: "", description: "", img_url: "" };
  const [field, setField] = useState({
    name: "",
    description: "",
    img_url: "",
  });

  const handleChange = (event) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    props.addPlanet(field);
    event.preventDefault();
    setField(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={field.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={field.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img_url">Imagem:</label>
          <input
            type="text"
            id="img_url"
            name="img_url"
            value={field.img_url}
            onChange={handleChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
