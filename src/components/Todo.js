import React from "react";

const Todo = ({ todo, deleteTodo, changeComplete }) => {
  let color = todo.completed ? "yellowgreen" : "tomato";
  return (
    <tr style={{ backgroundColor: color }}>
      <td>{todo.id}</td>
      <td>{todo.username}</td>
      <td>{todo.task}</td>
      <td>{todo.completed.toString()}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => changeComplete(todo.id)}
        />
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Todo;
