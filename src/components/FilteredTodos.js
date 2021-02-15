import React, { useState } from "react";

const FilteredTodos = (props) => {
  console.log(props.tods);
  return (
    <>
      {/* {props.tods.forEach(
        (element) =>
          JSON.stringify(element).includes(props.filtering) && (
            <li>{element}</li>
          )
      )}
      <li>{props.todos.includes(props.filtering) && console.log("done")}</li> */}
      {/* <li>
        {props.todos.username}: {props.todos.task}
      </li> */}
    </>
  );
};

export default FilteredTodos;
