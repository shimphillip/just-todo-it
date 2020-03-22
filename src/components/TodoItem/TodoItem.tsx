import React from 'react';
import './TodoItem.scss';
interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const Todo: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div>
      <label className={todo.complete ? 'complete' : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>{' '}
    </div>
  );
};

export default Todo;
