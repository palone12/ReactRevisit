import React from "react";
const Child2 = ({ item }) => {
  console.log("TodoItem component rendered");
  return <li>{item.title}</li>;
};

export const MemoizedComponent2 = React.memo(Child2);
