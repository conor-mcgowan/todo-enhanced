import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";
import "./components/TodoApp.css";
import "./components/TodoList.css";
import "./components/Todo.css";

function App() {
  return (
    <>
      <header>
        <h1>Tada! Todos</h1>
      </header>
      <main>
        <div>
          <TodoApp />
        </div>
      </main>
    </>
  );
}

export default App;
