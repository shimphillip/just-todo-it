import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.scss'

interface TodoListProps {
  todos: Array<Todo>
  toggleTodo: ToggleTodo
  deleteTodo: DeleteTodo
  complete: boolean
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  complete,
}) => {
  const completedTodos = todos.filter(todo => todo.complete)
  const incompleteTodos = todos.filter(todo => !todo.complete)

  const renderTodoItem = (todo: Todo) => (
    <TodoItem
      key={todo.text}
      todo={todo}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  )

  return (
    <ul className="tasks" data-testid="tasks">
      {complete
        ? completedTodos.map(renderTodoItem)
        : incompleteTodos.map(renderTodoItem)}
    </ul>
  )
}

export default TodoList
