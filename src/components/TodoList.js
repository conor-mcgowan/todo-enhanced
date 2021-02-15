import React, { useState } from "react";
import Todo from "./Todo";
import FilteredTodos from "./FilteredTodos";

const TodoList = (props) => {
  console.log(props.todos);
  const [filtering, setFiltering] = useState("");
  const [filterResults, setFilterResults] = useState("");
  // const [sort, setSort] = useState("username");
  //   const [order, setOrder] = useState("az")
  return (
    <>
      <label>Filter</label>
      <input type="text" onChange={(e) => setFiltering(e.target.value)} />

      <button
        onClick={(e) => setFilterResults(props.todos.includes(filtering))}
      >
        Sort
      </button>
      <button onClick={() => console.log(filterResults)}>filter results</button>
      {/* <label htmlFor="alphabetic"> Alphabetical</label>
      <input type="radio" id="alphabetic" name="sortType" />
      <label htmlFor="reverseAlphabetic"> Reverse Alphabetical</label>
      <input type="radio" id="reverseAlphabetic" name="sortType" ons /> */}
      {/* <ul>{props.todos.}</ul> */}
      <ul>
        {props.todos.includes(filtering) &&
          props.todos.map((tod, index) => {
            return (
              <FilteredTodos todos={tod} key={index} filtering={filtering} />
            );
          })}
      </ul>
      <ul>
        {props.todos.map((t, index) => {
          return <Todo todos={t} key={index} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
