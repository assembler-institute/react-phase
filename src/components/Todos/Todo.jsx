import React, { memo, useId } from "react";

const Todo = ({ todos, addTodo }) => {
  console.log(useId());
  return (
    <>
      <h2>Todo</h2>
      {todos.map((todos, index) => {
        return <p key={index}>{todos}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todo); // repitan
