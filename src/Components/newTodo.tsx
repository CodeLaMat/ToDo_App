import React, { useRef } from "react";
import "./newTodo.css";
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      textInputRef.current!.value = "";
    } else {
      props.onAddTodo(enteredText);
      textInputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={todoHandler}>
      <div className="form-container">
        <div className="form-control">
          <input
            type="text"
            id="todo-text"
            ref={textInputRef}
            placeholder="Task..."
          />
          {/* <input type="number" placeholder="Deadline (in Days)..." /> */}
        </div>
        <button type="submit">Add todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
