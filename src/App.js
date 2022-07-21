import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./App.css";
import { BoxGradientBackgroundStyle, ContainerStyle } from "./styles";
import { theme } from "./theme";
import TodoContext from "./context";
import AddTodoComponent from "./components/AddTodoComponent";
import TodoListComponent from "./components/TodoListComponent";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [lastedId, setLastedId] = useState(0);
  const [textFieldEdit, setTextFieldEdit] = useState("");

  const handleAdd = (event) => {
    setTodo(event.target.value);
  };

  const handleTodoListAdd = () => {
    if (todo == "") return;
    let newTodoList = todoList;
    newTodoList.push({
      id: lastedId + 1,
      content: todo,
      edit: false,
      done: false,
    });
    setLastedId(lastedId + 1);
    setTodoList(newTodoList);
    setTodo("");
  };

  const handleDelete = (id) => {
    let newTodoList = todoList.filter((item) => item.id != id);
    setTodoList(newTodoList);
  };

  const handleStrike = (id) => {
    let newTodo = todoList.map((item) => {
      if (item.id === id) {
        item.done = item.done ? false : true;
      }
      return item;
    });
    setTodoList(newTodo);
  };
  const handleEdit = (id) => {
    let newTodo = todoList.map((item) => {
      if (item.id === id) {
        item.edit = true;
      }
      return item;
    });
    setTodoList(newTodo);
  };

  const handleSave = (id, content) => {
    let newTodo = todoList.map((item) => {
      if (item.id === id) {
        item.edit = false;
        item.content = content;
      }
      return item;
    });
    setTodoList(newTodo);
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todo,
          todoList,
          lastedId,
          textFieldEdit,
          handleAdd,
          handleTodoListAdd,
          handleDelete,
          handleStrike,
          handleEdit,
          handleSave,
          setTextFieldEdit,
        }}
      >
        <ThemeProvider theme={theme}>
          <Box display={"flex"} justifyContent="center">
            <BoxGradientBackgroundStyle></BoxGradientBackgroundStyle>
            <ContainerStyle>
              <AddTodoComponent />
              <TodoListComponent />
            </ContainerStyle>
          </Box>
        </ThemeProvider>
      </TodoContext.Provider>
    </>
  );
}

export default App;
