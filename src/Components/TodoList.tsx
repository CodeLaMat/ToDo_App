import React, { useState, useRef } from "react";
import { todoProp } from "../todo.model";
import "./TodoList.css";

const TodoList: React.FC<todoProp> = (props) => {
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const newValueRef = useRef<HTMLInputElement>(null);

  const handleEditClick = (id: string) => {
    setEditingItemId(id);
  };
  const handleDoneClick = (id: string) => {
    if (newValueRef.current?.value.length === 0) {
      return;
    }
    props.toDoEdit(id, newValueRef.current!.value);
    setEditingItemId(null);
  };

  return (
    <ul>
      {props.items.map((todo, index) => {
        return (
          <div className="todoList-container">
            <li key={todo.id}>
              {editingItemId === todo.id ? (
                <>
                  <input
                    type="text"
                    defaultValue={todo.text}
                    ref={newValueRef}
                    required
                  />{" "}
                  <button onClick={() => handleDoneClick(todo.id)}>Done</button>
                </>
              ) : (
                <span className="todo-text">{todo.text}</span>
              )}{" "}
              {editingItemId === todo.id ? (
                ""
              ) : (
                <button onClick={() => handleEditClick(todo.id)}>Edit</button>
              )}
              <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
                Delete
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;
