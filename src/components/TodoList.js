import React, { useState } from "react";
import Todo from "./Todo";

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
        onClick={(e) =>
          props.todos.filter(
            (item) =>
              item.includes(filtering) &&
              item.map((filteredItem) => <div>{filteredItem}</div>)
          )
        }
      >
        Sort
      </button>
      {/* <label htmlFor="alphabetic"> Alphabetical</label>
      <input type="radio" id="alphabetic" name="sortType" />
      <label htmlFor="reverseAlphabetic"> Reverse Alphabetical</label>
      <input type="radio" id="reverseAlphabetic" name="sortType" ons /> */}
      {/* <ul>{props.todos.}</ul> */}
      <ul>
        {props.todos.map((t, index) => {
          return <Todo todos={t} key={index} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
