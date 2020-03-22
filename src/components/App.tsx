import React, { useState } from 'react';
import Header from './Header/Header'
import TodoList from './TodoList/TodoList';
import './App.scss';

const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write app', complete: false },
];

const App = () => {
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

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' &&
      setTodos([
        ...todos,
        {
          text: newTodo,
          complete: false,
        },
      ]);
  };

  return (
    <div className="container">
      <div className="header">
        <Header addTodo={addTodo}/>
      </div>
      <div className="tasks">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
