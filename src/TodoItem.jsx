import React from "react";

function TodoItem({ title, done, id, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggle(id, !done)}
      />
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
