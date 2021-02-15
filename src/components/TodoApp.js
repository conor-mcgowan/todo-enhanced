import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [username, setUsername] = useState("");
  const [task, setTask] = useState("");
  const [id, setId] = useState(9);
  const [todos, setTodos] = useState([
    { id: 1, completed: true, username: "Conor", task: "finish code" },
    { id: 2, completed: false, username: "Kevin", task: "catch z's" },
    { id: 3, completed: true, username: "Hortense", task: "Study Spanish" },
    { id: 4, completed: true, username: "Wesley", task: "Storm the Castle" },
    { id: 5, completed: false, username: "Xavier", task: "Eat dinner" },
    { id: 6, completed: false, username: "Reginald", task: "Take a walk" },
    { id: 7, completed: false, username: "Abigail", task: "Go to work" },
    { id: 8, completed: false, username: "Mary", task: "Dance" },
  ]);

  function deleteTodo(toDelete) {
    let newArr = todos.filter((val) => val.id !== toDelete);
    setTodos(newArr);
  }

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
            id,
            completed: false,
            username,
            task,
          };
          setTodos([...todos, newTodo]);
          setId(id + 1);
        }}
      >
        Add Todo
      </button>
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </>
  );
};

export default TodoApp;
