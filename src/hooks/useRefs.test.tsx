import { useRefs } from './useRefs'
import { render, screen } from '@testing-library/react'
import { useEffect, useState } from 'react'

const Component = () => {
  const [refs, add] = useRefs()
  const [text, setText] = useState('')

  useEffect(() => {
    const text = refs.map((ref) => ref.textContent).join(', ')
    setText(text)
  }, [refs])

  // prettier-ignore
  return (
    <>
      <span data-testid="ref1" ref={add}>ref-1</span>
      <span data-testid="ref2" ref={add}>ref-2</span>
      <span data-testid="ref3" ref={add}>ref-3</span>
      <span data-testid="text">{text}</span>
    </>
  )
}

test('useRefs', async () => {
  render(<Component />)
  expect(screen.getByTestId('text').textContent).toBe('ref-1, ref-2, ref-3')
})
