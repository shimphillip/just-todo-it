import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';

const initialTodos: Array<Todo> = [
  {
    text: 'todo1',
    complete: true,
  },
  {
    text: 'todo2',
    complete: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
