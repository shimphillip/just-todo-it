import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './components/App'
import { testTodos as initialTodosImport } from './fixtureTestData'

const defaultProps = {
  initialTodosImport,
}

const renderApp = (props = defaultProps) => {
  return render(<App {...props} />)
}

describe('Add a task in the form', () => {
  it('should add a new todo item when submit button is clicked', () => {
    const { getByTestId } = renderApp()
    const tasks = getByTestId('tasks')
    const defaultTasksLength = tasks.children.length

    fireEvent.change(getByTestId('form-input'), {
      target: { value: 'testing' },
    })
    fireEvent.click(getByTestId('submit-button'))

    expect(tasks.children.length).toBe(defaultTasksLength + 1)
  })

  it('should empty the input field after the submit button is clicked', () => {
    const { getByTestId } = renderApp()
    const inputField = getByTestId('form-input') as HTMLInputElement

    fireEvent.change(inputField, {
      target: { value: 'testing' },
    })
    fireEvent.click(getByTestId('submit-button'))

    expect(inputField.value).toBe('')
  })

  it('should not add a new todo item if the input field is empty', () => {
    const { getByTestId } = renderApp()
    const tasks = getByTestId('tasks')
    const defaultTasksLength = tasks.children.length

    fireEvent.change(getByTestId('form-input'), {
      target: {
        // empty string with lots of spaces
        value: '    ',
      },
    })
    fireEvent.click(getByTestId('submit-button'))

    expect(tasks.children.length).toBe(defaultTasksLength)
  })
})

describe('Remove a task', () => {
  it('should remove a todo item clicking on the delete button', () => {
    const { getByTestId } = renderApp()
    const tasks = getByTestId('tasks')
    const tasksLength = tasks.children.length
    const randomNumber = Math.floor(Math.random() * tasksLength)
    // select a random task to delete
    const randomTask = tasks.children[randomNumber]
    // delete button is the 2nd child of the task
    const deleteButton = randomTask.children[1]

    fireEvent.click(deleteButton)

    expect(tasks.children.length).toBe(tasksLength - 1)
  })
})

describe('Toggle/update a task', () => {
  // a better test is to visit the other route /complete and check if the list has added an extra task
  it('should update a task to complete from incomplete when clicked', () => {
    const { getByTestId } = renderApp()
    const tasks = getByTestId('tasks')
    const tasksLength = tasks.children.length
    const firstTask = tasks.children[0]
    const toggleDiv = firstTask.children[0]

    fireEvent.click(toggleDiv)

    expect(tasks.children.length).toBe(tasksLength - 1)
  })
})
