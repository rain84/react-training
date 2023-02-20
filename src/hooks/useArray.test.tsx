import { useArray } from './useArray'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'

const Component = () => {
  const counter = useRef(0)
  const [arr, { add, remove, clear }] = useArray()
  return (
    <>
      <button onClick={() => add(++counter.current)}>Add</button>
      <button onClick={() => remove(counter.current--)}>Remove</button>
      <button onClick={() => clear()}>Clear</button>
      <span data-testid="text">{arr.join('')}</span>
    </>
  )
}

test('useArray', async () => {
  render(<Component />)

  const add = screen.getByText('Add')
  const remove = screen.getByText('Remove')
  const clear = screen.getByText('Clear')
  const text = screen.getByTestId('text')

  await userEvent.click(add)
  expect(text.textContent).toBe('1')

  await userEvent.click(add)
  expect(text.textContent).toBe('12')

  await userEvent.click(add)
  expect(text.textContent).toBe('123')

  await userEvent.click(remove)
  expect(text.textContent).toBe('12')

  await userEvent.click(clear)
  expect(text.textContent).toBeFalsy()
})
