import { AddButtonStyle, TextFieldStyle, TodoItem } from '../styles';
import { Box, Typography } from '@mui/material';
import TodoContext from '../context';
import { useContext, useState } from 'react';

function TodoEditComponent({id, content}) {
  const context = useContext(TodoContext);
  const [textFieldEdit, setTextFieldEdit] = useState(content);
  
  const handleChangeText = (event) => {
    setTextFieldEdit(event.target.value);
  };

  return (
    <TodoItem direction="row" spacing={1}>
      <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>Edit: </Typography>
      <Box sx={{width: '100%'}}>
        <TextFieldStyle
          variant="outlined"
          size="small"
          value={textFieldEdit}
          onChange={handleChangeText}
          fullWidth
        />
        <AddButtonStyle variant="contained" onClick={() => context.handleSave(id, textFieldEdit)}>
          Save
        </AddButtonStyle>
      </Box>
    </TodoItem>
  );
}

export default TodoEditComponent;