import React from "react";
import TodoList from "./components/todoList";
import SeperateComponent from "./components/seperateComponent";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Todo list App</h1>
      <TodoList />
      <SeperateComponent />
    </div>
  );
}
