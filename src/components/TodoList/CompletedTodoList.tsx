import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

interface CompletedTodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const CompletedTodoList: React.FC<CompletedTodoListProps> = ({
  todos,
  toggleTodo,
}) => {
  return (
    <ul>
      {todos
        .filter(todo => todo.complete === true)
        .map(todo => (
          <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
    </ul>
  );
};

export default CompletedTodoList;
