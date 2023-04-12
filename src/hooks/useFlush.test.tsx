import { useFlush } from './useFlush'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'

const Component = () => {
  const counter = useRef(0)
  const { flush } = useFlush()
  const onClickIncrement = () => {
    counter.current++
    flush()
  }
  const onClickNotIncrement = () => {
    counter.current++
  }

  return (
    <>
      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={onClickNotIncrement}>Not Increment</button>
      <span data-testid="text">{counter.current}</span>
    </>
  )
}

test('useFlush', async () => {
  render(<Component />)

  const increment = screen.getByText('Increment')
  const notIncrement = screen.getByText('Not Increment')
  const text = screen.getByTestId('text')

  await userEvent.click(notIncrement)
  await userEvent.click(notIncrement)
  await userEvent.click(notIncrement)
  expect(text.textContent).toBe('0')

  await userEvent.click(increment)
  await userEvent.click(increment)
  await userEvent.click(increment)
  expect(text.textContent).toBe('6')
})
