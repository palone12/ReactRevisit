import React, { useState } from "react";
import { MemoizedComponent } from "./Child1";

const Parent = () => {
  console.log("App component rendered");
  const [todo, setTodo] = useState([
    { id: 1, title: "Read Book" },
    { id: 2, title: "Fix Bug" },
  ]);
  const [text, setText] = useState("");

  const addTodo = () => {
    let newTodo = { id: 3, title: text };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add todo
      </button>
      <MemoizedComponent list={todo} />
    </div>
  );
};

export default Parent;
