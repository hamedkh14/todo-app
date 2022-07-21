import { createContext } from "react";

const TodoContext = createContext({
  todo: "",
  todoList: "",
  lastedId: 0,
  handleAdd: () => {},
  handleTodoListAdd: () => {},
  handleDelete: () => {},
  handleStrike: () => {},
  handleEdit: () => {},
  handleSave: () => {},
});

export default TodoContext;
