import React from "react";
import HighComp from "../Hoc/HighComp";

const Button = (props) => {
  return <div style={props.style}>Hello Button</div>;
};

export default HighComp(Button);
