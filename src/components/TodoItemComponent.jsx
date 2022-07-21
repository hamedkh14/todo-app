import { TodoItem, TodoItemText } from '../styles';
import { ButtonGroup, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import TodoContext from '../context';
import { useContext } from 'react';

function TodoItemComponent({id, content, done}) {
  const context = useContext(TodoContext);

  return (
    <TodoItem direction="row" spacing={1}>
      <Checkbox
        defaultChecked={done}
        onClick={() => context.handleStrike(id)}
      />
      <TodoItemText
        strike={done}
        variant="p"
        sx={{ textAlign: "left", width: "100%" }}
      >
        {content}
      </TodoItemText>
      <ButtonGroup disableElevation variant="contained">
        <IconButton aria-label="edit" color="success" onClick={() => context.handleEdit(id)}>
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => context.handleDelete(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </TodoItem>
  );
}

export default TodoItemComponent;