import React, { useState } from "react";

const FilteredTodos = (props) => {
  return (
    <li>
      {props.todos.username}: {props.todos.task}
    </li>
  );
};
