import { AddButtonStyle, TextFieldStyle, TodoItem } from '../styles';
import { Box, Typography } from '@mui/material';
import TodoContext from '../context';
import { useContext, useState } from 'react';

function TodoEditComponent({id, content}) {
  const context = useContext(TodoContext);
  context.setTextFieldEdit(content);

  const handleChangeText = (event) => {
    context.setTextFieldEdit(event.target.value);
  };

  return (
    <TodoItem direction="row" spacing={1}>
      <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Edit: </Typography>
      <Box sx={{width: '100%'}}>
        <TextFieldStyle
          variant="outlined"
          size="small"
          value={context.textFieldEdit}
          onChange={handleChangeText}
          fullWidth
        />
        <AddButtonStyle variant="contained" onClick={() => context.handleSave(id)}>
          Save
        </AddButtonStyle>
      </Box>
    </TodoItem>
  );
}

export default TodoEditComponent;