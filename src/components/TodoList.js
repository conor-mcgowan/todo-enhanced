import React, { useState } from "react";
import Todo from "./Todo";
import FilteredTodos from "./FilteredTodos";

const TodoList = (props) => {
  console.log(props.todos);
  const [filtering, setFiltering] = useState("");
  const [filterResults, setFilterResults] = useState("");
  // const [sort, setSort] = useState("username");
  //   const [order, setOrder] = useState("az")
  console.log(JSON.stringify(props.todos));
  console.log(
    JSON.stringify(props.todos).toLowerCase().includes(filtering.toLowerCase())
  );
  return (
    <>
      <label>Filter</label>
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />

      <button
        onClick={(e) =>
          console.log(props.todos.includes(JSON.stringify(filtering)))
        }
      >
        Sort
      </button>
      <button onClick={() => console.log(JSON.stringify(filtering))}>
        filter results
      </button>
      {/* <label htmlFor="alphabetic"> Alphabetical</label>
      <input type="radio" id="alphabetic" name="sortType" />
      <label htmlFor="reverseAlphabetic"> Reverse Alphabetical</label>
      <input type="radio" id="reverseAlphabetic" name="sortType" ons /> */}
      {/* <ul>{props.todos.}</ul> */}
      <ul>
        {props.todos.map((todos, index) => {
          return (
            <FilteredTodos tods={todos} key={index} filtering={filtering} />
          );
        })}
      </ul>
      {/* <ul>
        {props.todos.map((t, index) => {
          return <Todo todos={t} key={index} />;
        })}
      </ul> */}
    </>
  );
};

export default TodoList;
