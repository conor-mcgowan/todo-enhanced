import React, { useState } from "react";

const Todo = (props) => {
  return (
    <li>
      {props.todos.username}: {props.todos.task}
    </li>
  );
};

export default Todo;
