import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  complete: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, complete }) => {
  const completedTodos = todos.filter(todo => todo.complete);
  const incompleteTodos = todos.filter(todo => !todo.complete);

  const renderTodoItem = (todo: Todo) => (
    <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
  );

  return (
    <ul className="todos">
      {complete
        ? completedTodos.map(renderTodoItem)
        : incompleteTodos.map(renderTodoItem)}
    </ul>
  );
};

export default TodoList;
