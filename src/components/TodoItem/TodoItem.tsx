import React from 'react';

interface TodoItemProps {
  todo: Todo;
}

const Todo: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>{' '}
    </div>
  );
};

export default Todo;
