import TodoContext from '../context';
import { useContext } from 'react';
import TodoItemComponent from './TodoItemComponent';
import TodoEditComponent from './TodoEditComponent';

function TodoListComponent() {
  const context = useContext(TodoContext);

  return (
    <>
      {context.todoList.map((item, index) => {
        return (
          <>
            {
              item.edit ? <TodoEditComponent key={item.id} id={item.id} done={item.done} content={item.content} /> : <TodoItemComponent key={item.id} id={item.id} done={item.done} content={item.content} />
            }
          </>
        );
      })}
    </>
  );
}

export default TodoListComponent;