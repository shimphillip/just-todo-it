import React, { useState } from 'react';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CompletedTodoList from './TodoList/CompletedTodoList';

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
    <Router>
      <div>
        <div className="container">
          <Header addTodo={addTodo} />
          <div className="tasks">
            <Switch>
              <Route path="/completed">
                <CompletedTodoList todos={todos} toggleTodo={toggleTodo} />
              </Route>
              <Route path="/">
                <TodoList todos={todos} toggleTodo={toggleTodo} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
