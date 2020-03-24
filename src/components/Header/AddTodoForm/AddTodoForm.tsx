import React, { useState, ChangeEvent, FormEvent } from 'react'
import './AddTodoForm.scss'

interface AddTodoFormProps {
  addTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTodo}
        onChange={handleChange}
        data-testid="form-input"
      />
      <button type="submit" onClick={handleSubmit} data-testid="submit-button">
        Add Todo
      </button>
    </form>
  )
}

export default AddTodoForm
