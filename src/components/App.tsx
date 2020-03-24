import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import Footer from './Footer';

const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write app', complete: false },
];

interface AppProps {
  initialTodosImport?: Array<Todo>;
}

const App: React.FC<AppProps> = ({ initialTodosImport }) => {
  const [todos, setTodos] = useState(initialTodosImport || initialTodos);
  const [darkMode, setDarkMode] = useState(true);

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

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    setDarkMode(!darkMode);
  };

  return (
    <div className="wrapper">
      <div className="introduction">
        <h1>
          Just DO IT
          <span aria-label="Check mark" role="img">
            ✔
          </span>
        </h1>
        <ToggleTheme darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="container">
        <Router>
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
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
