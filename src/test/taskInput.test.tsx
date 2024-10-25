import { render, screen, fireEvent } from '@testing-library/react';
import TaskInput from '../components/TaskInput';
import { vi } from 'vitest';

test('allows adding a task', () => {
  const addTask = vi.fn()
  render(<TaskInput addTask={addTask} />)

  const input = screen.getByPlaceholderText(/Введите новую заметку/i)
  const button = screen.getByText(/Добавить заметку/i)

  fireEvent.change(input, { target: { value: 'New Task' } })
  fireEvent.click(button)

  expect(addTask).toHaveBeenCalledWith('New Task')
  expect((input as HTMLInputElement).value).toBe('');
});