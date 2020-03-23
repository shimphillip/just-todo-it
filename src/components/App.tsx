import React, { useState } from 'react';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// this is where you can update initial todos
const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write app', complete: false },
];

interface AppProps {
  initialTodosImport: Array<Todo>;
}

const App: React.FC<AppProps> = ({ initialTodosImport }) => {
  const [todos, setTodos] = useState(initialTodosImport || initialTodos);

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
    if (newTodo.trim() === '') return false;

    const newTodos = [
      ...todos,
      {
        text: newTodo,
        complete: false,
      },
    ];

    setTodos(newTodos);
  };

  const deleteTodo: DeleteTodo = selectedTodo => {
    const newTodos = todos.filter(todo => todo !== selectedTodo);
    setTodos(newTodos);
  };

  return (
    <Router>
      <div className="center">
        <div className="introduction">
          <h1>
            JUST DO IT
            <span aria-label="Check mark" role="img">
              ✔
            </span>
          </h1>
          <div className="theme-toggler">theme toggler</div>
        </div>
        <div className="container">
          <Header todos={todos} addTodo={addTodo} />
          <div className="tasks">
            <Switch>
              <Route exact path="/completed">
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  complete={true}
                />
              </Route>
              <Route exact path="/">
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  complete={false}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
