import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
