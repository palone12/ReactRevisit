import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Form = ({ value }) => {
  const [input, setInput] = useState("");
  console.log(input);
  const debounce = (e) => {
    setInput(value);
    setTimeout(() => {
      setInput(e.target.value);
    }, 5000);
  };
  return (
    <div>
      <label>Name</label>
      <input type="text" onChange={(e) => debounce(e)} />
    </div>
  );
};

export default Form;

Form.prototype = {
  value: PropTypes.string,
};
