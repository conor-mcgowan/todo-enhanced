import React, { useState } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    {
      username: "Conor",
      task: "finish code",
    },
    { username: "Kevin", task: "catch z's" },
  ]);

  return (
    <>
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
            username,
            task,
          };
          console.log(newTodo);
          setTodos([...todos, newTodo]);
        }}
      >
        Add Todo
      </button>
      <TodoList todos={todos} />
    </>
  );
};

export default TodoApp;
