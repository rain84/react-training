import { useArray } from './useArray'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'

const Component = () => {
  const counter = useRef(0)
  const [arr, { add, remove, clear: clearArray }] = useArray()
  const addNext3 = () => {
    let c = 3
    const arr = []
    while (c--) arr.push(++counter.current)
    add(...arr)
  }
  const removeNext3 = () => {
    let c = 3
    const arr = []
    while (c--) arr.push(counter.current--)
    remove(...arr)
  }
  const clear = () => {
    counter.current = 0
    clearArray()
  }

  return (
    <>
      <button onClick={() => add(++counter.current)}>Add</button>
      <button onClick={addNext3}>Add next 3</button>
      <button onClick={() => remove(counter.current--)}>Remove</button>
      <button onClick={removeNext3}>Remove next 3</button>
      <button onClick={clear}>Clear</button>
      <span data-testid="text">{arr.join('')}</span>
    </>
  )
}

test('useArray', async () => {
  render(<Component />)

  const add = screen.getByText('Add')
  const addNext3 = screen.getByText('Add next 3')
  const remove = screen.getByText('Remove')
  const removeNext3 = screen.getByText('Remove next 3')
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

  await userEvent.click(addNext3)
  await userEvent.click(addNext3)
  expect(text.textContent).toBe('123456')

  await userEvent.click(removeNext3)
  expect(text.textContent).toBe('123')
  await userEvent.click(removeNext3)
  expect(text.textContent).toBe('')
})
