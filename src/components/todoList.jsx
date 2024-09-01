import React from "react";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoList() {
  const [todoValue, setTodoValue] = React.useState("");
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore(
    (state) => state
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="new-todo">
          New Todo
        </label>
        <input
          className="input"
          type="text"
          id="new-todo"
          name="newTodo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button className="button" type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "unset",
                }}
              >
                {todo.text}{" "}
              </span>
              {!todo.isCompleted ? (
                <button className="done-btn" onClick={() => completeTodo(todo.id)}>Done</button>
              ) : null}
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
