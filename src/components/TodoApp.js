import React, { useState, useMemo, useContext } from "react";
import TodoList from "./TodoList";
import { TodoContext } from "../contexts/TodoContexts";

const TodoApp = (props) => {
  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");
  const [id, setId] = useState(9);
  const todos = useContext(TodoContext);
  // todos.value = the actual array
  // todos.add = function to add todos
  // todos.clear = function that resets to []
  // todos.delete = function that deletes based on id
  //
  //

  const incompleteTodos = useMemo(
    () =>
      todos.value.filter((val) => {
        return !val.completed;
      }),
    [todos.value]
  );

  return (
    <>
      <h1>
        Welcome, there are currently {incompleteTodos.length} unfinished Todos
      </h1>
      <label htmlFor="username">Name</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="task"> Task</label>
      <input
        id="task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          let newTodo = {
            id,
            username,
            task,
            completed: false,
          };
          todos.add(newTodo);
          setId(id + 1);
          setUsername("");
          setTask("");
        }}
      >
        Add Todo
      </button>
      <TodoList />
    </>
  );
};

export default TodoApp;
