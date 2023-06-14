import React, { useEffect, useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  console.log(input);
  const debounce = (e) => {
    // setInput(e.target.value);
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
