import React from 'react';
import './TodoItem.scss';
import { ReactComponent as CheckBox } from '../../assets/tick.svg';
import { ReactComponent as GarbageCan } from '../../assets/trash.svg';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const Todo: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className="task">
      <CheckBox width={20} height={20} />
      <label className={todo.complete ? 'complete' : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        <p className="text">{todo.text}</p>
      </label>{' '}
      <GarbageCan width={20} height={20} />
    </div>
  );
};

export default Todo;

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
