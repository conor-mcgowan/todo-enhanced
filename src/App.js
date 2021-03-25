import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";
import "./components/TodoApp.css";
import "./components/TodoList.css";
import "./components/Todo.css";
import TodoProvider from "./contexts/TodoContexts";

function App() {
  return (
    <TodoProvider>
      <header>
        <h1>Tada! Todos</h1>
      </header>
      <main>
        <div>
          <TodoApp />
        </div>
      </main>
    </TodoProvider>
  );
}

export default App;
