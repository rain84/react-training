import { useState } from 'react'

export const useToggle = (init = false): [boolean, () => void] => {
  const [state, setState] = useState(init)
  return [state, () => setState((state) => !state)]
}
