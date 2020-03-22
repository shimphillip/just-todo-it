import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
  todos: Array<Todo>;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.text} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
