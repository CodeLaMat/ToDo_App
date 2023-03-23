export interface Todo {
  id: string;
  text: string;
}

export interface todoProp {
  items: Array<{ id: string; text: string }>;
  onDeleteTodo: (id: string) => void;
  toDoEdit: (id: string, newText: string) => void;
}
