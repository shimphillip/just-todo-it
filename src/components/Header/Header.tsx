import React from 'react';
import Moment from 'react-moment';
import Nav from './Nav/Nav';
import Status from './Status/Status';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import './Header.scss';

interface HeaderProps {
  addTodo: AddTodo;
  todos: Array<Todo>;
}

const Header: React.FC<HeaderProps> = ({ todos, addTodo }) => {
  return (
    <header>
      <div className="left">
        <Moment format="dddd MMMM, Do">{new Date()}</Moment>
        <Status todos={todos} />
        <AddTodoForm addTodo={addTodo} />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
