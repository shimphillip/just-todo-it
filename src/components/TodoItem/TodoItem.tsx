import React from 'react';
import './TodoItem.scss';
import { ReactComponent as CheckBox } from '../../assets/tick.svg';
import { ReactComponent as GarbageCan } from '../../assets/trash.svg';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

const Todo: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="task">
      <div className="toggle-box" onClick={() => toggleTodo(todo)}>
        <CheckBox className="check-box" />
        <p className="text">{todo.text}</p>
      </div>
      <GarbageCan className="garbage-can" onClick={() => deleteTodo(todo)} />
    </div>
  );
};

export default Todo;

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
