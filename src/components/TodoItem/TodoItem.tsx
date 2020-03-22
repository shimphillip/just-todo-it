import React from 'react';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const Todo: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div>
      <label>
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
