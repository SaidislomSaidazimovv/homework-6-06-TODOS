import React from "react";
import { useTodoStore } from "../store/useTodoStore";

export default function AnotherComponent() {
  const { todos } = useTodoStore();

  return (
    <div className="seperate-component">
      <h2 className="sub-title">Another Component</h2>
      {todos.map((todo) => (
        <>{todo.text}</>
      ))}
    </div>
  );
}
