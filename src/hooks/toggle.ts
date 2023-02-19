import { useState } from 'react'

export const useToggle = (x = false): [boolean, () => void] => {
  const [state, setState] = useState(false)
  return [state, () => setState((state) => !state)]
}
