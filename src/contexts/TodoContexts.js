import React from "react";
import { useArray } from "../hooks/useArray";

const initialState = [
  { id: 1, completed: true, username: "Conor", task: "finish code" },
  { id: 2, completed: false, username: "Kevin", task: "catch z's" },
  { id: 3, completed: true, username: "Hortense", task: "Study Spanish" },
  { id: 4, completed: true, username: "Wesley", task: "Storm the Castle" },
  { id: 5, completed: false, username: "Xavier", task: "Eat dinner" },
  { id: 6, completed: false, username: "Reginald", task: "Take a walk" },
  { id: 7, completed: false, username: "Abigail", task: "Go to work" },
  { id: 8, completed: false, username: "Mary", task: "Dance" },
];

export const TodoContext = React.createContext(null);

export const TodoProvider = (props) => {
  const todos = useArray(initialState);
  return (
    <TodoContext.Provider value={todos}>{props.children}</TodoContext.Provider>
  );
};
export default TodoProvider;
