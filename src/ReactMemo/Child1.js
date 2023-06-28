import React from "react";
import Child2, { MemoizedComponent2 } from "./Child2";

const Child1 = ({ list }) => {
  console.log("Todo component rendered");
  return (
    <ul>
      {list.map((item) => (
        <MemoizedComponent2 key={item.id} item={item} />
      ))}
    </ul>
  );
};

export const MemoizedComponent = React.memo(Child1);
