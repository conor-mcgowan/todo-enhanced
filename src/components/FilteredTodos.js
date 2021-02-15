import React, { useState } from "react";

const FilteredTodos = (props) => {
  return (
    <>
      <li>{props.filtering}</li>
      <li>
        {props.todos.username}: {props.todos.task}
      </li>
    </>
  );
};

export default FilteredTodos;
