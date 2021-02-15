import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  console.log(todo.id);
  // let color = todo.completed ? "yellow-green" : "tomato";
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.username}</td>
      <td>{todo.task}</td>
      <td>{todo.completed.toString()}</td>
      <td>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Todo;
