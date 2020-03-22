import React from 'react';
import Moment from 'react-moment';
import Nav from './Nav/Nav';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import './Header.scss';

interface HeaderProps {
  addTodo: AddTodo;
}

const Header: React.FC<HeaderProps> = ({ addTodo }) => {
  return (
    <header>
      <div className="left">
        <Moment format="dddd MMMM, Do">{new Date()}</Moment>
        <p className="status">2 Active Tasks</p>
        <AddTodoForm addTodo={addTodo} />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
