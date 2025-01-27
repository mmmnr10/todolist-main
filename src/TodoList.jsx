// TodoList.jsx
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        id: Date.now(),
        title: newTodo,
        done: false,
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id, done) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: done };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>My To Do List</h1>
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter ..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
