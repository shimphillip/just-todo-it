import React from 'react';
import TodoList from './components/TodoList/TodoList';

const todos: Array<Todo> = [
  {
    text: 'todo1',
    complete: true,
  },
  {
    text: 'todo2',
    complete: false,
  },
];

function App() {
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
