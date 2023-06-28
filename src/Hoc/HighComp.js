import React from "react";
const styles = {
  dark: {
    background: "red",
    color: "white",
  },
  light: {
    background: "yellow",
    color: "black",
  },
};
const HighComp = (WrappedComp) => {
  return (args) => {
    let temp = {};
    if (args.dark) {
      temp = { ...styles.dark };
    } else if (args.light) {
      temp = { ...styles.light };
    }

    let obj = { ...args, style: temp };
    console.log(obj);

    return <WrappedComp {...obj} />;
  };
};

export default HighComp;
