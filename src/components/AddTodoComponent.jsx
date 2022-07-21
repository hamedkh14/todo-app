import { Box, Typography } from '@mui/material';
import { AddButtonStyle, AddTodoFormStyle, TextFieldStyle } from '../styles';
import TodoContext from '../context';
import { useContext } from 'react';

function AddTodoComponent(props) {
  const context = useContext(TodoContext);
  return (
    <AddTodoFormStyle>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        New Todo:
      </Typography>
      <Box>
        <TextFieldStyle
          variant="outlined"
          size="small"
          value={context.todo}
          onChange={context.handleAdd}
        />
        <AddButtonStyle variant="contained" onClick={context.handleTodoListAdd}>
          Add
        </AddButtonStyle>
      </Box>
    </AddTodoFormStyle>
  );
}

export default AddTodoComponent;