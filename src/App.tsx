import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import NewTodo from "./Components/newTodo";
import { Todo } from "./todo.model";

import "./App.css";

const App: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  //To do adding function
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  //Deleting todos
  const deleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const toDoEdit = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, text: newText };
        } else {
          return toDo;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>TODO App</h1>
      </div>
      <div className="header">
        <NewTodo onAddTodo={todoAddHandler} />
      </div>{" "}
      <div className="todoList">
        {" "}
        <TodoList
          items={todos}
          onDeleteTodo={deleteHandler}
          toDoEdit={toDoEdit}
        />
      </div>
    </div>
  );
};

export default App;
