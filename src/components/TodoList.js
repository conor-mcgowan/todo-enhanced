import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  const [filtering, setFiltering] = useState("");
  const [sortKey, setSortKey] = useState("username");
  const [sortOrder, setSortOrder] = useState(1);

  return (
    <>
      <label>Filter</label>
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <br />
      <label htmlFor="sort"> Sort by</label>
      <select
        id="sort"
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
      >
        <option value="username">Username</option>
        <option value="task">Task</option>
      </select>
      <label htmlFor="order">Order by</label>
      <select
        id="order"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="1">A-Z</option>
        <option value="-1">Z-A</option>
      </select>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Completed</th>
            <th>Name</th>
            <th>Task</th>
          </tr>
          {todos
            .filter((val) => {
              let filterLC = filtering.toLowerCase();
              let usernameLC = val.username.toLowerCase();
              let taskLC = val.task.toLowerCase();
              if (usernameLC.includes(filterLC) || taskLC.includes(filterLC)) {
                return true;
              }
              return false;
            })
            .sort((a, b) => {
              if (sortKey === "id") {
                return (a.id - b.id) * sortOrder;
              }
              if (a[sortKey].toLowerCase() < b[sortKey].toLowerCase()) {
                return -1 * sortOrder;
              }
              if (a[sortKey].toLowerCase() > b[sortKey].toLowerCase()) {
                return 1 * sortOrder;
              }
              return 0;
            })
            .map((t) => {
              return <Todo deleteTodo={deleteTodo} todo={t} key={t.id} />;
            })}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
