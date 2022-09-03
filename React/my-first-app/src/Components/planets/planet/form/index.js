import { useState } from "react";

const Form = (props) => {
  const initialState = { name: "" };
  const [field, setField] = useState(initialState);

  const handleChange = (event) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSatellite(field);
    setField(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={field.name}
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
