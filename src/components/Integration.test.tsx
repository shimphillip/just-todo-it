import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Form', () => {
  it('should add a new todo item when submit button is clicked', () => {
    const { getByTestId } = render(<App />);
    const tasks = getByTestId('tasks');
    const defaultTasksLength = tasks.children.length;

    fireEvent.change(getByTestId('form-input'), {
      target: { value: 'testing' },
    });
    fireEvent.click(getByTestId('submit-button'));

    expect(tasks.children.length).toBe(defaultTasksLength + 1);
  });

  it('should empty the input field after the submit button is clicked', () => {
    const { getByTestId } = render(<App />);
    const inputField = getByTestId('form-input') as HTMLInputElement;

    fireEvent.change(inputField, {
      target: { value: 'testing' },
    });
    fireEvent.click(getByTestId('submit-button'));

    expect(inputField.value).toBe('');
  });

  it('should not add a new todo item if the input field is empty', () => {
    const { getByTestId } = render(<App />);
    const tasks = getByTestId('tasks');
    const defaultTasksLength = tasks.children.length;

    fireEvent.change(getByTestId('form-input'), {
      target: {
        // empty string with lots of spaces
        value: '    ',
      },
    });
    fireEvent.click(getByTestId('submit-button'));

    expect(tasks.children.length).toBe(defaultTasksLength);
  });
});
