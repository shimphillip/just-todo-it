import React from 'react'
import './Status.scss'

interface StatusProps {
  todos: Array<Todo>
}

const Status: React.FC<StatusProps> = ({ todos }) => {
  const activeTodos = todos.filter(todo => !todo.complete)

  return <p className="status">{activeTodos.length} Active Tasks</p>
}

export default Status
